module.exports = {
    button: {
        sort: {
            cheapest: '#sort-cheapest'
        }
    },

    doSort: function(id) {
        browser.waitForExist(this.button.sort[id], 60000)
        browser.click(this.button.sort[id])
    }
}
