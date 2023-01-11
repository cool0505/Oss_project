//동기식 방식 ( async await 사용!!!!!)
import axios from 'axios';
//import Cookies from 'js-cookie';

export const fetchLogin = async (test) => {
  console.log(test)
  
  //하는중 원래는 아래쪽
  axios.post('http://192.168.0.57:3000/login', test)
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
/*
    const response = await fetch('http://119.194.24.174:3000/user/login')
    .then((response) => {
      if(response.ok) {
        return response.json();
      }  
      throw new Error('Network response was not ok.');
    }).then((data) => {
      console.log(JSON.stringify(data));
    }).catch((error) => {
      console.log(`error: ${error}`)
  });

    if (response.ok) {
        //서버통신이 성공적으로 이루어지면 users에 json값 대입
      const users = await response.json();
      console.log("Ok");
  
      //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
      //서로 일치하는 것만 user에 대입
      const user = users.find((user) => user.id === id);
      //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
      if (!user || user.pw !== pw) {
        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
      }
  
      //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
      //form 컴포넌트에서 setUser값에 넣어야함
      return user;
    }
  
    //서버 통신이 안이루어졌을떄
    throw new Error("서버 통신이 원할하지 않습니다.");*/
  };