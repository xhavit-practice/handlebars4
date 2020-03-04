const Handlebars = require('handlebars');

// Partial Contexts
console.log('\n---- Partial Contexts ----');
Handlebars.registerPartial('myPartialContexts1', '{{name}} - {{person.name}}');
Handlebars.registerPartial('myPartialContexts2', '{{this}}');
Handlebars.registerPartial('myPartialContexts3', '{{name}}');
console.log(
    Handlebars.compile(`
        {{> myPartialContexts1 }}
        {{> myPartialContexts1 this }}
        {{> myPartialContexts2 name }}
        {{> myPartialContexts3 person }}`)({
        name: 'Steven Jobs',
        person: {
            name: 'Micheal Jackson',
        },
    })
);
