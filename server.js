const liveServer = require('live-server');
const openfinLauncher = require('openfin-launcher');
const path = require('path');

const configPath = path.resolve(__dirname, 'app.json');

function launchOpenfin() {
    openfinLauncher.launchOpenFin({ configPath })
        .then(() => process.exit())
        .catch(err => console.log(err));
}

liveServer.start({
    root    : path.resolve(__dirname, 'build'),
    port    : 3333,
    open    : false,
    logLevel: 2
});