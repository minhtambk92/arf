/**
 * Created by Manhhailua on 11/25/16.
 */

import Entity from './Entity';
import Share from './Share';
import { util } from '../vendor';

class Zone extends Entity {

  constructor(zone) {
    super(zone);

    this.id = `zone-${zone.id}`;
    this.shares = zone.shares;
  }

  /**
   * Get all shares from this zone
   * @returns [Share]
   */
  get allShares() {
    return this.shares.map(share => new Share(share));
  }

  get ZoneArea() {
    return util.convertArea(this.height, this.width);
  }

  get filterShare() {
    const allShare = this.allShares;
    const Prs = [];
    const Cpds = [];
    const Cpms = [];

    // filler pr places
    const prShare = allShare.filter((share) => {
      const places = share.activePlacements();

      const prPlaces = places.filter(y => y.AdsType === 'pr');
      if (prPlaces.length > 0) {
        return prPlaces.reduce((acc, pr) => {
          Prs.push(pr);
          // check banner in this placement
          if (pr.filterBanner().length === 0) {
            return false;
          }
          return true;
        }, 0);
      }
      return false;
    });

    if (prShare.length > 0) {
      return prShare;
    }

    // filter cpd places
    let cpdShare = [];
    if (Prs.length === 0) {
      cpdShare = allShare.filter((share) => {
        const places = share.activePlacements();

        const cpdPlaces = places.filter(y => y.AdsType === 'cpd');
        if (cpdPlaces.length !== 0) {
          return cpdPlaces.reduce((acc, cpd) => {
            Cpds.push(cpd);
            // check banner available in placement
            if (cpd.filterBanner().length === 0) {
              return false;
            }
            return true;
          }, 0);
        }

        return false;
      });
    }

    if (cpdShare.length > 0) {
      // console.log('abc', cpdShare);
      return cpdShare;
    }

    // filter cpm places
    let cpmShare = [];
    if (Cpds.length === 0) {
      cpmShare = allShare.filter((share) => {
        const places = share.activePlacements();

        const cpmPlaces = places.filter(y => y.AdsType === 'cpm');
        if (cpmPlaces.length !== 0) {
          return cpmPlaces.reduce((acc, cpm) => {
            Cpms.push(cpm);
            // check banner available in placement
            if (cpm.filterBanner().length === 0) {
              return false;
            }
            return true;
          }, 0);
        }

        return false;
      });
    }

    if (cpmShare.length > 0) {
      return cpmShare;
    }
    // console.log(allShare);
    return allShare;
  }

  get filterShareDynamic() {
    const allShare = this.allShares;
    let allPlace = [];
    this.allShares.reduce((temp, share) => allPlace.push(share.allPlacements), 0);
    allPlace = util.flatten(allPlace);
    // console.log('all Place', allPlace);
    const shareTemplate = {
      id: 'DS',
      name: 'Dynamic Share',
      html: '<div class="hello"></div>',
      css: '.arf-placement{display:inline-block;margin-left:50px;}',
      outputCss: '',
      width: this.width,
      height: this.height,
      classes: '',
      weight: 0,
      type: 'multiple',
      description: `Share ${this.width}x${this.height}`,
      zoneId: this.id,
      placements: [],
    };
    const shares = [];
    const shareDatas = [];

    // get pr places
    let prPlaces = [];
    for (let j = 0; j < allShare.length; j += 1) {
      const places = allShare[j].activePlacements();
      prPlaces = places.filter(y => y.AdsType === 'pr');
      if (prPlaces.length > 0) {
        break;
      }
    }

    // Create Share : S(zone) - S(pr) = Sfree
    const SumPrArea = prPlaces.reduce((temp, item) => temp + item.PlacementArea, 0);
    const FreeArea = this.ZoneArea - SumPrArea;
    // console.log('FreeArea', FreeArea);

    for (let i = 1; i <= FreeArea; i += 1) {
      // console.log('i', i);
      // divide share base on free area and number of part.
      const shareRatios = util.ComputeShare(FreeArea, i);
      // console.log('shareRatios', shareRatios);
      // Browse each shareRatio on above and create a share for it.
      shareRatios.reduce((temp, shareRatio) => {
        // console.log('shareRatio', shareRatio);
        // this variable to store place which is choose bellow
        let share = [];
        shareRatio.reduce((temp2, placeRatio) => {
          // console.log('placeRatio', placeRatio);
          // find all place fit in area place
          const places = allPlace.filter(place => place.PlacementArea === placeRatio);
          // console.log(`place area ${placeRatio}-`, places);
          // if don't have any places fit in area => return empty share
          if (places.length === 0) {
            share = [];
          } else {
            let randomIndex = parseInt(Math.random() * places.length, 10);
            randomIndex = randomIndex > places.length ? places.length : randomIndex;
            const place = places[randomIndex];
            // console.log('random place', place);
            share.push(place);
          }

          return '';
        }, 0);
        if (share.length !== 0) {
          // push pr place into share.
          prPlaces.reduce((x, y) => share.push(y), 0);
          // console.log('shareBuild', share);
          shares.push(share);
          share = [];
        }

        return '';
      }, 0);
    }
    // console.log('shares', shares);
    shareTemplate.weight = 100 / shares.length;
    for (let i = 0; i < shares.length; i += 1) {
      shareTemplate.id = `${shareTemplate.id}-${i}`;
      shareTemplate.placements = shares[i];
      const shareData = new Share(shareTemplate);
      // console.log('shareData', shareData);
      shareDatas.push(shareData);
    }

    // console.log('shareDatas', shareDatas);
    return shareDatas;
  }

  /**
   * Get a active share randomly by its weight
   * @return {Share}
   */
  activeShare() {
    const randomNumber = Math.random() * 100;
    const ratio = this.allShares.reduce((tmp, share) => (share.weight + tmp), 0) / 100;

    const res = this.allShares.reduce((range, share) => {
      const nextRange = range + (share.weight / ratio);

      if (typeof range === 'object') {
        return range;
      }

      if (randomNumber >= range && randomNumber < nextRange) {
        return share;
      }

      return nextRange;
    }, 0);
    // console.log('current share:', res);
    return res;
  }

  /**
   * Get array of active placements
   * @returns [Placement]
   */
  activePlacements() {
    const activeShareModel = this.activeShare();
    return activeShareModel.activePlacements();
  }

  /**
   *
   * */
}

export default Zone;
