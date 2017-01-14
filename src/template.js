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
function renderAds(zoneId, responseObject) {
  const id = zoneId;
  const response = new Arf.Response(responseObject);

  new Arf.Zone({ // eslint-disable-line no-new, no-undef
    el: document.getElementById(id),
    propsData: {
      model: response.getZoneObjectById(id),
    },
  });
}

// Handle load script callback
function handle() {
  // In production mode, webpack will force double quotes for string
  const response = "{{zoneDataObject}}"; // eslint-disable-line quotes
  const zoneId = "{{zoneId}}"; // eslint-disable-line quotes

  // Check if "Arf" defined
  if (Object.prototype.hasOwnProperty.call(window, 'Arf')) {
    // Let's render
    renderAds(zoneId, response);

    // If queue is not empty, render ads from it
    if (window.arfQueue && window.arfQueue.length > 0) {
      while (window.arfQueue.length > 0) {
        const zone = window.arfQueue.shift();
        renderAds(zone.zoneId, zone.response);
      }
    }
  } else {
    // Init queue
    window.arfQueue = window.arfQueue || [];

    // Push ads to queue
    window.arfQueue.push({
      zoneId,
      response,
    });
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
