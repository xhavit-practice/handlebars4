const Handlebars = require('handlebars');

// basic
console.log('\n---- basic ----');
Handlebars.registerHelper('upper', function(str) {
    return str.toUpperCase();
});
console.log(
    Handlebars.compile(`
        <div>{{upper foo}}</div>
    `)({ foo: 'foo' })
);

// Prevent HTML-escaping of helper return values
console.log('\n---- Prevent HTML-escaping of helper return values ----');
Handlebars.registerHelper('bold', function(text) {
    var result = '<b>' + Handlebars.escapeExpression(text) + '</b>';
    return new Handlebars.SafeString(result);
});
Handlebars.registerHelper('badbold', function(text) {
    var result = '<b>' + Handlebars.escapeExpression(text) + '</b>';
    return result;
});
console.log(
    Handlebars.compile(`
        <div>
            right: {{bold foo}}
            wrong: {{badbold foo}}
        </div>`)({
        foo: 'foo',
    })
);

// Helpers with Multiple Parameters
console.log('\n---- Helpers with Multiple Parameters ----');
Handlebars.registerHelper('link', function(text, url) {
    const escapedText = Handlebars.escapeExpression(text);
    const escapedUrl = Handlebars.escapeExpression(url);

    return new Handlebars.SafeString(
        `<a href="${escapedUrl}">${escapedText}</a>`
    );
});
console.log(
    Handlebars.compile(`
        <div>
            {{link text url}}
            {{link 'text with whitespace' url}}
        </div>`)({
        firstname: 'Yehuda',
        lastname: 'Katz',
        url: 'https://yehudakatz.com/',
        text: 'See Website',
    })
);

// Literal arguments
// Supported literals include numbers, strings, true, false, null and undefined
console.log('\n---- Literal arguments ----');
Handlebars.registerHelper('progress', function(status, percent, success) {
    return `
        status type: ${typeof status}
        percent type: ${typeof percent}
        success type: ${typeof success}`;
});
console.log(
    Handlebars.compile(`
        {{progress 'upload' 24 false}}
        {{progress 'finish' 100 true}}
    `)()
);

// Hash arguments
console.log('\n---- Hash arguments ----');
Handlebars.registerHelper('linkHash', function(text, options) {
    const attributes = [];
    Object.keys(options.hash).forEach(key => {
        var escapedKey = Handlebars.escapeExpression(key);
        var escapedValue = Handlebars.escapeExpression(options.hash[key]);
        attributes.push(`${escapedKey}="${escapedValue}"`);
    });
    const escapedText = Handlebars.escapeExpression(text);
    const escapedOutput = `<a ${attributes.join(' ')}>${escapedText}</a>`;
    return new Handlebars.SafeString(escapedOutput);
});
console.log(
    Handlebars.compile(`
        {{linkHash "See Website" href=person.url class="person"}}
    `)({
        person: {
            firstname: 'Yehuda',
            lastname: 'Katz',
            url: 'https://yehudakatz.com/',
        },
    })
);

// Disambiguating helpers calls and property lookup
// helper has priority over the input property
console.log('\n---- Disambiguating helpers calls and property lookup ----');
Handlebars.registerHelper('name', function() {
    return 'foo';
});
console.log(
    Handlebars.compile(`
        <div>{{name}}</div>
        <div>{{./name}}</div>
        <div>{{this.name}}</div>
    `)({ name: 'bar' })
);
