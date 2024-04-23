import {setItem} from './utils/storage';
import "./index.scss";


document.getElementById("btnSayHello").addEventListener("click", ()=>{
    alert("Hello Webpack1");

    const arr = [123,432,532,53,3,64];
    console.log(getArray(...arr));

    setItem("token","944213-5312-1232-5342-2134-6454");
});


const getArray = (arr)=>{
    return arr.filter((x)=>x>100).reduce((t,x)=>t+x,0);
}



