import * as React from 'react';
import { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import Person from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { fetchSignup,fetchcheckId } from "./servies";




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



export default function SignUp() {

  const [username,setusername] = useState('');
  const [username_error,setusername_error] = useState('');
  const [username_messege,setusername_message] = useState('');

  const [email,setemail] = useState('');
  const [email_error,setemail_error] = useState('');
  const [email_messege,setemail_message] = useState('');

  const [password,setpassword] = useState('');

  const username_onChange = (e)=> {
    setusername(e.target.value)
  }
  useEffect(() => {
  	if(username.length>0) {
    	username_validation();
    } 
  }, [username])
  const username_onBlur = (e)=> {
    const req = {
      username
    };
    fetchcheckId(req)
  }

  const username_validation =()=>{
    let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
    console.log(username)
    if(check.test(username)){
      setusername_error(true)
      setusername_message("특수기호나 한글은 입력 하실 수 없습니다.")
    }
    else if(username.length<5 || username.length>25){
      setusername_error(true)
      setusername_message("5글자 이상 25글자 이하로 입력하십시오")
    }
    else{
      setusername_error(false)
      setusername_message('')
    }
  }

  const email_onChange = (e)=> {
    setemail(e.target.value)
    
  }
  useEffect(() => {
  	if(email.length>0) {
    	email_validation();
    } 
  }, [email])
  const email_onBlur = (e)=> {
    const req = {
      email
    };
    fetchcheckId(req)
  }

  const email_validation =()=>{
    let email_check = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
    console.log(email)
    if(!email_check.test(email)){
      setemail_error(true)
      setemail_message("이메일의 형식이 올바르지 않습니다.")
    }

    else{
      setemail_error(false)
      setemail_message('사용가능한 이메일입니다.')
    }
  } 
  useEffect(() => {  // Email 형식 체크
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if(regExp.test(password)){
      console.log(password)
    };
}, [password])


  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
      const Name=data.get('username');
      const email=data.get('email');
      const password=data.get('password');
  
    const req = {
        Name,
        email,
        password
      };
    fetchSignup(req);
    console.log(req)
  };




  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  id="username"
                  label="아이디"
                  autoFocus      
                  value={username} 
                  sx={{width:'75%'}}
                  onBlur={username_onBlur}
                  onChange={username_onChange}
                  error={username_error}
                  helperText={username_messege}
                />

              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email} 
                  onBlur={email_onBlur}
                  onChange={email_onChange}
                  error={email_error}
                  helperText={email_messege}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required 
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="비밀번호 재확인"
                  type="confirmpassword"
                  id="confirmpassword"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

///중복검사 전에 회원가입 규칙 작성
