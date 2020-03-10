const Handlebars = require('handlebars');

// Basic Block Variation
console.log('\n---- Basic Block Variation ----');
Handlebars.registerHelper('bold', function(options) {
    return new Handlebars.SafeString(`<b>${options.fn(this)}</b>`);
});
console.log(
    Handlebars.compile(`
        <div class="entry">
            <h1>{{title}}</h1>
            <div class="body">
                {{#bold}}{{body}}{{/bold}}
            </div>
        </div>`)({ title: 'test title', body: 'test body' })
);
