const Handlebars = require('handlebars');

// Inline Partials
// 这个类似于vue的slot
console.log('\n---- Inline Partials ----');
Handlebars.registerPartial(
    'layout',
    `
    <div class="nav">
        {{> nav}}
    </div>
    <div class="content">
        {{> content}}
    </div>
    <div class="footer">
        {{name}} - {{person.name}}
    </div>`
);
console.log(
    Handlebars.compile(`
        {{#> layout}}
            {{#*inline "nav"}}
                <div>My Nav - {{name}} - {{person.name}}</div>
            {{/inline}}
            {{#*inline "content"}}
                <div>My Content</div>
            {{/inline}}
            {{name}} - {{person.name}}
        {{/ layout}}`)({
        name: 'Steven Jobs',
        person: {
            name: 'Micheal Jackson',
        },
    })
);
