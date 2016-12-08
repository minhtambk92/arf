/**
 * Created by Manhhailua on 12/5/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Share as ShareModel } from '../../models';
import { Placement } from '../';

const Share = Vue.component('share', {

  props: {
    model: {
      type: Object,
    },
  },

  computed: {
    current() {
      return new ShareModel(this.model);
    },

    activePlacementsModels() {
      if (this.current.type === 'multiple') {
        return this.current.placements;
      }

      return [this.current.activePlacement()];
    },
  },

  mounted() {
    this._attachStyles();
  },

  methods: {
    _attachStyles() {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');

      style.id = this.current.id;
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
