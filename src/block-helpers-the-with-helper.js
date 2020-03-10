const Handlebars = require('handlebars');

// The with helper
console.log('\n---- The with helper ----');
console.log(
    Handlebars.compile(`
        <div class="entry">
            <h1>{{title}}</h1>
            {{#with story}}
                <div class="intro">{{{intro}}}</div>
                <div class="body">{{{body}}}</div>
            {{/with}}
        </div>`)({
        title: 'First Post',
        story: {
            intro: 'Before the jump',
            body: 'After the jump',
        },
    })
);

// implement `with` block helper
Handlebars.registerHelper('customWith', function(context, options) {
    return options.fn(context);
});
console.log(
    Handlebars.compile(`
        <div class="entry">
            <h1>{{title}}</h1>
            {{#customWith story}}
                <div class="intro">{{{intro}}}</div>
                <div class="body">{{{body}}}</div>
            {{/customWith}}
        </div>`)({
        title: 'First Post',
        story: {
            intro: 'Before the jump',
            body: 'After the jump',
        },
    })
);
