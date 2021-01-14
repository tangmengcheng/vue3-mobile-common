const merge = require('webpack-merge')
const tsImportPlugin = require('ts-import-plugin')

module.exports = {
    
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                options = merge(options, {
                    happyPackMode: true,
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPlugin({
                                libraryName: 'vant',
                                libraryDirectory: 'es',
                                style: name => `${name}/style/less`
                            })
                        ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                })
                return options
            })
    }
}