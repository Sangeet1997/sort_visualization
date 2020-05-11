let l = 100;
let interval = 3;

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
    console.log(arr);
});

async function bubble()
{
    for(let i = 0;i<l;i++)
    {
        for(let j = 0;j<l-i-1;j++)
        {
            bars[j].style.backgroundColor = "green";
            bars[j+1].style.backgroundColor = "green";
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
}
cocktail.addEventListener("click",cocktail_sort);

async function counting_sort(){
    let arr2 = [];
    for(let i = 0;i<=460;i++)
        arr2[i] = 0;

    for(let i = 0;i<l;i++){
        arr2[arr[i]]++;

        bars[i].style.backgroundColor = "yellow";
        await delayer(interval);
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
        await delayer(interval*30);

        bars[val-1].style.paddingTop = arr[i]+"px";
        bars[val-1].style.backgroundColor = "brown";
        await delayer(interval*30);
        
        bars[val-1].style.backgroundColor = "black";
    }

    for(let i = 0;i<l;i++)
        arr[i] = arr3[i+1];
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

            await delayer(interval*10);
            bars[j].style.paddingTop = arr[j]+"px";
            bars[j].style.backgroundColor = "violet";

            await delayer(interval*10);
            bars[j].style.backgroundColor = "black";
        }
        
    }
}
radix.addEventListener("click",radix_sort);


