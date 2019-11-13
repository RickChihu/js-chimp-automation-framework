Feature: Booking flow.
    
    Scenario: Confirm that the flight can be sorted by cheapest correctly.
        Given I'm in "expedia.com"
        When I click on the "flight" tab
        And I type "Guadalajara" in "origin"
        And I type "Miami" in "destination"
        And I set travel dates for a month starting tomorrow
        And I click on the "flight" tab
        And I click on the "search" button
        And I sort the results by "cheapest"
        # TODO
        # Then I validate that the values are sorted by "cheapest"
