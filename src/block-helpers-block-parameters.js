const Handlebars = require('handlebars');

// Block Parameters
console.log('\n---- Block Parameters ----');
console.log(
    Handlebars.compile(`
        {{#each users as |user userIndex|}}
            user index: {{userIndex}} 
            user name: {{user.name}}
            
        {{/each}}`)({
        users: [
            { userId: 1, name: 'foo' },
            { userId: 2, name: 'bar' },
        ],
    })
);

// avoid name conflicts
console.log('\n---- avoid name conflicts ----');
console.log(
    Handlebars.compile(`
        {{#each users as |user userIndex|}}
            {{#each ../books as |book bookIndex|}}
                user index: {{userIndex}} 
                user name: {{user.name}}
                book index: {{bookIndex}}
                book name: {{book.name}}

            {{/each}}
        {{/each}}`)({
        users: [
            { userId: 1, name: 'user1' },
            { userId: 2, name: 'user2' },
        ],
        books: [
            { bookId: 'x', name: 'bookx' },
            { bookId: 'y', name: 'booky' },
        ],
    })
);

// custome helper
// custom helper provide block parameters through the `blockParams` options field.
console.log('\n---- custome helper ----');
Handlebars.registerHelper('customEach', function(list, options) {
    return new Handlebars.SafeString(
        list
            .map((ctx, i) => options.fn(ctx, { blockParams: [ctx, i] }))
            .join('')
    );
});
console.log(
    Handlebars.compile(`
        {{#customEach users as |user userIndex|}}
            {{#customEach ../books as |book bookIndex bookIndex2|}}
                user index: {{userIndex}} 
                user name: {{user.name}}
                book index: {{bookIndex}}
                book name: {{book.name}}

            {{/customEach}}
        {{/customEach}}`)({
        users: [
            { userId: 1, name: 'user1' },
            { userId: 2, name: 'user2' },
        ],
        books: [
            { bookId: 'x', name: 'bookx' },
            { bookId: 'y', name: 'booky' },
        ],
    })
);
