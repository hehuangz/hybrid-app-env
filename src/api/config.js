const prodConfigs = {
    'appservice.wogame-dev': {
        apiHost: 'http://appservice.wogame-dev.com',
        domain: 'http://app.wogame-dev.com',
        staticHost: '',
        vconsole: true
    },
    'appservice.wogame-test': {
        apiHost: 'http://appservice.wogame-test.com',
        domain: 'http://app.wogame-test.com',
        staticHost: '',
        vconsole: false
    }
}
const devConfig = {
    apiHost: 'http://appservice.wogame-dev.com',
    domain: 'http://app.wogame-dev.com',
    staticHost: '',
    vconsole: true
}
const hostConfig = prodConfigs[location.hostname] || devConfig
export default hostConfig
