var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var aud = document.getElementById("au");
var maxVu = document.getElementById("max");



const displayDuration = () => {
    maxVu.textContent = calculateTime(aud.duration);
}

const setSliderMax = () => {
    slider.max = Math.floor(aud.duration);
}



var state = aud.readyState;
if(state > 0){
    displayDuration();
    setSliderMax();
}


slider.oninput = function() {
  
  var seek = (aud.currentTime / aud.duration ) * 100;
   
  aud.currentTime = this.value;
}

aud.ontimeupdate = function(){
 slider.value = Math.floor(aud.currentTime);
  output.textContent = calculateTime(slider.value);
 
  var maxvi = aud.duration / 60;
  var nmax = maxvi.toFixed(1);
  
} 

 var button_off_on = document.getElementById("btn-p-off");
var png_btn = document.getElementById("btn-png");

function play(auth) {
if (auth == 1){ 
    aud.play();
  button_off_on.setAttribute( "onClick", "play(0)" );
  png_btn.src = "off.png";
}else if (auth == 0){
    aud.pause();
  button_off_on.setAttribute( "onClick", "play(1)" );
  png_btn.src = "on.png";
}
}


const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}













//if (au.ended){
//    button_off_on.setAttribute( "onClick", "play(0)" );
//    png_btn.src = "https://cdn-icons-png.flaticon.com/128/786/786279.png"; 
//   au.play();
//}else{
//    button_off_on.setAttribute( "onClick", "play(1)" );
//   png_btn.src = "https://cdn-icons-png.flaticon.com/128/702/702132.png"; 
//   au.pause();
//}

