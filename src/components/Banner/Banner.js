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

  data() {
    return {
      isRendered: false,
    };
  },

  computed: {
    current() {
      return (this.model instanceof BannerModel) ? this.model : new BannerModel(this.model);
    },
  },

  mounted() {
    this._renderToIFrame();
  },

  methods: {
    /**
     * Wrap ads by an iframe
     * @private
     */
    _renderToIFrame() {
      const vm = this;
      const iframe = vm.iframe.el;

      iframe.onload = () => {
        if (vm.$data.isRendered === false) {
          iframe.width = vm.current.width;
          iframe.height = vm.current.height;
          iframe.frameBorder = vm.iframe.frameBorder;
          iframe.marginWidth = vm.iframe.marginWidth;
          iframe.marginHeight = vm.iframe.marginHeight;
          iframe.scrolling = 'no'; // Prevent iframe body scrolling

          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(vm.current.html);
          iframe.contentWindow.document.close();

          vm.$data.isRendered = true; // Prevent AppleWebKit iframe.onload loop
        }
      };

      try {
        vm.$el.replaceChild(iframe, vm.$refs.banner); // Do the trick
      } catch (error) {
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
        <div ref="banner">{vm.current.html}</div>
      </div>
    );
  },

});

export default Banner;
