/**
 * Created by Manhhailua on 11/24/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Placement as PlacementModel } from '../../models';

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
  },

  mounted() {
    //
  },

  template: '<div>This is an {{ id }} Placement!</div>',

});

export default Placement;
