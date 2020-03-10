const Handlebars = require('handlebars');

// Simple Iterators
console.log('\n---- Simple Iterators ----');
console.log(
    Handlebars.compile(`
        {{#each links}}
            <a href="{{url}}">{{title}}</a>
        {{/each}}`)({
        links: [
            { url: 'http://www.yehudakatz.com', title: 'Katz Got Your Tongue' },
            {
                url: 'http://www.sproutcore.com/block',
                title: 'SproutCore Blog',
            },
        ],
    })
);

// implement `each` block helper
Handlebars.registerHelper('customEach', function(list, options) {
    return new Handlebars.SafeString(list.map(options.fn).join(''));
});
console.log(
    Handlebars.compile(`
        {{#customEach links}}
            <a href="{{url}}">{{title}}</a>
        {{/customEach}}`)({
        links: [
            { url: 'http://www.yehudakatz.com', title: 'Katz Got Your Tongue' },
            {
                url: 'http://www.sproutcore.com/block',
                title: 'SproutCore Blog',
            },
        ],
    })
);

// implement high level block helper
// support helper and block helper
Handlebars.registerHelper('list', function(list, options) {
    const fn =
        options.fn ||
        function(ctx) {
            return `<a href="${ctx.url}">${ctx.title}</a>`;
        };

    return new Handlebars.SafeString(
        ['<ul>', ...list.map(v => `<li>${fn(v)}</li>`), '</ul>'].join('')
    );
});
console.log(
    Handlebars.compile(`
        {{list links}}
        
        {{#list links}}
            <a href="{{url}}">{{title}}</a>
        {{/list}}`)({
        links: [
            { url: 'http://www.yehudakatz.com', title: 'Katz Got Your Tongue' },
            {
                url: 'http://www.sproutcore.com/block',
                title: 'SproutCore Blog',
            },
        ],
    })
);
