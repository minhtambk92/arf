/**
 * Created by Manhhailua on 11/24/16.
 */

import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import { Zone as ZoneModel } from '../../models';

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

  computed: {
    current() {
      return new ZoneModel(this.model);
    },
    activePlacement() {
      return this.current.activePlacement();
    },
    activeBanner() {
      return this.current.activeBanner();
    },
  },

  mounted() {
    this._renderToIFrame();
    console.log(this.activeBanner); // eslint-disable-line
  },

  methods: {

    _renderToIFrame() {
      const self = this;
      const { width, height } = self.current;
      const iframe = self.iframe.el;

      iframe.onload = () => {
        iframe.width = width;
        iframe.height = height;
        iframe.frameBorder = self.iframe.frameBorder;
        iframe.marginWidth = self.iframe.marginWidth;
        iframe.marginHeight = self.iframe.marginHeight;

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(self.activeBanner.html);
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
