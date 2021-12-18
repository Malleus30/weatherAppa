'use strict'

import {UI} from './view.js'

let addedLocationsArray =[];

let globalCityName;

  UI.btn.addEventListener('click',change);
  UI.cloudPicture.style.display= 'none';
  UI.heart_picture.style.display = 'none';
  UI.heart_picture.addEventListener('click', addLocationFunc);

  addDeleteElement();


  function addDeleteElement(){
    const deleteLocationIcon = document.querySelectorAll('.close');
   
  deleteLocationIcon.forEach(function(btn){
    btn.addEventListener('click',deleteLocationFunc);
})
}

  function deleteLocationFunc(){

  this.parentElement.remove();
  }
  



function change(){


  if(event.target.classList.contains('nowP'))  show(showNow);
  

  if(event.target.classList.contains('detailsP'))  show(showDetails);
  

  if(event.target.classList.contains('forecastP'))  show(showForecast);
  
}



function show(id){

showNow.style.display = 'none';
showDetails.style.display = 'none';
showForecast.style.display = 'none';
  
   id.style.display='block'
}





 inp.addEventListener('keydown', (e) =>{
    
  
     if(e.keyCode===13){

        const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
        let cityName = e.target.value;                                          
        const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
         

        UI.heart_picture.style.display= 'block';
       
        
        fetch(url)

        .then((response) =>{

            return response.json();    
        })
        .then((data) =>{
          
          if(data.weather[0].main === 'Clear') {
                UI.cloudPicture.style.display='none';
          }else{
              UI.cloudPicture.style.display ='block';
          }
            UI.bigNumber.textContent = Math.round(data.main.temp-273);
            UI.bigNumber.textContent +='°'; 


            UI.smalSityName.textContent = data.name;

            globalCityName = UI.smalSityName.textContent;
            
        })
        .catch(error => alert(error.message))
        
        showNow.style.display = 'block';
        showDetails.style.display = 'none';
        showForecast.style.display = 'none';
     } 
 });






 function addLocationFunc(){

  let doppelGanger = false;

  addedLocationsArray.forEach(elem =>{

    if(elem === globalCityName) doppelGanger = true;
  })

  if(doppelGanger) return;


  let newLocation = document.createElement('div');

  newLocation.className = 'faforedPlace';
  
  newLocation.innerHTML = ` <p class="text">${globalCityName}</p>
  <div class="close">
      <span class="line_rotate45"></span>
      <span class="line_rotate45"></span>
  </div>`

 
  UI.displayRightDiv.append(newLocation);

  addedLocationsArray.push(globalCityName);

  addDeleteElement();
}








 