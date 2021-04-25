const arr = [15,5,1,8,2,6,3,4,11,7,24];

function quickSort(arr, low, high){
    if(low< high){
        let pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr,pi+1, high);
    }
}

function partition(arr, low, high){
    let i=low-1, j=low, pivot=arr[high];
    while(j<high){
        if(arr[j]<=pivot){
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        j++;
    }
    [arr[i+1], arr[high]] = [pivot, arr[i+1]];
    return i+1;
}

quickSort(arr, 0, arr.length-1);
console.log(arr);