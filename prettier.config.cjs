/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig}*/
/** @typedef {import("prettier").Config} PrettierConfig*/
/** @typedef {{ tailwindConfig: string }} TailwindConfig*/
const config = {
    arrowParens: 'always',
    printWidth: 80,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: 'all',
    tabWidth: 2,
    plugins: [
      '@ianvs/prettier-plugin-sort-imports',
      'prettier-plugin-tailwindcss',
    ],
    importOrder: [
      '^(react/(.)$)|^(react$)',
      '<THIRD_PARTY_MODULES>',
      '',
      '<TYPES>',
      '',
      '^@/public(.*)$',
      '',
      '^@/src(.*)$',
      '',
      '^@/components(.*)$',
      '',
      '^@/api(.*)$',
      '',
      '^@/lib(.*)$',
      '',
      '^~/(.*)$',
      '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderBuiltinModulesToTop: true,
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderMergeDuplicateImports: true,
    importOrderCombineTypeAndValueImports: true,
  };
  
  module.exports = config;