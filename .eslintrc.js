module.exports = {
  extends: ['@nuxtjs', 'plugin:prettier/recommended'],
  rules: {
    curly: 'error',
    // Allow sparse arrays
    'no-sparse-arrays': 'off',
    // Allow v-html
    'vue/no-v-html': 'off',
  },
}
