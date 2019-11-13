import * as landing from '../page_objects/landing.page'
import * as searchResults from '../page_objects/search_results.page'

module.exports = function () {
    // Landing
    this.When(/^I type "([^"]*)" in "([^"]*)"$/, function (text, id) {
        landing.setValue(id,text)
    })

    this.When(/^I set travel dates for a month starting tomorrow$/, function () {
        let date = new Date()
        landing.setValue('departing', `${date.getMonth()+1}/${date.getDate()+1}/${date.getFullYear()}`)
        let month = date.getMonth() === 11 /*December*/ ? 1 : date.getMonth() + 2
        let year = date.getMonth() === 11 /*December*/ ? date.getFullYear() + 1 : date.getFullYear()
        console.log(`${month}/${date.getDate()}/${date.getFullYear()}`)
        landing.setValue('returning', `${month}/${date.getDate()}/${date.getFullYear()}`)
    })
    
    this.When(/^I click on the "([^"]*)" button$/, function (id) {
        landing.doClick(id)
    });

    this.When(/^I click on the "([^"]*)" tab$/, function (id) {
        landing.selectTab(id)
    });

    //Search Results
    this.When(/^I sort the results by "([^"]*)"$/, function (id) {
        searchResults.doSort(id)
    });
}
