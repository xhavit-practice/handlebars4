const Handlebars = require('handlebars');

// Hash Arguments
console.log('\n---- Hash Arguments ----');
Handlebars.registerHelper('b', function(options) {
    const { hash, fn } = options;
    const attr = Object.keys(hash)
        .map(k => `${k}="${hash[k]}"`)
        .join(' ');

    return `<b ${attr}>${fn(this)}</b>`;
});
console.log(
    Handlebars.compile(`
        {{#b id="nav-bar" class="top"}}
            content
        {{/b}}`)()
);
