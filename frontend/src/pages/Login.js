import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { fetchLogin } from "./service";

export default function Login() {
  const [id, setid] = useState('');    // 사용자가 입력한 아이디 저장
  const [pw, setPw] = useState('');    // 사용자가 입력한 비밀번호 저장

  const req = {
    id,
    pw,
  };

  const onClickConfirmButton = ()=>{
     fetchLogin(req);
  }

  return (
    <Container component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <TextField
          margin="normal"
          label="ID"
          required
          fullWidth
          name="id"
          autoComplete="id"
          value={id}
          onChange={(e)=>setid(e.target.value)}
        />
        <TextField
          margin="normal"
          label="Password"
          type="password"
          required
          fullWidth
          name="password"
          autoComplete="current-password"
          value={pw}
          onChange={(e)=>setPw(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember"
        />
        <Button
          onClick = {onClickConfirmButton}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid item>
            <Link to={'/SignUp'}>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}