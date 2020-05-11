module.exports =  class Sort{
  constructor(){}
  //bubble sort
  bubble(arr=[]){
      let swapFlag;
      for(var i = arr.length; i > 0; i--){
        swapFlag = true;
        for(var j = 0; j < i - 1; j++){
          if(arr[j] > arr[j+1]){
              [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            swapFlag = false;         
          }
        }
        if(swapFlag) break;
      }
      return arr;
  }

  //selection sort
  selection(arr=[]) {
      const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

      for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[lowest] > arr[j]) {
            lowest = j;
          }
        }
        if (i !== lowest) swap(arr, i, lowest);
      }

      return arr;
  }

  //insertion sort
  insertion(arr=[]){
	var current;
    for(var i = 1; i < arr.length; i++){
        current = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = current;
    }
    return arr;
  }

  //merge sort
  merge(arr=[]){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = this.merge(arr.slice(0,mid));
    let right = this.merge(arr.slice(mid));
    return this.mergeArray(left, right);
  }
  mergeArray(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
  }

  //Quick sort
  quick(arr=[], left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = this.pivot(arr, left, right) //3
        //left
        this.quick(arr,left,pivotIndex-1);
        //right
        this.quick(arr,pivotIndex+1,right);
      }
     return arr;
   }
   
   pivot(arr, start = 0, end = arr.length - 1) {
      const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };

      // We are assuming the pivot is always the first element
      let pivot = arr[start];
      let swapIdx = start;

      for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
          swapIdx++;
          swap(arr, swapIdx, i);
        }
      }

      // Swap the pivot from the start the swapPoint
      swap(arr, start, swapIdx);
      return swapIdx;
   }

}