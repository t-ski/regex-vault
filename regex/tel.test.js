assertTest(__filename,
    "+49 123 456 789 0");

assertTest(__filename,
    "0123456 789");

assertTest(__filename,
    "+1234 567-890");

assertTest(__filename,
    "+1234 567-890-FOO");
            
assertMatch(__filename,
    "0234 567-890-FOO-987",
    "0234 567-890-FOO");