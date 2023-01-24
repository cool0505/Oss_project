import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from '../image/main.jpg'

// const backgroundImage =
//   '../image/main.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout//asd
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" >
        Upgrade your Body
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: '3vw', mt: '3vw'}}
      >
        It is health that is real wealth and not pieces of gold and silver. (Mahatma Gandhi) 
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="mid"
        component="a"
        href="/Signup"
        sx={{ minWidth: 100 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}