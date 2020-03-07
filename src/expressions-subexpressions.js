const Handlebars = require('handlebars');

// Subexpressions
console.log('\n---- Subexpressions ----');
Handlebars.registerHelper('inner-helper', function(...args) {
    return 'inner-' + args.slice(0, -1).join('-');
});
Handlebars.registerHelper('outer-helper', function(...args) {
    return 'outer-' + args.slice(0, -1).join('-');
});
console.log(
    Handlebars.compile(`
        <div>{{outer-helper (inner-helper bar) foo}}</div>
    `)({
        foo: 'foo',
        bar: 'bar',
    })
);
