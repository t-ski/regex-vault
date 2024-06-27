assertTest(__filename,
    "2004.05.8");

assertTest(__filename,
    "2004-05-8");

assertTest(__filename,
    "2004.05-8",
    false);

assertMatch(__filename,
    "200004-05-8",
    "0004-05-8");