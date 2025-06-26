Feature: Demo Feature
@demo
  Scenario Outline: Running the demo Feature
    Given Google page is opened
    When Search with <SearchItem>
    Then Click on first search result
    Then URL should match <ExpectedURL>

    Examples:
      | TestID    | SearchItem | Expected URL          |
      | DEMO_TC01 | WDIO       | https://webdriver.io/ |
