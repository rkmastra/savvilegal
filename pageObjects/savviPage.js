module.exports = {
    url: 'http://staging.savvi.legal/',
    elements: {
        app: '#root',
        name: 'input[name="email"]',
        pass: 'input[name="password"]',
        butt: 'button[type="submit"]',
         btn: 'button[type="button"]',
         tel: 'input[placeholder="555-555-5555"]',
        enti: {
            selector: '(//a[@class="sidebar-nav__link"])[1]',
            locateStrategy: 'xpath'
        },
        ordo: {
            selector: '(//div[@class="module-card__content"])[1]',
            locateStrategy: 'xpath'
        },
        exit: {
            selector: '(//a[@class="topbar__exit topbar__nav-link"])',
            locateStrategy: 'xpath'
        },
        onb: {
            selector: '(//h2[@class="module-card__title"])[2]',
            locateStrategy: 'xpath'
        },
        term: {
            selector: '(//div[@class="module-card__content"])[6]',
            locateStrategy: 'xpath'
        },
        team: {
            selector: '(//a[@class="sidebar-nav__link"])[2]',
            locateStrategy: 'xpath'
        },
        prod: {
            selector: '(//a[@class="sidebar-nav__link"])[3]',
            locateStrategy: 'xpath'
        },
        cont: {
            selector: '(//a[@class="sidebar-nav__link"])[4]',
            locateStrategy: 'xpath'
        },
        fina: {
            selector: '(//a[@class="sidebar-nav__link"])[5]',
            locateStrategy: 'xpath'
        },
        coun: {
            selector: '(//a[@class="sidebar-nav__link"])[6]',
            locateStrategy: 'xpath'
        },
        file: {
            selector: '(//a[@class="sidebar-nav__link"])[7]',
            locateStrategy: 'xpath'
        },
        acco: {
            selector: '(//a[@class="sidebar-nav__link"])[8]',
            locateStrategy: 'xpath'
        },
    
        out: {
            selector: '(//a[@class="nav__link nav__link-secondary dark"])',
            locateStrategy: 'xpath'
        },
        log: {
            selector: '(//a[@class="nav-dropdown__link"])[2]',
            locateStrategy: 'xpath'
        },
        ordo: {
            selector: '(//div[@class="module-card__content"])[1]',
            locateStrategy: 'xpath'
        },
         serv: {
            selector: '(//div[@class="module-card__content"])[1]',
            locateStrategy: 'xpath'
        },
          pre: {
            selector: '(//div[@class="module-card__top"])[1]',
            locateStrategy: 'xpath'
        },
          cus: {
            selector: '(//div[@class="module-card__content"])[1]',
            locateStrategy: 'xpath'
        },
         phone:{
            selector:'(//input[@class="form__control text-field__control"])[3]',
            locateStrategy: 'xpath'
         },




    }
}
