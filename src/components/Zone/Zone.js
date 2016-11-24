/**
 * Created by Manhhailua on 11/24/16.
 */

import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies

const Zone = Vue.component('zone', {

  props: {
    id: {
      type: String,
    },
  },

  mounted() {
    //
  },

  template: '<div>This is an {{ id }} Zone!</div>',

});

export default Zone;
