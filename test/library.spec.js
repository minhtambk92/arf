import chai from 'chai';
import {
  ResponseModel,
} from '../src';

chai.expect();

const expect = chai.expect;

let response;
let data;

describe('Given an instance of ads response', () => {
  before(() => {
    /* eslint-disable */
    response = new ResponseModel({
      "data": {
        "zones": [
          {
            "id": "77d24611-827d-4ac6-85e7-89332626b575",
            "width": 468,
            "height": 60,
            "placements": [
              {
                "id": "2FB675E9-242F-4BD7-AD6A-206210B008C2",
                "banners": [
                  {
                    "id": "50431e1c-2c59-4139-9ee0-c20f7dec643c",
                    "html": "",
                    "weight": 1,
                    "type": "img"
                  }
                ]
              },
              {
                "id": "ff8a2da9-628e-479a-a631-d080e103f2a3",
                "banners": [
                  {
                    "id": "49cdbffb-5c96-4605-9dd9-555fd4347a8a",
                    "html": "<script src=\"https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=28&pli=18292301&PluID=0&w=980&h=250&ord=[timestamp]&ucm=true&ncu=$$%%TTD_CLK_ESC%%$$\"></script> <noscript> <a href=\"%%TTD_CLK_ESC%%https%3A//bs.serving-sys.com/BurstingPipe/adServer.bs%3Fcn%3Dbrd%26FlightID%3D18292301%26Page%3D%26PluID%3D0%26Pos%3D1596347057\" target=\"_blank\"><img src=\"https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=bsr&FlightID=18292301&Page=&PluID=0&Pos=1596347057\" border=0 width=980 height=250></a> </noscript>",
                    "weight": 1,
                    "type": "html"
                  }
                ]
              }
            ]
          }
        ]
      }
    });
    /* eslint-enable */
  });

  describe('when we need an ads response', () => {
    it('which should be an instance of class Data', () => {
      expect(response).to.be.an.instanceof(ResponseModel);
    });

    it('which should contains "data" attribute as an object', () => {
      // "raw" is the output of response class Data
      expect(response)
        .to.have.property('raw')
        .that.is.an('object');
    });
  });

  describe('when we have "data" attribute', () => {
    before(() => {
      data = response.raw;
    });

    it('which should contains "zones" attribute as an array', () => {
      expect(data)
        .to.have.property('zones')
        .that.is.an('array');
    });

    it('and "zones" array must have at least one element', () => {
      expect(data.zones).to.has.length.of.at.least(1);
    });

    it('and all elements in "zones" must be "object" type', () => {
      data.zones.map(zone => expect(zone).to.be.an('object'));
    });
  });
});
