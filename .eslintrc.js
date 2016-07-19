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
        "define": true,
        "$": true,
        "hljs": true
    }
};