
function treeSum(array) {
  var element;
  var sum=0;
  for (var i=0; i<array.length;i++) { 
    element=array[i];
    if (typeof(element)=='object') {
      sum+=treeSum(element); 
    } else {
      sum+=element;
    }
  } return sum;
} 
console.log(treeSum([ 5, 7,[ 4, [2], 8, [1,3], 2 ],[ 9, [] ],1, 8]));


/*var newArray=(createNewArray([ 5, 7,[ 4, [2], 8, [1,3], 2 ],[ 9, [] ],1, 8]));
var sum=0;
for (i=0;i<=(newArray.length-1);i++) {
  sum+=newArray[i];
}
console.log(sum);

let sum=0;
function treeSum(array) {
  for (i=0; i<array.length;i++) { 
    if (typeof(array[i])=='object') {
      continue;
    } else {
      console.log(array[i]);
      sum+=array[i];
    }
  }return sum;
}
console.log(treeSum([ 5, 7,[ 4, [2], 8, [1,3], 2 ],[ 9, [] ],1, 8]));

function createNewArray(array) {
  var result=[];
  for (let elem of array) { 
    if (typeof elem=="object"){
      result = result.concat(createNewArray(elem));
    }else {
      result.push(elem);
    }
  }return result;  
}
   
/*let sum=0;
let i=0;
let array=[ 1,1,[1,1],1,1,1,1,1];
function treeSum(array) {
  if (array[i]=='object') {
   treeSum(array[i]);
  }else {
    i++;
  while (i<array.length) {
    treeSum(array);
  }return sum;}
}
console.log(treeSum(array));

/*function treeSum(array) {
  
  for (var i=0; i<=(array.length-1);i++) { 
    if (typeof array[i]=="object"){
      treeSum(array[i]);
    }else{
      sum+=array[i];
    }
  }return sum;

}

console.log(treeSum([1,[1,2],0,1,1,1]));*/