/**
 * Created by Manhhailua on 11/23/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';

const Banner = Vue.component('banner', {

  mounted() {
    const self = this;
    const iframe = document.createElement('iframe');

    iframe.onload = () => {
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(self.adsHtml);
      iframe.contentWindow.document.close();
    };

    if (self.$el) {
      self.$el.appendChild(iframe);
    }
  },

  props: ['adsHtml'],

  template: '<div></div>',

});

export default Banner;
