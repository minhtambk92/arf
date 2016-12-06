/**
 * Created by Manhhailua on 11/24/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
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
    activeShare() {
      return this.current.getShareByIndex(1);
    },
    activePlacement() {
      return this.activeShare.getPlacementByIndex(1);
    },
    activeBanner() {
      return this.activePlacement.getBannerByIndex(0);
    },
  },

  mounted() {
    this._renderToIFrame();
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
