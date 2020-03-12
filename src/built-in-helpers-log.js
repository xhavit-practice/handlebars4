const Handlebars = require('handlebars');

// log
// for browser client console.log
console.log('\n---- log ----');
console.log(
    Handlebars.compile(`
        {{log 'this is a simple log output'}}
        {{log "debug logging" level="debug"}}
        {{log "info logging" level="info"}}
        {{log "info logging is the default"}}
        {{log "logging a warning" level="warn"}}
        {{log "logging an error" level="error"}}
    `)()
);
