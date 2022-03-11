const { serveHTTP, publishToCentral } = require("stremio-addon-sdk");
const addonInterface = require("./addon");

serveHTTP(addonInterface, { port: 4000 });


publishToCentral('https://onurdegerli-stremio-oscar-movies.glitch.me/manifest.json')