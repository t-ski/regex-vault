assertTest(__filename,
    "TODO: <BUTTON type='button' disable>Submit</BUTTON>");

assertMatch(__filename,
    "<button type='button' disable>Submit</button> forms.",
    "</button>");