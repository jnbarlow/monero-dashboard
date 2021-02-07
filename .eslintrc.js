module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		es6: true,
		node:true
	},
	parserOptions: {
		ecmaVersion: 9,
		sourceType: 'script'
	},
	extends: ['eslint:recommended', 'prettier'],
	rules: {
		eqeqeq: ['error', 'smart'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'no-cond-assign': ['error', 'always'],
		'prettier/prettier': 'error',
		'no-restricted-imports': [
			'error'
		]
	},
	plugins: ['prettier']
};
