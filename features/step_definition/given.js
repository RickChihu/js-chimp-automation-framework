module.exports = function () {
    this.Given(/^I'm in "([^"]*)"$/, function (url) {
        browser.url(`http://www.${url}`)
    })
}
