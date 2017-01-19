/**
 * Created by Manhhailua on 11/23/16.
 */

import Vue from 'vue';
import {
  Zone,
  Share,
  Placement,
  Banner,
} from './components';

// These code run only on client side
if (typeof window !== 'undefined' && window.document) {
  /**
   * Render ads from queue
   * @param queue
   * @param Entity
   */
  function renderEntities(queue, Entity) { // eslint-disable-line no-inner-declarations
    if (
      !(queue instanceof Array) || queue.length === 0 ||
      JSON.stringify(Entity) !== JSON.stringify(Zone) ||
      JSON.stringify(Entity) !== JSON.stringify(Banner)
    ) {
      return;
    }

    while (queue.length > 0) {
      const entity = queue.shift();

      new Entity({ // eslint-disable-line no-new
        el: document.getElementById(entity.id),
        propsData: {
          model: entity,
        },
      });
    }
  }

  /**
   * Create a watcher of global queues
   * Render every zones or banners which pushed to
   * "window.arfBannersQueue" & "window.arfZonesQueue"
   */
  new Vue({ // eslint-disable-line no-new
    data: {
      zonesQueue: window.arfZonesQueue || [],
      bannersQueue: window.arfBannersQueue || [],
    },
    // Render once at component created event
    created() {
      renderEntities(this.zonesQueue, Zone);
      renderEntities(this.bannersQueue, Banner);
    },
    // Watch and render every times an entity is pushed to queue
    watch: {
      zonesQueue(value) {
        renderEntities(value, Zone);
      },
      bannersQueue(value) {
        renderEntities(value, Banner);
      },
    },
  });
}

export { Zone, Share, Placement, Banner };
export default { Zone, Share, Placement, Banner };
