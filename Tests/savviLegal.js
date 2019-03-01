var savvi = {}

module.exports = {
    beforeEach: browser => {
        savvi = browser.page.savviPage()
        savvi.navigate()
            .waitForElementPresent('@app', 5000) 
             .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    

    'Login': browser => {
        browser
        

    
            

       savvi
            .click('@name')
            .setValue('@name', 'rkmastra@comcast.net')
            .click('@pass')
            .setValue('@pass', 'devmountain1')
            .click('@butt')
            .waitForElementPresent('#root', 50)
            .useXpath()
            .waitForElementPresent('@enti', 600)
            .click('@enti')
            .waitForElementPresent('@ordo', 5000)
            .click('@ordo')
            .waitForElementPresent('@exit', 5000)
            .click('@exit') 
            .waitForElementPresent('@team', 50)
            .click('@team')
            .waitForElementPresent('@onb', 6000)
            .click('@onb') 
            .pause(500)
            .click('@exit')
            .waitForElementPresent('@prod', 5000)
            .click('@prod')
            .waitForElementPresent('@term', 5000)
            .click('@term')
            .pause(1000)
            .click('@exit')
            .waitForElementPresent('@cont', 5000)
            .click('@cont')
            .waitForElementPresent('@serv', 5000)
            .click('@serv')
            .pause(1000)
            .click('@exit')
            .waitForElementPresent('@fina', 5000)
            .click('@fina')
            .waitForElementPresent('@pre', 5000)
            .click('@pre')
            .pause(1000)
            .click('@exit')
            .waitForElementPresent('@coun', 5000)
            .click('@coun')
            .waitForElementPresent('@cus', 5000)
            .click('@cus')
            .pause(1000)
            .click('@exit')
            .waitForElementPresent('@file', 5000)
            .click('@file')
            .pause(3000)
            .waitForElementPresent('@acco', 5000)
            .click('@acco')
            .waitForElementPresent('@phone', 5000)
            .useCss()
            .clearValue('@phone')
            .pause(2000)
            .useXpath()
            .setValue('@phone', '\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003\uE003814-563-1254')
            .useCss()
            .click('@btn')
            .pause(2000)
            .useXpath()
            .getValue('@phone', function (result) {
                console.log(result.value)
                })

            .click('@out')
            .waitForElementPresent('@out', 5000)
            .click('@log')
            .pause(2000)

            },

        }