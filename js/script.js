const button=document.getElementById("btn")
const input=document.getElementById("input_id");
const tempdiv=document.getElementById("temp");
const imgs=document.getElementById("imageplace");
// const otherinfo=document.getElementById("otherinfo")
const cityname=document.getElementById("cityname")
const date=document.getElementById("date")
const faren=document.getElementById("faren")
const ing=document.getElementById("ing")
const clear=document.getElementById("clear")


async function fechapi(inname) {
    const promis= await fetch(`http://api.weatherapi.com/v1/current.json?key=50b043a23af748199d2150903240806&q=${inname}&aqi=yes
`)
    console.log(promis);
    const data=await promis.json();
    return data;
}
// const inputname=input.value;
clear.addEventListener("click",()=>{
    input.value=" "
})


button.addEventListener("click", async()=>{
    // console.log(inputname);
    const inputdata=input.value;
    const applydata=  await fechapi(inputdata);
    tempdiv.innerText=`${applydata.current.temp_c}C`;
    date.innerText=`Time:${applydata.location.localtime}`
    faren.innerText=`Fahrenheit :${applydata.current.temp_f}F`

    cityname.innerText=`${input.value} in ${applydata.location.country}`
    // console.log(applydata.location.lat);
    // imageplace.src="image/clear.png";

    if (applydata.current.temp_c>30) {
        var v=`image/clear.png `
        ing.src=v;
    }
    else if (applydata.current.temp_c<17) {
        var v=`image/clouds.png `
        ing.src=v;
    }
    else if (applydata.current.temp_c<0) {
        var v=`image/snow.png `
        ing.src=v;
    }
    else if (applydata.current.temp_c>17 && applydata.current.temp_c<23) {
        var v=`image/rain.png `
        ing.src=v;
    }

    // contener.style.height="auto";
    // seach_bar.style.margin-top=0;




    
});