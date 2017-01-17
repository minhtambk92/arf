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
  },

  created() {
    // Init global container object
    window.arfZones = window.arfZones || {};
  },

  updated() {
    // Set current vm to container object
    window.arfZones[this.current.id] = this;
  },

  computed: {
    current() {
      return (this.model instanceof ZoneModel) ? this.model : new ZoneModel(this.model);
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
        }}
      >
        <Share model={vm.activeShareModel} />
      </div>
    );
  },

});

export default Zone;
