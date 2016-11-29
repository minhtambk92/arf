/**
 * Created by Manhhailua on 11/23/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';

const Banner = Vue.component('banner', {

  props: {
    raw: {
      type: Object,
    },
    html: {
      type: String,
    },
  },

  template: '<div></div>',

});

export default Banner;
