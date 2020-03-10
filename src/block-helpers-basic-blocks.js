const Handlebars = require('handlebars');

// Basic Blocks
console.log('\n---- Basic Blocks ----');
Handlebars.registerHelper('noop', function(options) {
    return options.fn(this);
});
console.log(
    Handlebars.compile(`
        <div class="entry">
            <h1>{{title}}</h1>
            <div class="body">
                {{#noop}}{{body}}{{/noop}}
                {{./noop}}
            </div>
        </div>`)({ title: 'test title', body: 'test body', noop: 'noop field' })
);

// Any helpers defined in this manner will take precedence over fields defined in the context.
// To access a field that is masked by a helper, a path reference may be used.
console.log(
    Handlebars.compile(`
        {{#noop}}{{body}}{{/noop}}
        {{./noop}}`)({ body: 'test body', noop: 'noop field' })
);
