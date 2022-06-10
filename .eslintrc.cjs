/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
// "eslint:recommended",
// "@vue/eslint-config-prettier"
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    
  ],
  "env": {
    "vue/setup-compiler-macros": true
  }
}
