import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ pt: 15, pb: 10, bgcolor: '#FAF6F1' }}>
      {/* Concept Statement */}
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{
          fontSize: { xs: '2rem', md: '3.5rem' },
          fontWeight: 300,
          textAlign: 'center',
          mb: 15,
          color: '#4A2F24',
          letterSpacing: '0.02em',
          lineHeight: 1.4
        }}>
          A fusion of Nordic minimalism and desert aesthetics, creating ceramics that embody the essence of both worlds.
        </Typography>

        {/* Visual Elements */}
        <Grid container spacing={12}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={require('../assets/images/preview (1).webp')}
              sx={{
                width: '100%',
                height: '70vh',
                objectFit: 'cover'
              }}
              className="parallax-image"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: '#4A2F24',
              letterSpacing: '0.03em'
            }}>
              In the intersection of stark landscapes and clean design, we find our inspiration. Each piece tells a story of duality — the warmth of desert sands meeting the cool precision of Scandinavian design.
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ my: 15 }}>
            <Typography variant="h2" sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 300,
              textAlign: 'center',
              color: '#4A2F24',
              letterSpacing: '0.1em',
              mb: 3
            }}>
              OUR ETHOS
            </Typography>
            <Typography variant="body1" sx={{
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 2,
              color: '#4A2F24'
            }}>
              Simplicity in form. Beauty in function. Harmony in design.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{
              fontSize: '1.1rem',
              lineHeight: 2,
              color: '#4A2F24',
              letterSpacing: '0.03em'
            }}>
              Our ceramics are crafted with intention, embracing imperfection while pursuing excellence. Each piece reflects our commitment to sustainable practices and timeless design.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={require('../assets/images/preview (2).webp')}
              sx={{
                width: '100%',
                height: '70vh',
                objectFit: 'cover'
              }}
              className="parallax-image"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;