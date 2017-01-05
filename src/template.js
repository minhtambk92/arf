/**
 * Created by manhhailua on 1/4/17.
 */

/* global Response, Zone */

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//corejs.manhhailua.com/build/Arf.min.js';
document.getElementsByTagName('body')[0].appendChild(script);

script.onload = () => {
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
};
