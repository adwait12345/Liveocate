var t = 0;
function play1() {
var mp3 = '<source src="audioalert.mpeg" type="audio/mpeg">';
document.getElementById("sound").innerHTML = 
'<audio autoplay="autoplay">' + mp3 + "</audio>";
    return null
}
function play2() {
var mp4 = '<source src="modeisActive.mpeg" type="audio/mpeg">';
document.getElementById("sound2").innerHTML = 
'<audio autoplay="autoplay">' + mp4 + "</audio>";
    return null
}
if('geolocation' in navigator){
console.log('geolocation is available')

navigator.geolocation.watchPosition(position => {
const lat = position.coords.latitude;
const lng = position.coords.longitude;
var spd = position.coords.speed;
document.getElementById('latitude').textContent = lat;
document.getElementById('longitude').textContent = lng;
document.getElementById('speed').textContent = spd;
console.log(position);
if(spd > 7 && t<1 ){
       play2();
    t++;
}
else if( spd<7)
{
    t=0;
}
});
}
else {
console.log('geolocation is not available')
}
document.addEventListener('visibilitychange', function() {
if(spd > 7){
if (document.visibilityState == 'hidden') { 
play1();
}
}
});
