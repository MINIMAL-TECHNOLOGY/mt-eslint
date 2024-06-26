import { TSESLint } from "@typescript-eslint/utils";
declare const configs: ({
    files: string[];
    rules: {
        "@typescript-eslint/no-invalid-void-type": "off";
        "@typescript-eslint/prefer-nullish-coalescing": "off";
        "@typescript-eslint/no-confusing-void-expression": "off";
        "prefer-promise-reject-errors": "off";
        "@typescript-eslint/no-extraneous-class": "off";
        "@typescript-eslint/strict-boolean-expressions": "off";
        "@typescript-eslint/explicit-function-return-type": "off";
        "@typescript-eslint/naming-convention": ["error", {
            selector: string;
            format: string[];
            prefix: string[];
        }, {
            selector: string;
            format: string[];
            prefix: string[];
        }];
        "no-restricted-imports": ["error", {
            paths: {
                name: string;
                message: string;
            }[];
        }];
        '@typescript-eslint/adjacent-overload-signatures': ["error"];
        '@typescript-eslint/array-type': ["error", {
            default: string;
        }];
        '@typescript-eslint/await-thenable': ["error"];
        '@typescript-eslint/ban-ts-comment': ["error", {
            "ts-expect-error": string;
            "ts-ignore": boolean;
            "ts-nocheck": boolean;
            "ts-check": boolean;
            minimumDescriptionLength: number;
        }];
        '@typescript-eslint/ban-tslint-comment': ["error"];
        '@typescript-eslint/ban-types': ["error", {
            extendDefaults: boolean;
            types: {
                String: {
                    message: string;
                    fixWith: string;
                };
                Boolean: {
                    message: string;
                    fixWith: string;
                };
                Number: {
                    message: string;
                    fixWith: string;
                };
                Symbol: {
                    message: string;
                    fixWith: string;
                };
                BigInt: {
                    message: string;
                    fixWith: string;
                };
                Function: {
                    message: string;
                };
                Object: {
                    message: string;
                };
                "{}": {
                    message: string;
                };
            };
        }];
        '@typescript-eslint/block-spacing': ["error", string];
        '@typescript-eslint/brace-style': ["error", string, {
            allowSingleLine: boolean;
        }];
        '@typescript-eslint/class-literal-property-style': ["error", string];
        '@typescript-eslint/comma-dangle': ["error", {
            arrays: string;
            objects: string;
            imports: string;
            exports: string;
            functions: string;
            enums: string;
            generics: string;
            tuples: string;
        }];
        '@typescript-eslint/comma-spacing': ["error", {
            before: boolean;
            after: boolean;
        }];
        '@typescript-eslint/consistent-generic-constructors': ["error", string];
        '@typescript-eslint/consistent-indexed-object-style': ["error", string];
        '@typescript-eslint/consistent-type-assertions': ["error", {
            assertionStyle: string;
            objectLiteralTypeAssertions: string;
        }];
        '@typescript-eslint/consistent-type-definitions': ["error", string];
        '@typescript-eslint/consistent-type-exports': ["error", {
            fixMixedExportsWithInlineTypeSpecifier: boolean;
        }];
        '@typescript-eslint/consistent-type-imports': ["error", {
            prefer: string;
            disallowTypeAnnotations: boolean;
            fixStyle: string;
        }];
        '@typescript-eslint/dot-notation': ["error", {
            allowIndexSignaturePropertyAccess: boolean;
            allowKeywords: boolean;
            allowPattern: string;
            allowPrivateClassPropertyAccess: boolean;
            allowProtectedClassPropertyAccess: boolean;
        }];
        '@typescript-eslint/func-call-spacing': ["error", string];
        '@typescript-eslint/indent': ["error", number, {
            SwitchCase: number;
            VariableDeclarator: number;
            outerIIFEBody: number;
            MemberExpression: number;
            FunctionDeclaration: {
                parameters: number;
                body: number;
            };
            FunctionExpression: {
                parameters: number;
                body: number;
            };
            CallExpression: {
                arguments: number;
            };
            ArrayExpression: number;
            ObjectExpression: number;
            ImportDeclaration: number;
            flatTernaryExpressions: boolean;
            ignoreComments: boolean;
            ignoredNodes: string[];
            offsetTernaryExpressions: boolean;
        }];
        '@typescript-eslint/key-spacing': ["error", {
            beforeColon: boolean;
            afterColon: boolean;
        }];
        '@typescript-eslint/keyword-spacing': ["error", {
            before: boolean;
            after: boolean;
        }];
        '@typescript-eslint/lines-between-class-members': ["error", string, {
            exceptAfterOverload: boolean;
            exceptAfterSingleLine: boolean;
        }];
        '@typescript-eslint/member-delimiter-style': ["error", {
            multiline: {
                delimiter: string;
            };
            singleline: {
                delimiter: string;
                requireLast: boolean;
            };
        }];
        '@typescript-eslint/method-signature-style': ["error"];
        '@typescript-eslint/no-array-constructor': ["error"];
        '@typescript-eslint/no-base-to-string': ["error"];
        '@typescript-eslint/no-dupe-class-members': ["error"];
        '@typescript-eslint/no-dynamic-delete': ["error"];
        '@typescript-eslint/no-empty-interface': ["error", {
            allowSingleExtends: boolean;
        }];
        '@typescript-eslint/no-extra-non-null-assertion': ["error"];
        '@typescript-eslint/no-extra-parens': ["error", string];
        '@typescript-eslint/no-floating-promises': ["error"];
        '@typescript-eslint/no-for-in-array': ["error"];
        '@typescript-eslint/no-implied-eval': ["error"];
        '@typescript-eslint/no-loss-of-precision': ["error"];
        '@typescript-eslint/no-misused-new': ["error"];
        '@typescript-eslint/no-misused-promises': ["error"];
        '@typescript-eslint/no-namespace': ["error"];
        '@typescript-eslint/no-non-null-asserted-optional-chain': ["error"];
        '@typescript-eslint/no-non-null-assertion': ["error"];
        '@typescript-eslint/no-redeclare': ["error", {
            builtinGlobals: boolean;
        }];
        '@typescript-eslint/no-this-alias': ["error", {
            allowDestructuring: boolean;
        }];
        '@typescript-eslint/no-throw-literal': ["error"];
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ["error"];
        '@typescript-eslint/no-unnecessary-type-assertion': ["error"];
        '@typescript-eslint/no-unnecessary-type-constraint': ["error"];
        '@typescript-eslint/no-unsafe-argument': ["error"];
        '@typescript-eslint/no-unused-expressions': ["error", {
            allowShortCircuit: boolean;
            allowTernary: boolean;
            allowTaggedTemplates: boolean;
            enforceForJSX: boolean;
        }];
        '@typescript-eslint/no-unused-vars': ["error", {
            args: string;
            caughtErrors: string;
            ignoreRestSiblings: boolean;
            vars: string;
        }];
        '@typescript-eslint/no-use-before-define': ["error", {
            functions: boolean;
            classes: boolean;
            enums: boolean;
            variables: boolean;
            typedefs: boolean;
        }];
        '@typescript-eslint/no-useless-constructor': ["error"];
        '@typescript-eslint/no-var-requires': ["error"];
        '@typescript-eslint/non-nullable-type-assertion-style': ["error"];
        '@typescript-eslint/object-curly-spacing': ["error", string];
        '@typescript-eslint/prefer-function-type': ["error"];
        '@typescript-eslint/prefer-includes': ["error"];
        '@typescript-eslint/prefer-optional-chain': ["error"];
        '@typescript-eslint/prefer-promise-reject-errors': ["error"];
        '@typescript-eslint/prefer-readonly': ["error"];
        '@typescript-eslint/prefer-reduce-type-parameter': ["error"];
        '@typescript-eslint/prefer-return-this-type': ["error"];
        '@typescript-eslint/prefer-ts-expect-error': ["error"];
        '@typescript-eslint/promise-function-async': ["error"];
        '@typescript-eslint/quotes': ["error", string, {
            avoidEscape: boolean;
            allowTemplateLiterals: boolean;
        }];
        '@typescript-eslint/require-array-sort-compare': ["error", {
            ignoreStringArrays: boolean;
        }];
        '@typescript-eslint/restrict-plus-operands': ["error", {
            skipCompoundAssignments: boolean;
        }];
        '@typescript-eslint/restrict-template-expressions': ["error", {
            allowNumber: boolean;
        }];
        '@typescript-eslint/return-await': ["error", string];
        '@typescript-eslint/semi': ["error", string];
        '@typescript-eslint/space-before-blocks': ["error", string];
        '@typescript-eslint/space-before-function-paren': ["error", string];
        '@typescript-eslint/space-infix-ops': ["error"];
        '@typescript-eslint/triple-slash-reference': ["error", {
            lib: string;
            path: string;
            types: string;
        }];
        '@typescript-eslint/type-annotation-spacing': ["error"];
        '@typescript-eslint/unbound-method': ["error", {
            ignoreStatic: boolean;
        }];
        'accessor-pairs': ["error", {
            setWithoutGet: boolean;
            getWithoutSet: boolean;
            enforceForClassMembers: boolean;
        }];
        'array-bracket-spacing': ["error", string];
        'array-callback-return': ["error", {
            allowImplicit: boolean;
            allowVoid: boolean;
            checkForEach: boolean;
        }];
        'arrow-spacing': ["error", {
            before: boolean;
            after: boolean;
        }];
        'comma-style': ["error", string];
        'computed-property-spacing': ["error", string, {
            enforceForClassMembers: boolean;
        }];
        'constructor-super': ["error"];
        curly: ["error", string];
        'default-case-last': ["error"];
        'dot-location': ["error", string];
        'eol-last': ["error"];
        eqeqeq: ["error", string, {
            null: string;
        }];
        'generator-star-spacing': ["error", {
            before: boolean;
            after: boolean;
        }];
        'multiline-ternary': ["error", string];
        'new-cap': ["error", {
            newIsCap: boolean;
            capIsNew: boolean;
            properties: boolean;
        }];
        'new-parens': ["error"];
        'no-async-promise-executor': ["error"];
        'no-caller': ["error"];
        'no-case-declarations': ["error"];
        'no-class-assign': ["error"];
        'no-compare-neg-zero': ["error"];
        'no-cond-assign': ["error"];
        'no-const-assign': ["error"];
        'no-constant-condition': ["error", {
            checkLoops: boolean;
        }];
        'no-control-regex': ["error"];
        'no-debugger': ["error"];
        'no-delete-var': ["error"];
        'no-dupe-args': ["error"];
        'no-dupe-keys': ["error"];
        'no-duplicate-case': ["error"];
        'no-useless-backreference': ["error"];
        'no-empty': ["error", {
            allowEmptyCatch: boolean;
        }];
        'no-empty-character-class': ["error"];
        'no-empty-pattern': ["error"];
        'no-eval': ["error"];
        'no-ex-assign': ["error"];
        'no-extend-native': ["error"];
        'no-extra-bind': ["error"];
        'no-extra-boolean-cast': ["error"];
        'no-fallthrough': ["error"];
        'no-floating-decimal': ["error"];
        'no-func-assign': ["error"];
        'no-global-assign': ["error"];
        'no-import-assign': ["error"];
        'no-invalid-regexp': ["error"];
        'no-irregular-whitespace': ["error"];
        'no-iterator': ["error"];
        'no-labels': ["error", {
            allowLoop: boolean;
            allowSwitch: boolean;
        }];
        'no-lone-blocks': ["error"];
        'no-misleading-character-class': ["error"];
        'no-prototype-builtins': ["error"];
        'no-useless-catch': ["error"];
        'no-mixed-operators': ["error", {
            groups: string[][];
            allowSamePrecedence: boolean;
        }];
        'no-mixed-spaces-and-tabs': ["error"];
        'no-multi-spaces': ["error"];
        'no-multi-str': ["error"];
        'no-multiple-empty-lines': ["error", {
            max: number;
            maxBOF: number;
            maxEOF: number;
        }];
        'no-new': ["error"];
        'no-new-func': ["error"];
        'no-new-object': ["error"];
        'no-new-symbol': ["error"];
        'no-new-wrappers': ["error"];
        'no-obj-calls': ["error"];
        'no-octal': ["error"];
        'no-octal-escape': ["error"];
        'no-proto': ["error"];
        'no-regex-spaces': ["error"];
        'no-return-assign': ["error", string];
        'no-self-assign': ["error", {
            props: boolean;
        }];
        'no-self-compare': ["error"];
        'no-sequences': ["error"];
        'no-shadow-restricted-names': ["error"];
        'no-sparse-arrays': ["error"];
        'no-tabs': ["error"];
        'no-template-curly-in-string': ["error"];
        'no-this-before-super': ["error"];
        'no-trailing-spaces': ["error"];
        'no-undef-init': ["error"];
        'no-unexpected-multiline': ["error"];
        'no-unmodified-loop-condition': ["error"];
        'no-unneeded-ternary': ["error", {
            defaultAssignment: boolean;
        }];
        'no-unreachable': ["error"];
        'no-unreachable-loop': ["error"];
        'no-unsafe-finally': ["error"];
        'no-unsafe-negation': ["error"];
        'no-useless-call': ["error"];
        'no-useless-computed-key': ["error"];
        'no-useless-escape': ["error"];
        'no-useless-rename': ["error"];
        'no-useless-return': ["error"];
        'no-var': ["warn"];
        'no-void': ["error", {
            allowAsStatement: boolean;
        }];
        'no-whitespace-before-property': ["error"];
        'no-with': ["error"];
        'object-curly-newline': ["error", {
            multiline: boolean;
            consistent: boolean;
        }];
        'object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
            allowAllPropertiesOnSameLine: boolean;
        }];
        'object-shorthand': ["warn", string];
        'one-var': ["error", {
            initialized: string;
        }];
        'operator-linebreak': ["error", string, {
            overrides: {
                "?": string;
                ":": string;
                "|>": string;
            };
        }];
        'padded-blocks': ["error", {
            blocks: string;
            switches: string;
            classes: string;
        }];
        'prefer-const': ["error", {
            destructuring: string;
            ignoreReadBeforeAssign: boolean;
        }];
        'prefer-regex-literals': ["error", {
            disallowRedundantWrapping: boolean;
        }];
        'quote-props': ["error", string];
        'rest-spread-spacing': ["error", string];
        'semi-spacing': ["error", {
            before: boolean;
            after: boolean;
        }];
        'space-in-parens': ["error", string];
        'space-unary-ops': ["error", {
            words: boolean;
            nonwords: boolean;
        }];
        'spaced-comment': ["error", string, {
            line: {
                markers: string[];
            };
            block: {
                balanced: boolean;
                markers: string[];
                exceptions: string[];
            };
        }];
        'symbol-description': ["error"];
        'template-curly-spacing': ["error", string];
        'template-tag-spacing': ["error", string];
        'unicode-bom': ["error", string];
        'use-isnan': ["error", {
            enforceForSwitchCase: boolean;
            enforceForIndexOf: boolean;
        }];
        'valid-typeof': ["error", {
            requireStringLiterals: boolean;
        }];
        'wrap-iife': ["error", string, {
            functionPrototypeMethods: boolean;
        }];
        'yield-star-spacing': ["error", string];
        yoda: ["error", string];
        'import/export': ["error"];
        'import/first': ["error"];
        'import/no-absolute-path': ["error", {
            esmodule: boolean;
            commonjs: boolean;
            amd: boolean;
        }];
        'import/no-duplicates': ["error"];
        'import/no-named-default': ["error"];
        'import/no-webpack-loader-syntax': ["error"];
        'n/handle-callback-err': ["error", string];
        'n/no-callback-literal': ["error"];
        'n/no-deprecated-api': ["error"];
        'n/no-exports-assign': ["error"];
        'n/no-new-require': ["error"];
        'n/no-path-concat': ["error"];
        'n/process-exit-as-throw': ["error"];
        'promise/param-names': ["error"];
    };
    name?: string;
    ignores?: string[];
    languageOptions: {
        parser: TSESLint.Parser.LooseParserModule;
        parserOptions: {
            project: true;
        };
    } | {
        ecmaVersion?: import("eslint").Linter.ParserOptions["ecmaVersion"];
        sourceType?: "script" | "module" | "commonjs";
        globals?: import("eslint").ESLint.Environment["globals"];
        parser?: import("eslint").Linter.FlatConfigParserModule;
        parserOptions?: import("eslint").ESLint.Environment["parserOptions"];
    };
    linterOptions?: {
        noInlineConfig?: boolean;
        reportUnusedDisableDirectives?: import("eslint").Linter.Severity | import("eslint").Linter.StringSeverity | boolean;
    };
    processor?: string | import("eslint").Linter.Processor;
    plugins: {
        '@typescript-eslint': TSESLint.FlatConfig.Plugin;
        import: TSESLint.Linter.Plugin;
        n: TSESLint.Linter.Plugin;
        promise: TSESLint.Linter.Plugin;
    } | Record<string, import("eslint").ESLint.Plugin>;
    settings?: Record<string, unknown>;
} | {
    ignores: string[];
})[];
export = configs;
