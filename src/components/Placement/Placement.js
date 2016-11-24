/**
 * Created by Manhhailua on 11/24/16.
 */

import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies

const Placement = Vue.component('placement', {

  props: {
    id: {
      type: String,
    },
  },

  mounted() {
    //
  },

  template: '<div>This is an {{ id }} Placement!</div>',

});

export default Placement;
