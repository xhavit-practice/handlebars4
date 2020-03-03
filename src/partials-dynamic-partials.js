const Handlebars = require('handlebars');

// Dynamic Partials
console.log('\n---- Dynamic Partials ----');
console.log(
    Handlebars.compile(`
        {{> (getMyPartialName) }}
        {{> (lookup . 'myPartialName') }}`)({
        name: 'Steven Jobs',
        myPartialName: 'myPartial',
        getMyPartialName: function() {
            return 'myPartial';
        },
    })
);
