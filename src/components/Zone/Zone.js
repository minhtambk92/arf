/**
 * Created by Manhhailua on 11/24/16.
 */

import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies

const Zone = Vue.component('zone', {

  props: {
    model: {
      type: Object,
    },
    iframe: {
      type: Object,
      default: () => ({
        el: document.createElement('iframe'),
        frameBorder: 0,
        marginWidth: 0,
        marginHeight: 0,
      }),
    },
  },

  mounted() {
    this._writeToIFrame();
  },

  methods: {

    _writeToIFrame() {
      const self = this;
      const { width, height, placements } = self.model;
      const iframe = self.iframe.el;

      iframe.onload = () => {
        iframe.width = width;
        iframe.height = height;
        iframe.frameBorder = self.iframe.frameBorder;
        iframe.marginWidth = self.iframe.marginWidth;
        iframe.marginHeight = self.iframe.marginHeight;

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(placements[1].banners[0].html);
        iframe.contentWindow.document.close();
      };

      if (self.$el) {
        self.$el.appendChild(iframe);
      }
    },

  },

  template: '<div></div>',

});

export default Zone;
