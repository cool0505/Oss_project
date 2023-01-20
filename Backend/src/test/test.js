import bcrypt from "bcrypt";

const PW = 'tasdfasdfasfasfd';
const encryptedPW = bcrypt.hashSync(PW, 10);


bcrypt.compare('hello', '$2b$10$g0Yw9cmhEFi4dODYCOtH9.txNyEQQzSlm6dPx6cSZgt.F8o7cli4i', (err, same) => {
    if(same) {
        console.log("true!");
    }
});

function getWeather(lat, lon) {
    const API_KEY = `test`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`) 
    // 올바른 URL로 서버에 요청
    .then(function(response){ // 첫번째 인자는 response로 받는다 
        return response.json(); 
        // 요청에 대한 응답을 JSON형태로 파싱
    })
    .then(function(json) {
        const temperature = json.main.temp;
        const place = json.name;
        console.log(`${Math.floor(temperature)} ${place}`);
        //js데이터를 body에 보여준다 
    })
}

getWeather(37.460027, 126.441284);
