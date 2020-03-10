const Handlebars = require('handlebars');

// Raw Blocks
console.log('\n---- Raw Blocks ----');
Handlebars.registerHelper('raw-helper', function(context, options) {
    console.log(context);
    console.log(options);
    return options.fn(context);
});
console.log(
    Handlebars.compile(`
        {{#raw-helper this}}
            {{bar}}
        {{/raw-helper}}
        {{{{raw-helper this}}}}
            {{bar}}
        {{{{/raw-helper}}}}`)({ bar: 'bar' })
);
