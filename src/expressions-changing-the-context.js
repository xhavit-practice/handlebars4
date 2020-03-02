const Handlebars = require('handlebars');

// with
console.log('\n---- with ----');
console.log(
    Handlebars.compile(`
        {{#with foo}}
            <div>{{../foo.bar}}</div>
            <div>{{...foo.bar}}</div>
            <div>{{bar}}</div>
        {{/with}}`)({
        foo: { bar: 'biz' },
    })
);

// each - object - changing the context
console.log('\n---- each - object - changing the context ----');
console.log(
    Handlebars.compile(`
        {{#each foo}}
        
            <div>{{../bar}}</div>
            <div>{{...bar}}</div>
            <div>{{@key}}</div>
            <div>{{this}}</div>
        {{/each}}`)({
        foo: {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        },
        bar: 'bar',
    })
);
// each - array - changing the context
console.log('\n---- each - array - changing the context ----');
console.log(
    Handlebars.compile(`
        {{#each foo}}

            <div>{{../bar}}</div>
            <div>{{...bar}}</div>
            <div>{{@index}}</div>
            <div>{{a}}</div>
            <div>{{this.a}}</div>
        {{/each}}`)({
        foo: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
        bar: 'bar',
    })
);
