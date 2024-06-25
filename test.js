#!/usr/bin/env node


const FILE_EXTENSION = ".rx";


function toRegex(filepath) {
    const regexStr = require("fs").readFileSync(
        require("path").join(filepath.replace(/\.test\.js$/, FILE_EXTENSION))
    ).toString();
    return (new RegExp(regexStr.replace(/^\/|\/[a-z]*$/gi, ""), regexStr.match(/[a-z]*$/)[0]));
}


global.assertTest = (filepath, target, succeed = true) => test(toRegex(filepath).test(target), succeed);
global.assertMatch = (filepath, target, match) => test(target.match(toRegex(filepath))[0], match);


process.argv.push("./regex/");
require("./min-test");