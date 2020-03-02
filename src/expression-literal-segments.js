const Handlebars = require('handlebars');

// array index
console.log(
    Handlebars.compile('<div>{{list.[1].a}}</div>')({
        list: [{ a: 1 }, { a: 2 }],
    })
);

// object key
console.log(
    Handlebars.compile('<div>{{foo.[b-a-r]}}</div>')({
        foo: {
            'b-a-r': 'b-a-r',
        },
    })
);

// true, false, null and undefined
console.log(
    Handlebars.compile(
        `
        <ul>
            <li> {{[true]}} </li>
            <li> {{[false].foo}} </li>
            <li> {{[null]}} </li>
            <li> {{[undefined]}} </li>
            <li> {{foo.[false]}} </li>
        </ul>`
    )({
        true: 'true',
        false: {
            foo: 'false.foo',
        },
        null: 'null',
        undefined: 'undefined',
        foo: {
            false: 'foo.false',
        },
    })
);

// especial identifiers
// use 'triple-stash' to avoid html-escaping
console.log(
    Handlebars.compile(
        `
        <ul>
            <li> {{{[ ]}}} </li>
            <li> {{{[!]}}} </li>
            <li> {{{["]}}} </li>
            <li> {{{[#]}}} </li>
            <li> {{{[%]}}} </li>
            <li> {{{[&]}}} </li>
            <li> {{{[']}}} </li>
            <li> {{{[(]}}} </li>
            <li> {{{[)]}}} </li>
            <li> {{{[*]}}} </li>
            <li> {{{[+]}}} </li>
            <li> {{{[,]}}} </li>
            <li> {{{[.]}}} </li>
            <li> {{{[/]}}} </li>
            <li> {{{[;]}}} </li>
            <li> {{{[<]}}} </li>
            <li> {{{[=]}}} </li>
            <li> {{{[>]}}} </li>
            <li> {{{[@]}}} </li>
            <li> {{{[[]}}} </li>
            <li> {{{[\\]]}}} </li>
            <li> {{{[^]}}} </li>
            <li> {{{[\`]}}} </li>
            <li> {{{[{]}}} </li>
            <li> {{{[|]}}} </li>
            <li> {{{[}]}}} </li>
            <li> {{{[~]}}} </li>
        </ul>`
    )({
        ' ': 'whitespace',
        '!': '!',
        '"': '"',
        '#': '#',
        '%': '%',
        '&': '&',
        "'": "'",
        '(': '(',
        ')': ')',
        '*': '*',
        '+': '+',
        ',': ',',
        '.': '.',
        '/': '/',
        ';': ';',
        '<': '<',
        '=': '=',
        '>': '>',
        '@': '@',
        '[': '[',
        ']': ']',
        '^': '^',
        '`': '`',
        '{': '{',
        '|': '|',
        '}': '}',
        '~': '~',
    })
);
