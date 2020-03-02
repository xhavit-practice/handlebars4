const Handlebars = require("handlebars");

// if
console.log(
    Handlebars.compile(
        "{{#if author}}<h1>{{firstName}} {{lastName}}</h1>{{/if}}"
    )({
        author: true,
        firstName: "Yehuda",
        lastName: "Katz",
    })
);

// with
console.log(
    Handlebars.compile("{{#with foo}}{{bar}}{{/with}}")({
        foo: { bar: "biz" },
    })
);
// with - changeing the context
console.log(
    Handlebars.compile("{{#with foo}}{{../foo.bar}}-{{...foo.bar}}{{/with}}")({
        foo: { bar: "biz" },
    })
);

// each
// array
console.log(
    Handlebars.compile("{{#each foo}}<div>{{@index}}-{{this}}</div>{{/each}}")({
        foo: [1, 2, 3, 4],
    })
);
console.log(
    Handlebars.compile(
        "{{#each foo}}<div>{{@index}}-{{this.a}}-{{a}}</div>{{/each}}"
    )({
        foo: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
    })
);
// object
console.log(
    Handlebars.compile("{{#each foo}}<div>{{@key}}-{{this}}</div>{{/each}}")({
        foo: {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        },
    })
);
// each - changing the context
console.log(
    Handlebars.compile(
        "{{#each foo}}<div>{{../bar}}-{{...bar}}-{{a}}</div>{{/each}}"
    )({
        foo: [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }],
        bar: "bar",
    })
);

// custom helpers
// basic
Handlebars.registerHelper("upper", function(str) {
    return str.toUpperCase();
});
console.log(
    Handlebars.compile("<div>{{upper foo.bar}}</div>")({ foo: { bar: "biz" } })
);
// this context
Handlebars.registerHelper("print_biz", function() {
    return this.foo.bar;
});
console.log(
    Handlebars.compile("<div>{{print_biz}}</div>")({ foo: { bar: "biz" } })
);

// block helpers
Handlebars.registerHelper("list", function(items, options) {
    const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
    return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
});
console.log(
    Handlebars.compile("{{#list people}}{{firstname}} {{lastname}}{{/list}}")({
        people: [
            {
                firstname: "Yehuda",
                lastname: "Katz",
            },
            {
                firstname: "Carl",
                lastname: "Lerche",
            },
            {
                firstname: "Alan",
                lastname: "Johnson",
            },
        ],
    })
);

// partials
//  basic partials
Handlebars.registerPartial("header", "<div>header</div>");
console.log(
    Handlebars.compile("{{>header}}<div>body</div>")({
        foo: { bar: "biz" },
    })
);
