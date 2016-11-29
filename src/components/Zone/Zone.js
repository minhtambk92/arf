/**
 * Created by Manhhailua on 11/24/16.
 */

import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies

const Zone = Vue.component('zone', {

  props: {
    raw: {
      type: Object,
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
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
    banner: {
      type: Object,
      default: () => ({
        html: '<p>No Ads!</p>',
      }),
    },
  },

  mounted() {
    this._writeToIFrame();
  },

  methods: {

    _writeToIFrame() {
      const self = this;
      const iframe = self.iframe.el;

      iframe.onload = () => {
        iframe.width = self.width;
        iframe.height = self.height;
        iframe.frameBorder = self.iframe.frameBorder;
        iframe.marginWidth = self.iframe.marginWidth;
        iframe.marginHeight = self.iframe.marginHeight;

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(self.banner.html);
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
