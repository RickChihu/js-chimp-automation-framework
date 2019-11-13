module.exports = {
    input: {
        origin: '#package-origin-hp-package',
        destination: '#package-destination-hp-package',
        departing: '#package-departing-hp-package',
        returning: '#package-returning-hp-package'
    },

    button: {
        search: '#search-button-hp-package',
        close: '.datepicker-close-btn close btn-text'
    },

    tab: {
        flight: '#tab-flight-tab-hp'
    },

    setValue: function(id, text) {
        browser.waitForExist(this.input[id], 10000)
        browser.setValue(this.input[id], text)
        // browser.click(this.input[id])
    },

    doClick: function(id) {
        browser.waitForExist(this.button[id], 10000)
        browser.click(this.button[id])
    },

    selectTab: function(id) {
        browser.waitForExist(this.tab[id], 10000)
        browser.waitUntil(() => {
            browser.click(this.tab[id])
            return browser.getAttribute(this.tab[id], 'class') === 'on'
        }, 10000, `The ${id} tab wasn't selected`) 
    }
}
