const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
    './dist/web-components-test/main-es5.js',
    './dist/web-components-test/polyfills-es5.js',
    './dist/web-components-test/runtime-es5.js',
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/first-element.js');

})()
