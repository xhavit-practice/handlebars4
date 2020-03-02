const Handlebars = require('handlebars');

// Basic Uasge
console.log('\n---- Basic Uasge ----');
console.log(
    Handlebars.compile(`
        <div>{{foo}}</div>
        <div>{{bar}}</div>`)({ foo: '1', bar: '2' })
);
