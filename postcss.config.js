module.export = {
    plugins: [
        require('postcss-pxtorem')({
            rootValue: 16,
            propList: ['*']
        })
    ]
}