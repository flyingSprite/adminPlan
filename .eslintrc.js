module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "no-console": 0,
        "indent": [ "error", 2 ],
        "quotes": [ "error", "single" ],
        // "linebreak-style": ["error", "unix"],
        "semi": [ "error", "always" ]
    },
    "globals": {
        "$": true,
        "angular": true,
        "define": true,
        "hljs": true,
        "Highcharts": true,
        "PNotify": true
    }
};