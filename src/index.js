/**
 * Created by Manhhailua on 11/23/16.
 */

import {
  Zone,
  Share,
  Placement,
  Banner,
} from './components';

// Check if client side
if (typeof window !== 'undefined' && window.document) {
  // Init global ads array if they are not existed
  window.arfZonesQueue = window.arfZonesQueue || [];
  window.arfBannersQueue = window.arfBannersQueue || [];

  // Render all zones
  while (window.arfZonesQueue.length > 0) {
    const zone = window.arfZonesQueue.shift();

    new Zone({ // eslint-disable-line no-new, no-undef
      el: document.getElementById(zone.id),
      propsData: {
        model: zone,
      },
    });

    if (window.arfZonesQueue.length === 0) {
      delete window.arfZonesQueue;
    }
  }

  // Render all banners
  while (window.arfBannersQueue.length > 0) {
    const banner = window.arfBannersQueue.shift();

    new Banner({ // eslint-disable-line no-new, no-undef
      el: document.getElementById(banner.id),
      propsData: {
        model: banner,
      },
    });

    if (window.arfBannersQueue.length === 0) {
      delete window.arfBannersQueue;
    }
  }
}

export {
  Zone,
  Share,
  Placement,
  Banner,
};
