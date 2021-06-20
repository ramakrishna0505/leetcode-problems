function selectionSort(arr){
  for(let i=0;i<arr.length;i++){
    let min = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j] < arr[min]) min = j;
    }
    if(i!==min) [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  console.log(arr);
}


insertionSort([6,5,2,8,3,1,7,9]);


function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    let isSwapped = false;
    for(let j=0;j<arr.length-i;j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        isSwapped = true;
      } 
    }
    if(!isSwapped){
      break;
    }
  }
  console.log(arr);
}

function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let curr = arr[i];
    let j=i-1;
    while(j>=0 && arr[j] > curr){
      arr[j+1] = arr[j]
      j--;
    }
    arr[j+1] = curr;
  }
  console.log(arr)
}