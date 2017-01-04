/**
 * Created by Manhhailua on 11/23/16.
 */

/* eslint-disable import/prefer-default-export */

// Models
import Response from './models/Response';

// Arf Components
import Zone from './components/Zone';
import Share from './components/Share';
import Placement from './components/Placement';
import Banner from './components/Banner';

// Named exports
export {
  Response as ArfResponse,
  Zone as ArfZone,
  Share as ArfShare,
  Placement as ArfPlacement,
  Banner as ArfBanner,
};

// Default export
const Arf = {
  Response,
  Zone,
  Share,
  Placement,
  Banner,
};

// Make Arf to be global
if (!window.Arf) {
  Object.assign(window, { Arf });
}

export default Arf;
