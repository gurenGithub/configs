## postcss.config.js
```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
    /* main.js  引入 import 'amfe-flexible' */
    'postcss-pxtorem': {
      rootValue: 192, // PC换算的基数192
      propList: ['*'],
      exclude: /styles\/mobile\/*/i, //不转换styles/mobile目录
      propList: ['*']
    },
    'postcss-px2rem': {
      remUnit: 37.5, //  H5换算的基数37.5
      // selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
      propList: ['*'],
      exclude: /styles\/normal\/*/i //不转换styles/normal目录
    }
  }
}

```

## scss-loader
```javascript
{
    test: /\.scss$/,
    use: [
    /*{
            loader: MiniCssExtractPlugin.loader
          },*/
    {
        loader: 'style-loader' // 将 Sass 编译成 CSS
    },
    {
        // Interprets CSS
        loader: "css-loader",
        options: {
            //importLoaders: 2
        }
    },
    {
        loader: 'sass-loader' // 将 Sass 编译成 CSS
    }]
}

```
### url-loader
```javascript
{
       test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ]
      }
```
### .babelrc
```javascript
{
  "presets": [
      "es2015"
  ], 
  "plugins": [
    "transform-runtime"
  ]
}
```

### umd libs
```javascript
{
 output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd', //(设置 library 规范)
    globalObject: 'this', //（设置全局环境）
  }
}
```
