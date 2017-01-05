/**
 * Created by manhhailua on 1/4/17.
 */

/* global Arf */

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//corejs.manhhailua.com/build/Arf.build.js';

if (window.Arf === 'undefined' || !Object.prototype.hasOwnProperty.call(window, 'Arf')) {
  document.getElementsByTagName('body')[0].appendChild(script);
}

function renderAds() {
  /**
   * In production mode, webpack will force double quotes to string
   */
  /* eslint-disable */
  const response = new Arf.Response("{{zoneDataObject}}");
  const zoneId = "{{zoneId}}";
  /* eslint-enable */

  new Arf.Zone({ // eslint-disable-line no-new, no-undef
    el: document.getElementById(zoneId),
    propsData: {
      model: response.getZoneObjectById(zoneId),
    },
  });
}

script.onload = renderAds;
