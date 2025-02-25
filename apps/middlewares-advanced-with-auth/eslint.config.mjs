import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(["next/core-web-vitals", "plugin:react/jsx-runtime"]),
  {
    rules: {
      'no-console': 'warn',
      // suppress errors for missing 'import React' in files
      'react/react-in-jsx-scope': 'off',
      // allow jsx syntax in js files (for next.js project)
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
  },
];

export default eslintConfig;
