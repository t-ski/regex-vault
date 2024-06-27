assertTest(__filename,
    "foo@a.example.com");

assertTest(__filename,
    "foo.bar@a.example.com");

assertTest(__filename,
    "foo.bar@example",
    false);