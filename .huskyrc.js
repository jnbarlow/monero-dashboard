module.exports = {
    hooks: {
        'pre-commit': [
            'pretty-quick --staged --pattern "{**/,}*.{js,jsx,css,less,scss,json,graphql,gql,md,yaml,yml,html,webmanifest,babelrc,prettierrc}"',
            'eslint --cache --fix .'
        ].join(' && ')
    }
};
