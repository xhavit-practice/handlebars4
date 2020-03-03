const Handlebars = require('handlebars');

// Partial Parameters
console.log('\n---- Partial Parameters ----');
Handlebars.registerPartial(
    'myPartialParameters1',
    '{{newName1}} - {{newName2}} - {{anotherName}}'
);
console.log(
    Handlebars.compile(`
        {{> myPartialParameters1 newName1=name newName2=person.name anotherName="Bill Gates" }}`)(
        {
            name: 'Steven Jobs',
            person: {
                name: 'Micheal Jackson',
            },
        }
    )
);
// This is particularly useful for exposing data from parent contexts to the partial:
Handlebars.registerPartial(
    'myPartialParameters2',
    '{{id}} - {{name}} - {{parentData.name}}'
);
console.log(
    Handlebars.compile(`
        {{#each list}}
            {{> myPartialParameters2 name=../name parentData=.. }}
        {{/each}}`)({
        name: 'Steven Jobs',
        list: [{ id: 1 }, { id: 2 }],
    })
);
