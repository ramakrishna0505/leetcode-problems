let initial = 0
let next = 1;
let series = [initial,next];
for(let i=2;i<10;i++){
    const temp = next;
    next+=initial;
    series[i]=next;
    initial = temp;
}