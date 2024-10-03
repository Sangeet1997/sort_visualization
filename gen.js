let l = 100;
let interval = 15;

//generate the bars
const barsContainer = document.getElementById('barsContainer');
const numberOfBars = l;

for (let i = 0; i < numberOfBars; i++) {
    const bar = document.createElement('span');
    bar.classList.add('bars');
    barsContainer.appendChild(bar);
}

// let test = document.querySelector(".test");
let bars = document.querySelectorAll(".bars");
let reset = document.querySelector(".reset");
let update = document.querySelector(".update");
let updateInterval = document.querySelector(".interval")
let sortb = document.querySelector(".sortb");
let sorti = document.querySelector(".sorti");
let sorts = document.querySelector(".sortm");
let shell = document.querySelector(".shell");
let cocktail = document.querySelector(".cocktail");
let counting = document.querySelector(".counting");
let radix = document.querySelector(".radix");
let sortMerge = document.querySelector(".merge");
let sortQuick = document.querySelector(".quick"); 
let play = document.querySelector(".play");



//function to await loop
function delayer(ms) {
    return new Promise(res => setTimeout(res, ms));
}

update.addEventListener("click",function(){
    interval = Number(updateInterval.value);
    //alert(interval);
});

let arr = [];

function randomize(){
    for(let i = 0;i<l;i++)
    {
        let x = 460;
        arr[i] = Math.ceil(Math.random()*x);
    }
}

async function setdelay()
{
    for(let i = 0;i<l;i++)
    {
        
        bars[i].style.backgroundColor = "green";
        
        await delayer(interval);
        
        
        bars[i].style.paddingTop = arr[i]+"px";
        bars[i].style.backgroundColor = "black";
        
    }
}

randomize();
setdelay();
console.log(arr);

reset.addEventListener("click",function(){
    randomize();
    setdelay();
    playSound();
    console.log(arr);
});

async function playSound(){
    for(let i = 0;i<l;i++)
    {
        
        bars[i].style.backgroundColor = "green";

        playTone(arr[i]);
        await delayer(interval);
        
        bars[i].style.backgroundColor = "black";
        
    }
}

play.addEventListener("click",playSound);

async function bubble()
{
    for(let i = 0;i<l;i++)
    {
        for(let j = 0;j<l-i-1;j++)
        {
            bars[j].style.backgroundColor = "green";
            bars[j+1].style.backgroundColor = "green";
            playTone(arr[j]);
            await delayer(interval);
            if(arr[j]>arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                
            }
            bars[j].style.paddingTop = arr[j]+"px";
            bars[j+1].style.paddingTop = arr[j+1]+"px";
            bars[j].style.backgroundColor = "black";
            bars[j+1].style.backgroundColor = "black";
            
        }
    }
    playSound();
}
sortb.addEventListener("click",bubble);

async function insertion()
{
    for(let i = 1;i<l;i++)
    {
        let ele = arr[i];
        let j = i-1;
        bars[i].style.backgroundColor = "red";
        bars[j].style.backgroundColor = "red";
        while (j >= 0 && arr[j] > ele) 
        {
            
            bars[j].style.backgroundColor = "red";
            playTone(arr[j]);
            await delayer(interval); 

            arr[j + 1] = arr[j];  
            j = j - 1;
            bars[j+2].style.paddingTop = arr[j+2]+"px";
            bars[j+1].style.backgroundColor = "black";
            
            
        }  
        arr[j + 1] = ele;
        bars[j+1].style.paddingTop = ele+"px";
        bars[j+1].style.backgroundColor = "black";
        bars[i].style.backgroundColor = "black";
        if(j>=0)
            bars[j].style.backgroundColor = "black";
    }
    playSound();
}
sorti.addEventListener("click",insertion);

async function selection(){
    for(let i = 0;i<l-1;i++)
    {
        let minp = i;
        bars[i].style.backgroundColor = "brown";
        for(let j = i+1;j<l;j++)
        {
            bars[j].style.backgroundColor = "cyan";
            playTone(arr[j]);
            await delayer(interval);
            if(arr[j]<arr[minp]){
                
                bars[minp].style.backgroundColor = "black";
                minp = j;
                bars[minp].style.backgroundColor = "brown";
                bars[i].style.backgroundColor = "black";
            }
            else
                bars[j].style.backgroundColor = "black";
        }
        let temp = arr[i];
        arr[i] = arr[minp];
        arr[minp] = temp;
        bars[i].style.paddingTop = arr[i]+"px";
        bars[minp].style.paddingTop = arr[minp]+"px";
        bars[minp].style.backgroundColor = "black";
    }
    playSound();
}
sorts.addEventListener("click",selection);

async function shell_sort(){
    
    for(let gap = Math.floor(l/2);gap>0;gap = Math.floor(gap/2))
    {
        for(let i = gap;i<l;i++)
        {
            let temp = arr[i];     
            let j;
            
            for(let k = i-gap;k<=i;k++)
                bars[k].style.backgroundColor = "grey";
            bars[i-gap].style.backgroundColor = "pink";
            bars[i].style.backgroundColor = "pink";
            playTone(temp);
            await delayer(interval*3);
            for(let k = i-gap;k<=i;k++)
                bars[k].style.backgroundColor = "black";

            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap){
                
                for(let k = j-gap;k<=j;k++)
                    bars[k].style.backgroundColor = "grey";
                bars[j-gap].style.backgroundColor = "pink";
                bars[j].style.backgroundColor = "pink";

                await delayer(interval*3);
                arr[j] = arr[j - gap];

                for(let k = j-gap;k<=j;k++)
                    bars[k].style.backgroundColor = "black";
                bars[j].style.paddingTop = arr[j]+"px";
            }     
            arr[j] = temp;
            bars[j].style.paddingTop = arr[j]+"px";
        }
    }
    playSound();
}
shell.addEventListener("click",shell_sort);

async function cocktail_sort(){
    let start = 0;
    let end = l-1;
    let i = 0;
    while(start<=end)
    {
        if(i%2==0)
        {
            for(let j = start;j<end;j++)
            {
                bars[j].style.backgroundColor = "purple";
                bars[j+1].style.backgroundColor = "purple";
                playTone(arr[j]);
                await delayer(interval);

                if(arr[j]>arr[j+1])
                {
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
                bars[j].style.backgroundColor = "black";
                bars[j+1].style.backgroundColor = "black";
                bars[j].style.paddingTop = arr[j]+"px";
                bars[j+1].style.paddingTop = arr[j+1]+"px";
            }
            end--;
            i++;
        }
        else
        {
            for(let j = end;j>start;j--)
            {
                bars[j].style.backgroundColor = "purple";
                bars[j-1].style.backgroundColor = "purple";
                playTone(arr[j]);
                await delayer(interval);

                if(arr[j]<arr[j-1])
                {
                    temp = arr[j];
                    arr[j] = arr[j-1];
                    arr[j-1] = temp;
                }
                bars[j].style.backgroundColor = "black";
                bars[j-1].style.backgroundColor = "black";
                bars[j].style.paddingTop = arr[j]+"px";
                bars[j-1].style.paddingTop = arr[j-1]+"px";
            }
            start++;
            i++;
        }
    }
    playSound();
}
cocktail.addEventListener("click",cocktail_sort);

async function counting_sort(){
    let arr2 = [];
    for(let i = 0;i<=460;i++)
        arr2[i] = 0;

    for(let i = 0;i<l;i++){
        arr2[arr[i]]++;

        bars[i].style.backgroundColor = "yellow";
        playTone(arr[i]);
        await delayer(interval);
        bars[i].style.backgroundColor = "black";

    }

    for(let i = 1;i<=460;i++)
        arr2[i]=arr2[i-1]+arr2[i];


    let arr3 = [];
    let j = 0;
    for(let i = 0;i<l;i++)
    {
        
        let val = arr2[arr[i]];
        arr3[val] = arr[i];
        arr2[arr[i]]--;

        bars[val-1].style.backgroundColor = "yellow";
        playTone(arr[i]);
        await delayer(interval);

        bars[val-1].style.paddingTop = arr[i]+"px";
        bars[val-1].style.backgroundColor = "brown";
        playTone(arr[i]);
        await delayer(interval);
        
        bars[val-1].style.backgroundColor = "black";
    }

    for(let i = 0;i<l;i++)
        arr[i] = arr3[i+1];
    playSound();
}
counting.addEventListener("click",counting_sort);

async function radix_sort(){
    for(let i = 0;i<3;i++)
    {
        let arr2 = [];
        for(let j = 0;j<10;j++)
            arr2[j] = 0;
        
        for(let j = 0;j<l;j++)
        {
            bars[j].style.backgroundColor = "blue";
            playTone(arr[j]);
            await delayer(interval);
            let digit = Math.floor(arr[j]/(10**i))%10;
            arr2[digit]++;
            bars[j].style.backgroundColor = "black";
        }

        for(let j = 1;j<10;j++)
            arr2[j] = arr2[j]+arr2[j-1];

        let arr3 = [];
        for(let j = l-1;j>=0;j--)
        {
            let digit = Math.floor(arr[j]/(10**i))%10;
            let value = arr2[digit];
            arr3[value] = arr[j];
            arr2[digit]--;
        }

        for(let j = 0;j<l;j++)
        {
            bars[j].style.backgroundColor = "blue";
            arr[j] = arr3[j+1];

            playTone(arr[j]);
            await delayer(interval);
            bars[j].style.paddingTop = arr[j]+"px";
            bars[j].style.backgroundColor = "violet";

            playTone(arr[j]);
            await delayer(interval);
            bars[j].style.backgroundColor = "black";
        }
        
    }
    playSound();
}
radix.addEventListener("click",radix_sort);

async function mergeSort(left, right) {
    if (left >= right) return;
    
    const mid = Math.floor((left + right) / 2);
    
    await mergeSort(left, mid);
    await mergeSort(mid + 1, right);
    await merge(left, mid, right);
}

async function merge(left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let leftArr = new Array(n1);
    let rightArr = new Array(n2);

    for (let i = 0; i < n1; i++) {
        leftArr[i] = arr[left + i];
        bars[left + i].style.backgroundColor = "orange";
    }
    
    for (let i = 0; i < n2; i++) {
        rightArr[i] = arr[mid + 1 + i];
        bars[mid + 1 + i].style.backgroundColor = "lightgreen";  
    }

    // playTone(arr[mid]);
    await delayer(interval * 2);

    let i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }

        bars[k].style.paddingTop = arr[k] + "px";  
        bars[k].style.backgroundColor = "black";
        playTone(arr[k]);
        k++;
        // playTone(arr[k]);
        await delayer(interval);
    }

    while (i < n1) {
        arr[k] = leftArr[i];
        bars[k].style.paddingTop = arr[k] + "px";
        bars[k].style.backgroundColor = "black";
        i++;
        playTone(arr[k]);
        k++;
        // playTone(arr[k]);
        await delayer(interval);
    }

    while (j < n2) {
        arr[k] = rightArr[j];
        bars[k].style.paddingTop = arr[k] + "px";
        bars[k].style.backgroundColor = "black";
        j++;
        playTone(arr[k]);
        k++;
        // playTone(arr[k]);
        await delayer(interval);
    }
}

 
sortMerge.addEventListener("click", async function() {
    await mergeSort(0, l - 1); 
    playSound();
});

async function quickSort(low, high) {
    if (low < high) {
        let pi = await partition(low, high);  
        await quickSort(low, pi - 1);
        await quickSort(pi + 1, high);
    }
}

async function partition(low, high) {
    let pivot = arr[high];
    bars[high].style.backgroundColor = "red";
    let i = low - 1;

    for (let j = low; j < high; j++) {
        bars[j].style.backgroundColor = "yellow";
        playTone(arr[j]);
        await delayer(interval);

        if (arr[j] < pivot) {
            i++;
            
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            bars[i].style.paddingTop = arr[i] + "px";
            bars[j].style.paddingTop = arr[j] + "px";
        }
        bars[j].style.backgroundColor = "black";
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    bars[i + 1].style.paddingTop = arr[i + 1] + "px";
    bars[high].style.paddingTop = arr[high] + "px";
    bars[high].style.backgroundColor = "black";
    playTone(arr[i + 1]);
    await delayer(interval);

    return i + 1;
}

sortQuick.addEventListener("click", async function() {
    await quickSort(0, l - 1);
    playSound();
});

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const gainNode = audioCtx.createGain();

gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);

gainNode.connect(audioCtx.destination);

function playTone(frequency) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime((frequency*10), audioCtx.currentTime);

    // oscillator.connect(audioCtx.destination);

    oscillator.connect(gainNode);

    oscillator.start();

    oscillator.stop(audioCtx.currentTime + interval / 1000);
}

