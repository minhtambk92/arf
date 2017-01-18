/**
 * Created by manhhailua on 1/4/17.
 */

/* global Arf */

// Async load script
function loadScript(src, callback) {
  const script = document.createElement('script');
  const node = document.getElementsByTagName('body')[0];

  script.id = 'admicro-cms-corejs';
  script.type = 'text/javascript';
  script.src = src;
  script.onload = script.onreadystatechange = callback;

  if (!document.getElementById(script.id)) {
    node.appendChild(script);
  } else {
    callback();
  }
}

// Render ads by zone id and response object
function renderAds(zone) {
  new Arf.Zone({ // eslint-disable-line no-new, no-undef
    el: document.getElementById(zone.id),
    propsData: {
      model: zone,
    },
  });
}

// Handle load script callback
function handle() {
  // In production mode, webpack will force double quotes for string
  const zone = "{{zoneDataObject}}"; // eslint-disable-line quotes

  // Check if "Arf" defined
  if (Object.prototype.hasOwnProperty.call(window, 'Arf')) {
    // Let's render
    renderAds(zone);
  } else {
    // Init arfZonesQueue if not existed
    window.arfZonesQueue = window.arfZonesQueue || [];

    // Push current zone to arfZonesQueue
    window.arfZonesQueue.push(zone);
  }
}

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

// Start load script
loadScript(`//corejs.manhhailua.com/build/Arf${env}.js`, handle);
