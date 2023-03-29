module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:typescript-sort-keys/recommended',
    'prettier',
  ],

  globals: {
    JSX: true,
    __PATH_PREFIX__: true,
  },

  overrides: [
    {
      files: ['src/styles/chakra.ts', 'tailwind.config.js'],
      rules: {
        'sort-keys': 'off',
        'sort-keys-fix/sort-keys-fix': 'off',
      },
    },
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
  },

  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'import',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'unused-imports',
  ],

  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error', 'shop'],
        hoist: 'all',
      },
    ],
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'comma-dangle': 'off',
    curly: ['error'],
    'global-require': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        alphabetize: {
          ignoreCase: true,
          order: 'asc',
        },
        groups: ['module', '/^@shared/', ['parent', 'sibling', 'index']],
      },
    ],
    'import/extensions': ['never' | 'always' | 'ignorePackages'],
    'import/prefer-default-export': 'off',
    // indent: [
    //   'warn',
    //   2,
    //   {
    //     SwitchCase: 1,
    //     offsetTernaryExpressions: true,
    //   },
    // ],
    // 'key-spacing': [
    //   'error',
    //   { afterColon: true, beforeColon: false, mode: 'strict' },
    // ],
    // 'max-nested-callbacks': 'off',
    'no-console': [1],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'no-new': 'off',
    'no-param-reassign': [
      'warn',
      {
        ignorePropertyModificationsFor: ['ctx', 'state', 'acc'],
        props: true,
      },
    ],
    'no-template-curly-in-string': 'off',
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern:
          'res|next|^err|rejectedFiles|body|options|request|reply|error|_context|_',
      },
    ],
    'object-curly-spacing': ['error', 'always'],
    'padded-blocks': ['warn', 'never'],
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'react/destructuring-assignment': [
      'warn',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'react/jsx-curly-spacing': ['off'],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 10,
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        exceptions: ['Component', 'StyledComponent'],
        html: 'ignore',
      },
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
        shorthandLast: false,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'sort-destructure-keys/sort-destructure-keys': [
      'error',
      { caseSensitive: false },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    // 'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
