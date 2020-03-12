const Handlebars = require('handlebars');

// lookup array
console.log('\n---- lookup array ----');
console.log(
    Handlebars.compile(`
        {{#each people}}
            {{.}} lives in {{lookup ../cities @index}}
            {{this}} lives in {{lookup ../cities @index}}
        {{/each}}`)({
        people: ['Nils', 'Yehuda'],
        cities: ['Darmstadt', 'San Francisco'],
    })
);

// lookup object
console.log('\n---- lookup object ----');
console.log(
    Handlebars.compile(`
        {{#each people as | p |}}
            {{name}} lives in {{#with (lookup ../cities [resident-in])~}}
                {{name}} ({{country}})
            {{/with}}
        {{/each}}`)({
        people: [
            {
                name: 'Nils',
                'resident-in': 'darmstadt',
            },
            {
                name: 'Yehuda',
                'resident-in': 'san-francisco',
            },
        ],
        cities: {
            darmstadt: {
                name: 'Darmstadt',
                country: 'Germany',
            },
            'san-francisco': {
                name: 'San Francisco',
                country: 'USA',
            },
        },
    })
);
