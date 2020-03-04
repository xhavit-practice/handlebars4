const Handlebars = require('handlebars');

// Partial Blocks
console.log('\n---- Partial Blocks ----');
Handlebars.registerPartial(
    'partialExist',
    'registered - {{name}} - {{person.name}}'
);
console.log(
    Handlebars.compile(`
        {{#> partialExist }}
            not registered - {{name}} - {{person.name}}
        {{/ partialExist }}
        {{#> partialNotExist }}
            not registered - {{name}} - {{person.name}}
        {{/ partialNotExist }}`)({
        name: 'Steven Jobs',
        person: {
            name: 'Micheal Jackson',
        },
    })
);

// partial block in partial
Handlebars.registerPartial(
    'partial-block',
    '{{#> layout }}My Content - {{name}}{{/layout}}'
);
console.log(
    Handlebars.compile(`
        Site Content
        {{> partial-block }}`)({
        name: 'Steven Jobs',
        person: {
            name: 'Micheal Jackson',
        },
    })
);

// partial block in partial
Handlebars.registerPartial(
    'partial-block',
    '{{#> layout }}My Content - {{name}}{{/layout}}'
);
console.log(
    Handlebars.compile(`
        Site Content
        {{> partial-block }}`)({
        name: 'Steven Jobs',
        person: {
            name: 'Micheal Jackson',
        },
    })
);

// the block will execute under the context of the partial at the time of the call
console.log(
    Handlebars.compile(`
        {{#each list as |item|}}
            {{#> childEntry}}
                {{../name}} - {{item.id}}
            {{/childEntry}}
        {{/each}}`)({
        name: 'Steven Jobs',
        list: [{ id: 1 }, { id: 2 }],
    })
);
