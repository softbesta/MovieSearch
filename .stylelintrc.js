
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-scss',
    'stylelint-prettier',
  ],
  ignoreFiles: ['**/*.js', '**/*.jsx'],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'no-empty-source': null,
    'shorthand-property-no-redundant-values': null,
    'string-quotes': 'single',
    'scss/comment-no-empty': null,
    'scss/double-slash-comment-empty-line-before': null,
    'prettier/prettier': [true, { severity: 'warning' }],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
          'tailwind',
          'apply',
          'responsive',
          'variants',
          'screen',
        ],
      },
    ],
  },
};
