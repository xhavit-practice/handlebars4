const Handlebars = require('handlebars');

// HTML-escaping
console.log('\n---- HTML-escaping ----');
console.log(
    Handlebars.compile(`
        <div>
            <div>raw: {{{specialChars}}}</div>
            <div>html-escaped: {{specialChars}}</div>
        </div>`)({
        specialChars: '& < > " \' ` =',
    })
);
