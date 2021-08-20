module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
        args[0].title = 'Obboy Starter';	// Replace your title here
        return args;
      });
    }
  };