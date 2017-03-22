/**
 * Created by tlm on 14/03/2017.
 */
const util = {
  convertArea(height, width) {
    if (width === 1160) {
      return 2;
    }
    if (height === 560) {
      return 4;
    }
    if (width === 336 && height <= 560) {
      return height / 140;
    }
    if (height === 90 && width <= 1160) {
      return width / 468;
    }
    return 1;
  },

  // flatten array
  flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? util.flatten(val) : val), []);
  },

  // Clone Array that don't reference to Array copy.
  cloneArray(arr) {
    let copy;
    if (arr === null || typeof arr !== 'object') return arr;

    // Handle Array
    if (arr instanceof Array) {
      copy = [];
      for (let i = 0, len = arr.length; i < len; i += 1) {
        copy[i] = util.cloneArray(arr[i]);
      }
      return copy;
    }

    throw new Error('Unable to copy array!.');
  },

  permuteArray(array) {
    const permArr = [];
    const usedChars = [];

    const UniqueItem = (arr) => {
      const n = {};
      const r = [];
      for (let i = 0; i < arr.length; i += 1) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }
      return r;
    };

    function permute(input) {
      let i;
      let ch;
      for (i = 0; i < input.length; i += 1) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length === 0) {
          permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
      return UniqueItem(permArr);
    }

    return permute(array);
  },

  ComputeShare(FreeAreaData, numberPlacesData) {
    // save output result
    let shares = [];
    // save a share which is computed
    let share = [];
    let count = 0;
    let nps = 0;

    function CreateShare(FreeAreasDt, numberPlacesDt) {
      let FreeArea = FreeAreasDt;
      let numberPlaces = numberPlacesDt;

      while (FreeArea > 0) {
        const PlaceArea = (FreeArea - (FreeArea % numberPlaces)) / numberPlaces;
        if (count === 0) {
          nps = numberPlacesData;
        }
        count += 1;
        if (PlaceArea > 1 && (numberPlaces !== 1)) {
          const PlaceAreaTmp = PlaceArea;
          let temp = 1;
          const thisLever = [];
          while (temp < PlaceAreaTmp) {
            if (thisLever.indexOf(temp) === -1) {
              let FreeAreaTemp = FreeArea;
              let numberPlacesTemp = numberPlaces;

              thisLever.push(temp);
              share.push(temp);
              numberPlacesTemp -= 1;
              FreeAreaTemp -= temp;
              CreateShare(FreeAreaTemp, numberPlacesTemp, share);
              temp += 1;
            }
          }
        }

        numberPlaces -= 1;
        FreeArea -= PlaceArea;
        share.push(PlaceArea);
        if (numberPlaces === 0) {
          const numberofCommon = nps - share.length;
          if (numberofCommon > 0) {
            const shareTemp = util.cloneArray(shares.reduce((x, z) => z, 0));
            shareTemp.splice(numberofCommon);
            shareTemp.push(share);
            share = util.flatten(shareTemp);
          }
          shares.push(share);
          share = [];
        }
      }
    }

    CreateShare(FreeAreaData, numberPlacesData);

    shares.reduce((acc, sh) => { // eslint-disable-line array-callback-return
      shares = shares.concat(util.permuteArray(sh));
      shares.shift();
    }, 0);
    return (shares);
  },

  // filter Share base on Campaign place location
  filterShareAfterCompute(shares, ...OrderArea) {
    let sharesTemp = shares;
    while (OrderArea.length > 0) {
      sharesTemp = sharesTemp.filter(share => share.reduce((acc2, placeArea, index) => {
        if (OrderArea[0].order === index && OrderArea[0].area === placeArea) {
          return true || acc2;
        }
        return false || acc2;
      }, 0));
      OrderArea.shift();
    }
    return sharesTemp;
  },
  // convert location value (1->101) to location name
  convertLocation(locationValue) {
    locationValue = parseInt(locationValue, 10); // eslint-disable-line no-param-reassign
    const LocationDictionnary = {
      '-1': 'Lỗi service',
      0: 'Chưa xác định',
      1: 'Miền Bắc',
      4: 'Hà Nội',
      7: 'Hải Phòng',
      8: 'Bắc Cạn',
      9: 'Bắc Giang',
      10: 'Bắc Ninh',
      11: 'Cao Bằng',
      12: 'Điện Biên',
      13: 'Hà Giang',
      14: 'Hà Nam',
      15: 'Hải Dương',
      16: 'Hoà Bình',
      17: 'Hưng Yên',
      18: 'Lai Châu',
      19: 'Lạng Sơn',
      20: 'Lào Cai',
      21: 'Nam Định',
      22: 'Ninh Bình',
      23: 'Phú Thọ',
      24: 'Quảng Ninh',
      25: 'Sơn La',
      26: 'Thái Bình',
      27: 'Thái Nguyên',
      28: 'Tuyên Quang',
      29: 'Vĩnh Phúc',
      30: 'Yên Bái ',
      2: 'Miền Trung',
      31: 'Đà Nẵng',
      32: 'Bình Định',
      33: 'Bình Phước',
      34: 'Bình Thuận',
      35: 'Đắk Lắk',
      36: 'Đắk Nông',
      37: 'Gia Lai',
      38: 'Hà Tĩnh',
      39: 'Nha Trang - Khánh Hoà',
      40: 'Kontum',
      41: 'Lâm Đồng',
      42: 'Nghệ An',
      43: 'Ninh Thuận',
      44: 'Phú Yên',
      45: 'Quảng Bình',
      46: 'Quảng Nam',
      47: 'Quảng Ngãi',
      48: 'Quảng Trị',
      49: 'Thanh Hoá',
      50: 'Thừa Thiên Huế',
      51: 'Vinh',
      3: 'Miền Nam',
      5: 'HCM',
      52: 'Bình Dương',
      53: 'Cần Thơ',
      54: 'An Giang',
      55: 'Bà Rịa - Vũng Tàu',
      56: 'Bạc Liêu',
      57: 'Bến Tre',
      58: 'Cà Mau',
      59: 'Đồng Nai',
      60: 'Đồng Tháp',
      61: 'Hậu Giang',
      62: 'Kiên Giang',
      63: 'Long An',
      64: 'Sóc Trăng',
      65: 'Tây Ninh',
      66: 'Tiền Giang',
      67: 'Trà Vinh',
      68: 'Vĩnh Long',
      101: 'Nước ngoài',
    };
    const convertString = (string) => {
      let str = string;
      str = str.toLowerCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
      str = str.replace(/đ/g, 'd');
      str = str.replace(/\W+/g, ' ');
      str = str.replace(/\s/g, '');
      return str;
    };
    if ([1, 2, 3].indexOf(locationValue) !== -1) {
      return { R: convertString(LocationDictionnary[locationValue]), RC: '' };
    }
    if (locationValue === 4 || (locationValue <= 30 && locationValue >= 7)) {
      const northernCity = convertString(LocationDictionnary[locationValue]);
      return { R: 'northern', RC: northernCity };
    }
    if (locationValue >= 31 && locationValue <= 51) {
      const centerCity = convertString(LocationDictionnary[locationValue]);
      return { R: 'center', RC: centerCity };
    }
    if (locationValue === 5 || (locationValue >= 52 && locationValue <= 68)) {
      const southernCity = convertString(LocationDictionnary[locationValue]);
      return { R: 'southern', RC: southernCity };
    }
    if (locationValue >= 100) {
      const foreignCity = convertString(LocationDictionnary[locationValue]);
      return { R: 'foreign', RC: foreignCity };
    }

    const detail = LocationDictionnary[locationValue];
    return { R: detail, RC: detail };
  },
};

export default util;
