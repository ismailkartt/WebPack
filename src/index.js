import {setItem} from './utils/storage';
import "./index.scss";
import "bootstrap";

document.getElementById("btnSayHello").addEventListener("click", ()=>{
    alert("Hello Webpack");
    setItem("token","234213-2312-1232-5342-2134-6454");
});



