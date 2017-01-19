/**
 * Created by manhhailua on 1/4/17.
 */

/* global Arf */

// Check env
let env = '';

switch (true) {
  // Development mode
  case location.search.indexOf('corejs_env=dev') !== -1: {
    env = '';
    break;
  }
  // Pre-build mode (vue development tool included)
  case location.search.indexOf('corejs_env=pre') !== -1: {
    env = '.build';
    break;
  }
  // Production mode
  default: {
    env = '.min';
  }
}

/**
 * Async load core-js script
 * @param src
 * @param callback
 */
function loadScript(src, callback) {
  const script = document.createElement('script');
  const node = document.getElementsByTagName('body')[0];

  script.id = 'admicro-arf';
  script.type = 'text/javascript';
  script.src = src;
  script.onload = script.onreadystatechange = callback;

  if (!document.getElementById(script.id)) {
    node.appendChild(script);
  } else {
    callback();
  }
}

/**
 * Handle load script callback
 */
function handle() {
  // Init arfZonesQueue if not existed
  window.arfZonesQueue = window.arfZonesQueue || [];

  // Push current zone to arfZonesQueue
  // In production mode, webpack will force double quotes for string
  window.arfZonesQueue.push("{{zoneDataObject}}"); // eslint-disable-line quotes
}

// Start load script
loadScript(`//corejs.manhhailua.com/build/Arf${env}.js`, handle);
