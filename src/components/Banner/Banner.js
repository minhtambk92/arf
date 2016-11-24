/**
 * Created by Manhhailua on 11/23/16.
 */

import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies

const Banner = Vue.component('banner', {

  mounted() {
    const self = this;
    const iframe = document.createElement('iframe');

    iframe.onload = () => {
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(self.adsHtml);
      iframe.contentWindow.document.close();
    };

    self.$el.appendChild(iframe);
  },

  props: ['adsHtml'],

  template: '<div></div>',

});

export default Banner
