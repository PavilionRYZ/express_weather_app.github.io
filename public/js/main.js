const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const datahide=document.querySelector('.middle_layer');
const api_Key ="48250a30fc8f17ab3356c57c8904f9a2";



const getInfo = async (event)=>{
   event.preventDefault();
   let cityVal=cityName.value;  
   if(cityVal === ""){
         cityName.innerText=`Enter a valid city name`;
         datahide.classList.add('data_hide');
   }else{
    try{
        let url=`api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${api_Key}`
   const response =await fetch(url);
   const data =await response.json();
   console.log(response);
   const arrData=[data];
   city_name.innerText=`${arrData[0].name},${arrData.sys.country}`;
   temp.innerText=arrData[0].main.temp;
   const tempMood=arrData[0].weather[0].main;
   //condition to check sunny or cloudy  {
    if(tempMood == 'clear'){
    temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i>";
    } else if (tempMood =="Clouds") {
     temp_status.innerHTML ="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
    } else if (tempMood== "Rain") { 
temp_status.innerHTML ="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";

    }else{
    temp_status.innerHTML ="<i class='fas fa-cloud' style='color: #f1f2f6; '></i>";
    }
    datahide.classList.aremove('data_hide');

    }catch{
        city_name.innerText=`Enter a valid city name`;
        datahide.classList.add('data_hide');
        
    }
   }
}

submitBtn.addEventListener('click',getInfo);
