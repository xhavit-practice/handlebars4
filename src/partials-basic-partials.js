const Handlebars = require('handlebars');

// Basic Partials
console.log('\n---- Basic Partials ----');
Handlebars.registerPartial('myPartial', '{{name}}');
console.log(
    Handlebars.compile(`
        {{> myPartial }}`)({ name: 'Steven Jobs' })
);
