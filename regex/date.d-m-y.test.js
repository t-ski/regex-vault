assertTest(__filename,
    "8.05.2004");

assertTest(__filename,
    "8-05-2004");

assertTest(__filename,
    "8.05-2004",
    false);

assertMatch(__filename,
    "8.05.200004",
    "8.05.2000");