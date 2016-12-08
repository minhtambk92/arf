/**
 * Created by Manhhailua on 11/24/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Zone as ZoneModel } from '../../models';
import { Share } from '../';

const Zone = Vue.component('zone', {

  props: {
    model: {
      type: Object,
    },
    iframe: {
      type: Object,
      default: () => ({
        el: document.createElement('iframe'),
        frameBorder: 0,
        marginWidth: 0,
        marginHeight: 0,
      }),
    },
  },

  computed: {
    current() {
      return new ZoneModel(this.model);
    },

    activeShareModel() {
      return this.current.activeShare();
    },
  },

  render(h) { // eslint-disable-line no-unused-vars
    const vm = this;

    return (
      <div
        id={vm.current.id}
        class="arf-zone"
        style={{
          width: `${vm.current.width}px`,
          height: `${vm.current.height}px`,
          overflow: 'hidden',
        }}
      >
        <Share model={vm.activeShareModel} />
      </div>
    );
  },

});

export default Zone;
