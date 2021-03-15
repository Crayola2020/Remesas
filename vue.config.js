// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...

    publicPath:'/',
  pwa: {
    
    name: 'Remesas',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    start_url:"/",

   
}
}