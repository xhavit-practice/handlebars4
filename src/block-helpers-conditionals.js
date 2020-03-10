const Handlebars = require('handlebars');

// Conditionals
console.log('\n---- Conditionals ----');
console.log(
    Handlebars.compile(`
        {{#if isFoo}}
            <img src="foo.gif">
        {{/if}}
        {{#if isBar}}
            <img src="bar.gif">
        {{/if}}`)({
        isFoo: true,
        isBar: false,
    })
);

// implement simple `if` block helper
console.log('\n---- implement simple `if` block helper ----');
Handlebars.registerHelper('customIf1', function(test, options) {
    if (test) {
        return options.fn(this);
    }
});
console.log(
    Handlebars.compile(`
        {{#customIf1 isFoo}}
            <img src="foo.gif">
        {{/customIf1}}
        {{#customIf1 isBar}}
            <img src="bar.gif">
        {{/customIf1}}`)({
        isFoo: true,
        isBar: false,
    })
);

// implement simple `if-else` block helper
console.log('\n---- implement simple `if-else` block helper ----');
Handlebars.registerHelper('customIf2', function(test, options) {
    return test ? options.fn(this) : options.inverse(this);
});
console.log(
    Handlebars.compile(`
        {{#customIf2 isFoo}}
            <img src="foo.gif">
        {{else customIf2 isBar}}
            <img src="bar.gif">
        {{else}}
            <img src="biz.gif">
        {{/customIf2}}`)({
        isFoo: false,
        isBar: false,
    })
);
