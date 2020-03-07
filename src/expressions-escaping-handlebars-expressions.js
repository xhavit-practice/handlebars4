const Handlebars = require('handlebars');

// Escaping Handlebars expressions
console.log('\n---- Escaping Handlebars expressions ----');
// The raw-helper is not built in. After you register the template is should work.
// https://stackoverflow.com/questions/33704495/how-to-use-raw-helper-in-a-handlebars-template
Handlebars.registerHelper('raw', function(options) {
    return options.fn(this);
});
console.log(
    Handlebars.compile(`
        \\{{escaped}}
        {{{{raw}}}}
        {{escaped}}
        {{{{/raw}}}}
    `)()
);
