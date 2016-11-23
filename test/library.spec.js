import chai from 'chai';
import {
  Data,
} from '../src';

chai.expect();

const expect = chai.expect;

let response;
let data;

describe('Given an instance of ads response', () => {
  before(() => {
    /* eslint-disable */
    response = new Data({
      "data": {
        "banners": [
          {
            "id": "ed788e43-a197-4f5e-96a1-8f40be3d49ca",
            "name": "Banner Top",
            "html": "<script src=\"https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=28&pli=18292301&PluID=0&w=980&h=250&ord=[timestamp]&ucm=true&ncu=$$%%TTD_CLK_ESC%%$$\"></script> <noscript> <a href=\"%%TTD_CLK_ESC%%https%3A//bs.serving-sys.com/BurstingPipe/adServer.bs%3Fcn%3Dbrd%26FlightID%3D18292301%26Page%3D%26PluID%3D0%26Pos%3D1596347057\" target=\"_blank\"><img src=\"https://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=bsr&FlightID=18292301&Page=&PluID=0&Pos=1596347057\" border=0 width=980 height=250></a> </noscript>",
            "width": 980,
            "height": 250,
            "keyword": "dantri",
            "weight": 1,
            "description": "Banner Top of Bong Da So",
            "type": "html",
            "imageUrl": "",
            "url": "",
            "target": "_blank",
            "userIFrame": "1",
            "status": "active",
            "adServer": "adtech",
            "bannerHTMLType": "9",
            "countView": "0",
            "fixIE": "0",
            "isDefault": "0",
            "isRelative": "0",
            "impressionsBooked": "0",
            "clicksBooked": "0",
            "activationDate": "0",
            "expirationDate": "0",
            "adStore": "",
            "impressionsBookedValue": "unlimited",
            "clicksBookedValue": "unlimited",
            "activationDateValue": "Mon Nov 21 2016 00:00:00 GMT+0700 (ICT)",
            "expirationDateValue": "Sun Dec 12 2117 00:00:00 GMT+0700 (ICT)",
            "channelId": "0500d7bb-3e6f-4e1d-90b1-34fc7406918c",
            "pbzBanner": [
              {
                "placements": {
                  "id": "dea8db9e-0917-4592-9534-3e4445945990",
                  "name": "Placement",
                  "sizeWidth": 300,
                  "sizeHeight": 300,
                  "startTime": "Mon Nov 21 2016 00:00:00 GMT+0700 (ICT)",
                  "endTime": "Tue Dec 12 2017 00:00:00 GMT+0700 (ICT)",
                  "weight": 1,
                  "description": "placement of Bong Da So",
                  "campaignId": "8f1c6b5e-2d75-4f92-907c-3e8f23db5787",
                  "status": "active",
                  "createdAt": "Mon Nov 21 2016 11:11:06 GMT+0700 (ICT)",
                  "updatedAt": "Mon Nov 21 2016 11:11:06 GMT+0700 (ICT)"
                }
              }
            ],
            "channel": {
              "id": "0500d7bb-3e6f-4e1d-90b1-34fc7406918c",
              "name": "Channel",
              "options": [
                {
                  "id": "9d007127-af35-487b-9233-d9c4472ccf10",
                  "type": "category",
                  "comparison": "==",
                  "value": "kinh-te,van-hoa"
                }
              ]
            },
            "createdAt": "Mon Nov 21 2016 11:11:06 GMT+0700 (ICT)",
            "updatedAt": "Mon Nov 21 2016 11:11:06 GMT+0700 (ICT)"
          }
        ]
      }
    });
    /* eslint-enable */
  });

  describe('when we need an ads response', () => {
    it('which should be an instance of class Data', () => {
      expect(response).to.be.an.instanceof(Data);
    });

    it('which should contains "data" attribute as an object', () => {
      expect(response)
        .to.have.property('data')
        .that.is.an('object');
    });
  });

  describe('when we have "data" attribute', () => {
    before(() => {
      data = response.data;
    });

    it('which should contains "banners" attribute as an array', () => {
      expect(data)
        .to.have.property('banners')
        .that.is.an('array');
    });

    it('and "banners" array must have at least one element', () => {
      expect(data.banners).to.has.length.of.at.least(1);
    });

    it('and all elements in "banners" must be "object" type', () => {
      data.banners.map(banner => expect(banner).to.be.an('object'));
    });
  });
});
