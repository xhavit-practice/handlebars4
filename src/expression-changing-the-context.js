const Handlebars = require("handlebars");

// with
console.log(
    Handlebars.compile(
        "{{#with foo}}<div>{{../foo.bar}}-{{...foo.bar}}-{{bar}}</div>{{/with}}"
    )({
        foo: { bar: "biz" },
    })
);

// each
// each - object - changing the context
console.log(
    Handlebars.compile(
        "{{#each foo}}<div>{{../bar}}-{{...bar}}-{{@key}}-{{this}}</div>{{/each}}"
    )({
        foo: {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        },
        bar: "bar",
    })
);
// each - array - changing the context
console.log(
    Handlebars.compile(
        "{{#each foo}}<div>{{../bar}}-{{...bar}}-{{@index}}-{{a}}-{{this.a}}</div>{{/each}}"
    )({
        foo: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
        bar: "bar",
    })
);
