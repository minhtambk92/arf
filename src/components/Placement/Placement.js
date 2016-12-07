/**
 * Created by Manhhailua on 11/24/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Placement as PlacementModel } from '../../models';
import { Banner } from '../';

const Placement = Vue.component('placement', {

  props: {
    model: {
      type: Object,
    },
  },

  computed: {
    current() {
      return new PlacementModel(this.model);
    },

    activeBannerModel() {
      return this.current.getBannerByIndex(0);
    },
  },

  mounted() {
    // const vm = this;
  },

  render(h) { // eslint-disable-line no-unused-vars
    const vm = this;

    return (
      <div id={vm.current.id}>
        <Banner model={vm.activeBannerModel} />
      </div>
    );
  },

});

export default Placement;
