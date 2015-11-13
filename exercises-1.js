

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    var length = array.length;
    for (var i=0;i<length;i++){
      callback(array[i],i,array);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
    var total=0;
    forEach(args, function (number) {
      total+=number;
    });
    return total;
  }



console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var total=0;
    forEach(args, function (number) {
      total+=number;
    });
    return total/args.length;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var largest=args[0];
    forEach(args,function(number){
      if (number>largest){
        largest=number;
      }
    })
    return largest;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    var longestStr="";
    forEach(args,function(string){
      if (string.length>longestStr.length){
        longestStr=string;
      }
    })
    return longestStr;
}


 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

function equalArrays(arr1, arr2){
  if (arr1.length != arr2.length){
    return false;
  }
  for (var i=0;i<arr1.length;i++){
    if (arr1[i]!=arr2[i]){
      return false;
    }
  }
  return true;
}

// .sort()
console.assert( equalArrays([3,6,2,6,8].sort(),[2,3,6,6,8]));

// .concat()

console.assert( equalArrays([1,2,3].concat([4,5,6]),[1,2,3,4,5,6]) );

// .indexOf()

console.assert([1,5,24,7,8,4,5].indexOf(5)===1);

// .split()
//.split is not an array function, but it is a string function, so i'll do that:
console.assert( equalArrays("sally is awesome".split(" "), ["sally","is","awesome"]));


// .join()
console.assert(["sally","is","awesome"].join()==="sally,is,awesome");

// .pop()
console.assert([1,2,4,5,6].pop()===6);

// .push()
var myArr = [1,2,3,4,5];
myArr.push(6);
console.assert( equalArrays(myArr,[1,2,3,4,5,6]));

// .slice()
var myArr= [1,2,3,4,5];
newArr=myArr.slice(2,4);
console.assert( equalArrays(newArr,[3,4]));

// .splice()
var myArr = [1,2,3,4,5];
myArr.splice(2,2);
console.assert( equalArrays(myArr,[1,2,5]));

// .shift()
var myArr= [1,2,3,4,5];
myArr.shift();
console.assert( equalArrays(myArr,[2,3,4,5]));

// .unshift()
var myArr= [2,3,4,5];
myArr.unshift(1);
console.assert( equalArrays(myArr,[1,2,3,4,5]));

// .filter()
function isOdd(number){
  if (number%2===1){
    return true;
  }
  return false;
}

myArr = [1,2,3,4,5];
newArr = myArr.filter(isOdd);
console.assert( equalArrays(newArr,[1,3,5]));

// .map()

function double(number){
  return number*2;
}

myArr = [1,2,3,4,5];
newArr = myArr.map(double);
console.assert( equalArrays(newArr,[2,4,6,8,10]));
