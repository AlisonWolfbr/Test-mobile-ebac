exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab',
        'appium:deviceName': 'Samsung.*',
        'appium:platformVersion': '10',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
            build: 'appium-build-teste-ebacshop',
            name: 'Ebac Shop Teste',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.0.0'
        }
    }],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['sauce', {
            region: 'us'
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    
};