/*
 * @Description:
 * @Version: 2.0
 * @Author: Sheep
 * @Date: 2020-12-11 14:17:25
 * @LastEditors: Sheep
 * @LastEditTime: 2020-12-11 15:34:20
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'@typescript-eslint/no-explicit-any': ['off'],
	},
}
