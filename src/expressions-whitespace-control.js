const Handlebars = require('handlebars');

// Whitespace Controls
console.log('\n---- Whitespace Controls ----');
console.log(
    Handlebars.compile(`
        <div>{{foo}}</div>
        <div>{{~foo}}</div>
    `)({
        test: true,
        foo: 'foo',
    })
);

console.log(
    Handlebars.compile(`
    {{#each nav ~}}
    <a href="{{url}}">
        {{~#if test~}}
        {{title}}
        {{~^~}}
        Empty
        {{~/if~}}
    </a>
    {{~/each}}
    `)({
        nav: [{ url: 'foo', test: true, title: 'bar' }, { url: 'bar' }],
    })
);
