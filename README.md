# Constantly

Take flat constants files and turn their properties into a read-only object.

## Usage

Given an `example.json` structure like this which defines two `ACCOUNT.TYPE`s, `USER` and `ADMIN`:

    [{
        "feature": "ACCOUNT",
        "category": "TYPE",
        "property": "USER",
        "comment": "A regular user that can login and do normal things",
        "value": 100,
        "sequence": 0
    },
    {
        "feature": "ACCOUNT",
        "category": "TYPE",
        "property": "ADMIN",
        "comment": "User which is an administrator",
        "value": 200,
        "sequence": 0
    }]

We can get the value of those constants like so:

    var constantly = require('constantly');
    var path = require('path');
    var $C = constantly(path.resolve('example.json')); //pass it JSON, in this case, a path to a JSON file

    var admin = $C.ACCOUNT.TYPE.ADMIN.value; //200


## JSON Setup

You are required to define a feature, category, and property to “namespace” each constant.

### Comments
Comments are useful for authors of the source JSON but are ignored otherwise.

### Sequence
Sequence is used for ordering properties in UI.
