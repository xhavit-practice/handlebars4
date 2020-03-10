const Handlebars = require('handlebars');

// Private Variables
console.log('\n---- Private Variables ----');
Handlebars.registerHelper('list', function(context, options) {
    const { data, fn } = options;
    const newData = data ? Handlebars.createFrame(data) : {};

    // private vaiable `length`
    newData.length = context.length;

    return context
        .map((v, i) => {
            // private vaiable `index`
            newData.index = i;
            // private vaiable `first`
            newData.first = i === 0;
            return fn(v, { data: newData });
        })
        .join('');
});
console.log(
    Handlebars.compile(`
        <ul>
            {{#list links1}}
                {{@index}} - {{@length}} - {{@first}}
                <li><a href="{{url}}">{{title}}</a></li>
            {{/list}}
        </ul>`)({
        links1: [
            { url: 'http://www.yehudakatz.com', title: 'Katz Got Your Tongue' },
            {
                url: 'http://www.sproutcore.com/block',
                title: 'SproutCore Blog',
            },
        ],
    })
);

// access parent private variables
console.log('\n---- access parent private variables ----');
console.log(
    Handlebars.compile(`
        <ul>
            {{#list links1}}
            
                {{@index}} - {{@length}} - {{@first}}
                <li><a href="{{url}}">{{title}}</a></li>

                {{#list ../links2}}
                    {{@index}} - {{@length}} - {{@first}}
                    {{@../index}} - {{@../length}} - {{@../first}}
                    <li><a href="{{url}}">{{title}}</a></li>
                {{/list}}

            {{/list}}
        </ul>`)({
        links1: [
            { url: 'http://www.yehudakatz.com', title: 'Katz Got Your Tongue' },
            {
                url: 'http://www.sproutcore.com/block',
                title: 'SproutCore Blog',
            },
        ],
        links2: [
            { url: 'http://www.yehudakatz.com', title: 'Katz Got Your Tongue' },
            {
                url: 'http://www.sproutcore.com/block',
                title: 'SproutCore Blog',
            },
            { url: 'http://www.yehudakatz.com', title: 'Katz Got Your Tongue' },
            {
                url: 'http://www.sproutcore.com/block',
                title: 'SproutCore Blog',
            },
        ],
    })
);
