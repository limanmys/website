import path from "path";

import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import tailwindcss from "eslint-plugin-tailwindcss";

const tailwindConfig = path.join(import.meta.dirname, "tailwind.config.js");

const eslintConfig = [
  {
    ignores: ["dist/*", ".cache", "public", "node_modules", ".next", "*.esm.js"],
  },
  ...nextCoreWebVitals,
  ...tailwindcss.configs["flat/recommended"],
  prettier,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
  {
    settings: {
      tailwindcss: {
        callees: ["cn"],
        config: tailwindConfig,
      },
    },
  },
];

export default eslintConfig;
