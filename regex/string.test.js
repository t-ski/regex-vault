assertMatch(__filename, `
    console.log("I will not \\\"waste\\' chalk.")"
`, "\"I will not \\\"waste\\' chalk.\"");

assertMatch(__filename, `
    console.log('I will not \\\"waste\\' chalk.')'
`, "'I will not \\\"waste\\' chalk.'");

assertTest(__filename, `
    console.log('I will not\n waste chalk.')
`, false);

assertMatch(__filename, `
    console.log(\`I will not\n \\\`waste\\\` chalk.\`)
`, "`I will not\n \\`waste\\` chalk.`");