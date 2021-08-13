const tailwinds = require('tailwind')

module.exports = {
    plugins:[tailwinds('./tailwind.config.js'),require(autoprefixer)]
}
