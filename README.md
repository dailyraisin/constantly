# Constantly

Take flat constants files and turn their properties into a read-only object.

## Usage

Given an `example.json` structure like this:

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
    
    var $C = constantly(require(path.resolve('example.json'))); //pass it real JSON

    var admin = $C.ACCOUNT.TYPE.ADMIN.value; //200
    var user = $C.ACCOUNT.TYPE.USER.value; //100



## JSON Format

You are required to define a `feature`, `category`, and `property` to “namespace” each constant.

### `Comment`
`Comment`s are useful for authors of the source JSON, but are ignored upon converting into an object.

### `Sequence`
`Sequence` is used for ordering properties in UI.

## Example

    node example/demo.js

## TODO

- validate JSON to match the prescribed pattern upon injestion