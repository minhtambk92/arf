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

/**
 * In production mode, webpack will force double quotes to string
 */
const response = new Response("{{zoneDataObject}}"); // eslint-disable-line quotes
const zoneId = "{{zoneId}}"; // eslint-disable-line quotes

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
