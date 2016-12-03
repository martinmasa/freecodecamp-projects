function convertToRoman(num) {

  var i = num;
  var thousands = 0;
  var hundreds = 0;
  var tens = 0;
  var ones = 0;

  var rArray = {
    ceedees : ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    exels   : ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    eyevees : ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  };

  var roman = [];

  if (i >= 1000) {
    thousands = Math.floor(i/1000);
    var ems = '';

    for (var j = 1; j <= thousands; j++) {
      ems += 'M';
    }

    roman.push(ems);
    i -=  (thousands * 1000);
  }

  numArr = (i + "").split('');



  if (i >= 100) {
    hundreds = Math.floor(i/100);
    roman.push(rArray.ceedees[hundreds]);
    i -= (hundreds * 100);
  }

  if (i >= 10) {
    tens = Math.floor(i/10);
    roman.push(rArray.exels[tens]);
    i -= (tens * 10);
  }

  if (i >= 0) {
    ones = i;
    roman.push(rArray.eyevees[ones]);
  }

  console.log(num, thousands, hundreds, tens, ones);

  return roman.join('');
}

convertToRoman(36);





function where(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < collection.length; i++) {
    item = collection[i];
    itemHasAllProps = true;

    for (var j = 0; j < sourceKeys.length; j++) {
      var sourceKey = sourceKeys[j];
      var sourceVal = source[sourceKeys[j]];
      var itemHasProp = item.hasOwnProperty(sourceKey);

      if(!(itemHasProp && item[sourceKey] === sourceVal)) {
        itemHasAllProps = false;
        break;
      }
    }

    if (itemHasAllProps) {
      arr.push(item);
    }
  }

  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });






function steamroller(arr) {

  var result = [];

  function flatten(val) {

    if (Array.isArray(val)) {
      for (var i = 0; i < val.length; i++) {
        flatten(val[i]);
      }
    }
    else {
      return result.push(val);
    }
  }

  flatten(arr);

  // I'm a steamroller, baby
  return result;
}

steamroller([1, [2], [3, [[4]]]]);





function binaryAgent(str) {

  var strArray = str.split(' ');
  var result = '';
  var decimalValues = [128, 64, 32, 16, 8, 4, 2, 1];
  var decodedBits = {};

  function decode(bits) {

    var val = 0;

    if(decodedBits[bits]){
      return decodedBits[bits];
    }

    bits.split('').map(function (bit, index) {
      result += parseInt(bit) ? decimalValues[index] : 0;
    });

    decodedBits[bits] = String.fromCharCode(result);
    return decodedBits[bits];
  }

  str.split(' ').map( function (item, index) {
    result += decode(item);
  });

  console.log(result);
  return result;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


function add() {

  var a = arguments[0];
  var b = arguments[1];
  
  if(typeof a !== 'number' || (typeof b !== 'undefined' && typeof b !== 'number')) {
    return undefined;
  }

  if(b){
    return a + b;
  }
  else {
    return function (x) {

      if(typeof x !== 'number') {
        return undefined;
      }

      return a + x;
    };
  }

}

add(2,3);






function every(collection, pre) {
  // Is everyone being true?
  for (var i = 0; i < collection.length; i++) {
    if(!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
      return false;
    }
  }
  return true;
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
