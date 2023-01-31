//동기식 방식 ( async await 사용!!!!!)
import axios from 'axios';
import user from './user';
//import Cookies from 'js-cookie';

export const fetchLogin = async (test) => {
  console.log(test)
  
  //하는중 원래는 아래쪽
   await axios.post('http://192.168.1.9:3000/login', test)
    .then(function (response) {
        user.User(response.data.id,response.data.sc,response.data.sc,response.data.sc,response.data.sc,response.data.sc)
        if(response.data.sc == '200')     
          return 'success'
        else
          return 'fail';
    })
    .catch(function (error) {
        console.log(error);
        return 'fail';
    }); 
    
  };
  export const fetchcheckId = async (test) => {
    console.log(test)
    
    //하는중 원래는 아래쪽
    await axios.post('http://192.168.1.9:3000/signup/check', test)
      .then(function (response) {
          console.log(response.data.sc)
          if(response.data.sc === '200'){
            console.log('sdfsdfsdf') 
              return 'success';
          }
          else
              return 'fail';
      })
      .catch(function (error) {
          console.log(error);
          return 'fail';
      });   
    };
    export const fetchSignup = async (test) => {
      console.log(test)
      
      //하는중 원래는 아래쪽
      axios.post('http://192.168.1.9:3000/signup/check', test)
        .then(function (response) {
            console.log(response.data.sc)
            if(response.data.sc === '200')          
                return 'success';
            else
                return 'fail';
        })
        .catch(function (error) {
            console.log(error);
            return 'fail';
        });   
      };


      export const fetchMain = async (test) => {
        console.log(test)
        
        //하는중 원래는 아래쪽
        return await axios.post('http://192.168.1.9:3000/main', test)
          .then(function (response) {
              console.log(response.data.sc)
              if(response.data.sc == '200')     
                return 'success'
              else
                return 'fail';
          })
          .catch(function (error) {
              console.log(error);
              return 'fail';
          }); 
          
        };