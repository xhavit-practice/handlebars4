const Handlebars = require("handlebars");

console.log(
    Handlebars.compile("<div>{{foo}}-{{bar}}</div>")({ foo: "1", bar: "2" })
);
