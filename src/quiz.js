//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var array = [5, 7, 10, 2, 4, 3, 6, 8, 1, 9];

// function sort(array) {
//   var min = 0;
//   var max = array.length - 1;
//   // var pivot_one = Math.floor(Math.random() * (max - min + 1)) + min;
//   var pivot_one = array.length;
//     for (var i = 0; i < pivot_one; i++) {
//         if (array[i] > array[pivot_one]){
//           var temp_idex = array[i];
//           array[i] = array[pivot_one];
//           array[pivot_one] = temp_idex;
//           console.log(array[i]);
//         } else {
//           var temp_idex2 = array[pivot_one];
//           array[pivot_one] = array[i];
//           array[i] = temp_idex2;
//           console.log(array[i]);
//         }
//     }
//     return array;
// }


var sort = function(array) {
  var len = array.length;
  var min = 0;
 var max = array.length - 1;
  if(len < 2) {
    return array;
  }
  var pivot = Math.floor(Math.random() * (max - min + 1)) + min;
  return merge(sort(array.slice(0,pivot)), sort(array.slice(pivot)));
};

var merge = function(left, right) {
  var result = [];
  while((left.length > 0) && (right.length > 0)) {
    if(left[0]> right[0]) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }

  result = result.concat(left, right);
  return result;
};


// var b = array[i];
// array[i] = array[pivot_one];
// array[pivot_one] = b


// var b = array[0];
// array[0] = array[5];
// array[5] = b