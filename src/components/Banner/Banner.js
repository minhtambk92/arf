/**
 * Created by Manhhailua on 11/23/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Banner as BannerModel } from '../../models';

const Banner = Vue.component('banner', {

  props: {
    model: {
      type: Object,
    },
  },

  computed: {
    current() {
      return new BannerModel(this.model);
    },
  },

  mounted() {
    //
  },

  template: '<div></div>',

});

export default Banner;
