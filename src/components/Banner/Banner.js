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
      return new BannerModel(this.model);
    },
  },

  mounted() {
    this._renderToIFrame();
  },

  methods: {
    _renderToIFrame() {
      const vm = this;
      const iframe = vm.iframe.el;

      iframe.onload = () => {
        iframe.width = vm.current.width;
        iframe.height = vm.current.height;
        iframe.frameBorder = vm.iframe.frameBorder;
        iframe.marginWidth = vm.iframe.marginWidth;
        iframe.marginHeight = vm.iframe.marginHeight;

        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write(vm.current.html);
        iframe.contentWindow.document.close();
      };

      try {
        vm.$el.replaceChild(iframe, vm.$refs.banner);
      } catch (error) {
        // Do nothing on error
        throw new Error(error);
      }
    },
  },

  render(h) { // eslint-disable-line no-unused-vars
    const vm = this;

    return (
      <div
        id={vm.current.id}
        class="arf-banner"
      >
        <div ref="banner" />
      </div>
    );
  },

});

export default Banner;
