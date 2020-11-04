module.exports = function check(str, config) {

    config = config.reduce((acc,v) => {
        acc[v[0]] = v[1]
        return acc
    }, {})

    let arr = []

    for (let i = 0; i < str.length; i++) {
        for (let key in config) {
            if (key === config[key] && arr.length && arr[arr.length - 1] === key) {
                arr.pop()
                continue
            }

            if (str[i] === key) {
                arr.push(str[i])
                break
            }

            if (str[i] === config[key]) {
                if (arr[arr.length-1] === key) {
                    arr.pop()
                    break
                }
                else {
                    return false
                }
            }
        }
    }
    return !arr.length
}
