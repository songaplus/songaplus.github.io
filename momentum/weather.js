// open weather map url
// https://api.openweathermap.org/data/2.5/weather?lat=37.5550456&lon=126.966797&appid=0079a50bc598aa2d84cf1dc98c0f8621
const API_KEY ='0079a50bc598aa2d84cf1dc98c0f8621';
function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(`You live in, ${lat}, ${lon}`);
  // fetch 부분은 youtube 강의에서 좀더 설명을 듣도록. 여기선 많이 점프한 기능
  // fetch이후 서버에서 데이터 받아와(response) data 저장
  fetch(url).then(response  =>response.json())
  .then(data =>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = `날씨 : ${data.weather[0].main} / 평균 ${data.main.temp} ˚C`;
    city.innerText = data.name;
    console.log(data.name, data.weather[0].main); 
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);