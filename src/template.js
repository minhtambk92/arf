/**
 * Created by manhhailua on 1/4/17.
 */

/* global Response, Zone */

/**
 * In production mode, webpack will force double quotes to string
 */
const response = new Response("{{zoneDataObject}}"); // eslint-disable-line quotes
const zoneId = "{{zoneId}}"; // eslint-disable-line quotes

new Zone({ // eslint-disable-line no-new
  el: document.getElementById(zoneId),
  propsData: {
    model: response.getZoneObjectById(zoneId),
  },
});
