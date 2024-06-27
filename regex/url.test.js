assertTest(__filename,
    "http://www.a.example.com");

assertTest(__filename,
    "http://localhost");

assertTest(__filename,
    "https://www.a.example.com:8080/foo/bar.html");

assertTest(__filename,
    "https://www.a.example.com:8080/?foo=bar&baz#quux");

assertTest(__filename,
    "https://www.a.example.com:8080/#foo");

assertTest(__filename,
    "www.a.example.com:8080/#foo",
    false);