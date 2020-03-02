const Handlebars = require('handlebars');

// Basic Partials
console.log('\n---- Basic Partials ----');
Handlebars.registerPartial('myPartial', '{{name}}');
console.log(
    Handlebars.compile(`
        {{> myPartial }}`)({ name: 'Steven Jobs' })
);

// Dynamic Partials
console.log('\n---- Dynamic Partials ----');
console.log(
    Handlebars.compile(`
        {{> (getMyPartialName) }}
        {{> (lookup . 'myPartialName') }}`)({
        name: 'Steven Jobs',
        myPartialName: 'myPartial',
        getMyPartialName: function() {
            return 'myPartial';
        },
    })
);

// Partial Contexts
console.log('\n---- Partial Contexts ----');
