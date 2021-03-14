
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  env: {
    browser: true,
  },
  extends: [
    
    
    'plugin:vue/essential', 
   
  
  ],
  
  plugins: [
    'vue'
  ],
  
  rules: {
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'generator-star-spacing': 'off',
    
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}