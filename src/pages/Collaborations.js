import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const Collaborations = () => {
  return (
    <Box sx={{ pt: 15, pb: 10, bgcolor: '#FAF6F1' }}>
      <Container maxWidth="lg">
        {/* Opening Statement */}
        <Typography variant="h1" sx={{
          fontSize: { xs: '2rem', md: '3.5rem' },
          fontWeight: 300,
          textAlign: 'center',
          mb: 15,
          color: '#4A2F24',
          letterSpacing: '0.02em',
          lineHeight: 1.4
        }}>
          Where artisans meet, boundaries dissolve, and new forms emerge.
        </Typography>

        {/* Featured Collaboration */}
        <Grid container spacing={12}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={require('../assets/images/preview (4).webp')}
              sx={{
                width: '100%',
                height: '80vh',
                objectFit: 'cover'
              }}
              className="parallax-image"
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{
                letterSpacing: '0.2em',
                color: '#4A2F24',
                mb: 2,
                display: 'block'
              }}>
                CURRENT COLLABORATION
              </Typography>
              <Typography variant="h3" sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 300,
                color: '#4A2F24',
                mb: 4
              }}>
                Desert Winds × Nordic Frost
              </Typography>
              <Typography variant="body1" sx={{
                fontSize: '1.1rem',
                lineHeight: 2,
                color: '#4A2F24',
                letterSpacing: '0.03em'
              }}>
                A dialogue between two landscapes, where the raw textures of desert meet the refined simplicity of Nordic design. Limited edition pieces that capture the essence of both worlds.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Future Collaborations */}
        <Box sx={{ my: 20, textAlign: 'center' }}>
          <Typography variant="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 300,
            color: '#4A2F24',
            letterSpacing: '0.1em',
            mb: 3
          }}>
            FUTURE VISIONS
          </Typography>
          <Typography variant="body1" sx={{
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 2,
            color: '#4A2F24'
          }}>
            We are constantly seeking kindred spirits who share our vision for thoughtful design and sustainable craftsmanship.
          </Typography>
        </Box>

        {/* Past Projects */}
        <Grid container spacing={8} sx={{ mt: 10 }}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={require('../assets/images/preview (5).webp')}
              sx={{
                width: '100%',
                height: '50vh',
                objectFit: 'cover',
                mb: 3
              }}
              className="parallax-image"
            />
            <Typography variant="overline" sx={{
              letterSpacing: '0.2em',
              color: '#4A2F24',
              display: 'block',
              mb: 1
            }}>
              PAST PROJECT
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A2F24' }}>
              Sahara Collection, 2023
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={require('../assets/images/preview (2).webp')}
              sx={{
                width: '100%',
                height: '50vh',
                objectFit: 'cover',
                mb: 3
              }}
              className="parallax-image"
            />
            <Typography variant="overline" sx={{
              letterSpacing: '0.2em',
              color: '#4A2F24',
              display: 'block',
              mb: 1
            }}>
              PAST PROJECT
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A2F24' }}>
              Arctic Series, 2023
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={require('../assets/images/preview (1).webp')}
              sx={{
                width: '100%',
                height: '50vh',
                objectFit: 'cover',
                mb: 3
              }}
              className="parallax-image"
            />
            <Typography variant="overline" sx={{
              letterSpacing: '0.2em',
              color: '#4A2F24',
              display: 'block',
              mb: 1
            }}>
              PAST PROJECT
            </Typography>
            <Typography variant="body1" sx={{ color: '#4A2F24' }}>
              Dune Elements, 2022
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Collaborations;