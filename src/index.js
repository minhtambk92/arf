/**
 * Created by Manhhailua on 11/23/16.
 */

/* eslint-disable import/prefer-default-export */

import { Response } from './models';
import {
  Banner,
  Placement,
  Zone,
} from './components';

/* eslint-disable */
const response = new Response("{{zoneDataObject}}");
/* eslint-enable */

const zoneId = '{{zoneId}}';
const zone = new Zone({ // eslint-disable-line no-unused-vars
  el: document.getElementById(zoneId),
  propsData: {
    model: response.getZoneObjectById(zoneId),
  },
});

export {
  Response,
  Banner,
  Placement,
  Zone,
};
