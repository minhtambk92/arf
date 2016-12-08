/**
 * Created by Manhhailua on 11/24/16.
 */

/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import { Placement as PlacementModel } from '../../models';
import { Banner } from '../';

const Placement = Vue.component('placement', {

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
      return new PlacementModel(this.model);
    },

    activeBannerModel() {
      return this.current.activeBanner();
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
        iframe.contentWindow.document.write(vm.activeBannerModel.html);
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
        style={{
          width: `${vm.current.width}px`,
          height: `${vm.current.height}px`,
        }}
      >
        <span ref="banner">
          <Banner model={vm.activeBannerModel} />
        </span>
      </div>
    );
  },

});

export default Placement;
