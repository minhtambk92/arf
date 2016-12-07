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

    activePlacementModel() {
      return this.current.activePlacement();
    },
  },

  mounted() {
    // const vm = this;
  },

  render(h) { // eslint-disable-line no-unused-vars
    const vm = this;

    return (
      <div id={vm.current.id}>
        <Placement model={vm.activePlacementModel} />
      </div>
    );
  },

});

export default Share;
