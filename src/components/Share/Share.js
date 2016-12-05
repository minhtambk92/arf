/**
 * Created by Manhhailua on 12/5/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Share as ShareModel } from '../../models';

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
  },

  mounted() {
    //
  },

  template: '<div>This is an {{ id }} Share!</div>',

});

export default Share;
