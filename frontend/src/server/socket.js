//동기식 방식 ( async await 사용!!!!!)
import axios from 'axios';
//import Cookies from 'js-cookie';

export const fetchSignup = async (test) => {
  console.log(test)
  
  //하는중 원래는 아래쪽
  axios.post('http://192.168.0.57:3000/Signup', test)
    .then(function (response) {
        console.log(response.data.result)
        if(response.data.result === 'success')
            return 'success';
        else
            return 'fail';
    })
    .catch(function (error) {
        console.log(error);
        return 'fail';
    });
};