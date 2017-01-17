/**
 * Created by Manhhailua on 12/5/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Share as ShareModel } from '../models';
import { Placement } from '../components';

const Share = Vue.component('share', {

  props: {
    model: {
      type: Object,
    },
  },

  created() {
    // Init global container object
    window.arfShares = window.arfShares || {};
  },

  updated() {
    // Set current vm to container object
    window.arfShares[this.current.id] = this;
  },

  computed: {
    current() {
      return (this.model instanceof ShareModel) ? this.model : new ShareModel(this.model);
    },

    activePlacementsModels() {
      return this.current.activePlacements();
    },
  },

  beforeMount() {
    // Attach styles before rendering for better ads displaying performances
    this._attachStyles();
  },

  methods: {
    /**
     * Attach share's style to header
     * @private
     */
    async _attachStyles() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');

      style.id = `style-${this.current.id}`;
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = this.current.css;
      } else {
        style.appendChild(document.createTextNode(this.current.css));
      }

      head.appendChild(style);
    },
  },

  render(h) { // eslint-disable-line no-unused-vars
    const vm = this;

    return (
      <div
        id={vm.current.id}
        class="arf-share"
      >
        {vm.activePlacementsModels.map(placement => (
          <Placement model={placement} />
        ))}
      </div>
    );
  },

});

export default Share;
