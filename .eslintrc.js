module.exports = {
  "extends": "airbnb",

  "rules": {
    "jsx-a11y/label-has-for": [ 2, {
        "components": [ "Label" ],
        "required": {
            "some": [ "nesting", "id" ]
        },
        "allowChildren": false,
    }]
  }
};

