const Handlebars = require("handlebars");

console.log(
    Handlebars.compile(
        `
        <div>
            <div>raw: {{{specialChars}}}</div>
            <div>html-escaped: {{specialChars}}</div>
        </div>`
    )({
        specialChars: "& < > \" ' ` =",
    })
);
