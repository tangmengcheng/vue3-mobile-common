const fileParams = (argv) => {
    if(argv.length <=2) {
        console.log('没有参数')
        return
    }
    return argv.filter((value, index) => {
        return index >= 2;
    })
}

module.exports = fileParams