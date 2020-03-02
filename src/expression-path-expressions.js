const Handlebars = require("handlebars");

// normal syntax
console.log(
    Handlebars.compile("<div>{{foo.bar}}</div>")({ foo: { bar: "1" } })
);

// deprecated syntax
console.log(
    Handlebars.compile("<div>{{foo/bar}}</div>")({ foo: { bar: "2" } })
);
