import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import styles from './Companies.module.css';
import DoneIcon from '@mui/icons-material/Done'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import skatLogo from '../../assets/skattestyrelsen-logo.png'

const logoStyle = {
  width: '100px',
  margin: '12px 25px',
  opacity: 0.7,
};

const Companies = () => (
  <Box
    id="highlights"
    sx={{
      pt: { xs: 4, sm: 10 },
      pb: { xs: 4, sm: 10 },
      backgroundColor: '#2800500a',
    }}
  >
    <Container
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 3 },

      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" gutterBottom color='#280050'>
          Bliv den næste succeshistorie
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.900' }}>
          Vi har hjulpet over 100+ virksomheder med at opnå digital transformation gennem AI og automation. Fra startups til Fortune 500 selskaber - vores ekspertise skaber værdi på tværs af alle brancher. Disse virksomheder har alle opnået betydelige effektivitetsforbedringer og digitale transformationer.
        </Typography>
      </Box>
      <Stack direction="row" spacing={3}>
        <Stack direction="row" sx={{ gap: 1 }}>
          <DoneIcon sx={{ color: '#ff9700' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            95% kundetilfredshed
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 1 }}>
          <DoneIcon sx={{ color: '#ff9700' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            3+ års gennemsnitligt partnerskab
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 1 }}>
          <DoneIcon sx={{ color: '#ff9700' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            40% gennemsnitlig effektivitetsforbedring
          </Typography>
        </Stack>
      </Stack>
      <Box id="logoCollection">
        <Grid container sx={{ justifyContent: 'center', mt: 0.5, opacity: 0.6 }}>
          {[...Array(14)].map((_, i) => (
            <Grid key={i}>
              <img
                src={skatLogo}
                alt='Fake Company'
                style={logoStyle}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </Box>
);

export default Companies;
