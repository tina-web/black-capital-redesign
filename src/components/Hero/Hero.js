import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import styles from './Hero.module.css';
import PropTypes from 'prop-types';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Hero = () => (
  <Stack
    direction={{ xs: 'column-reverse', md: 'row' }}
    sx={{
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: { xs: 6, sm: 12 },
      p: 2,
      mx: 'auto',
      bgcolor: 'white',
    }}
  >
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      sx={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: { xs: 6, sm: 12 },
        padding: '8% 10%',
        m: 'auto',
      }}
    >
      <Stack
        id='call-to-action'
        direction="column"
        spacing={3}
        sx={{
          alignItems: 'flex-start',
          width: { sm: '100%', md: '50%' },
          textAlign: { sm: 'left', md: 'left' },
          marginTop: '25px'
        }}
      >
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: '#280050' }}>
          Opdag AI-muligheder for jeres virksomhed.
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.600' }}>
          Vi hjælper virksomheder med at træde ind i den digitale tidsalder. Hvad kan vi hjælpe dig med at opnå?
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            minWidth: 'fit-content',
            backgroundColor: '#280050',
            textTransform: 'none',
            padding: '10px 20px', fontSize: '15px',
            fontWeight: 'bold'
          }}
        >
          Book møde
        </Button>
      </Stack>
      <Stack
        id='highlights'
        direction="column"
        spacing={3}
        sx={{
          alignItems: 'flex-start',
        }}>
        <Stack direction="row" sx={{ gap: 2 }}>
          <RocketLaunchIcon sx={{ color: 'grey.900' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            Hurtig implementering
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 2 }}>
          <RocketLaunchIcon sx={{ color: 'grey.900' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            Garanteret ROI
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 2 }}>
          <RocketLaunchIcon sx={{ color: 'grey.900' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            Ekspertise på alle niveauer
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 2 }}>
          <RocketLaunchIcon sx={{ color: 'grey.900' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            100% gratis analyse
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 2 }}>
          <RocketLaunchIcon sx={{ color: 'grey.900' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            Personlige anbefalinger
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 2 }}>
          <RocketLaunchIcon sx={{ color: 'grey.900' }} />
          <Typography gutterBottom sx={{ fontWeight: 'medium', color: 'grey.900' }}>
            Ingen forpligtelser
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  </Stack>













  // <Box
  //   id="highlights"
  //   sx={{
  //     pt: { xs: 4, sm: 12 },
  //     pb: { xs: 8, sm: 16 },
  //     bgcolor: 'white',
  //   }}
  // >
  //   <Container
  //     sx={{
  //       position: 'relative',
  //       display: 'flex',
  //       flexDirection: 'column',
  //       alignItems: 'center',
  //       gap: { xs: 3, sm: 6 },
  //     }}
  //   >
  //     <Box
  //       sx={{
  //         width: { sm: '100%', md: '60%' },
  //         textAlign: { sm: 'left', md: 'center' },
  //       }}
  //     >
  //       <Typography component="h2" variant="h4" gutterBottom>
  //         Opdag AI-muligheder for jeres virksomhed.
  //       </Typography>
  //       <Typography variant="body1" sx={{ color: 'grey.400' }}>
  //         Vi hjælper virksomheder med at træde ind i den digitale tidsalder. Hvad kan vi hjælpe dig med at opnå?
  //       </Typography>
  //     </Box>
  //     <Stack direction="row" spacing={3}>
  //       <div><RocketLaunchIcon />Hurtig implementering</div>
  //       <div><RocketLaunchIcon />Garanteret ROI</div>
  //       <div><RocketLaunchIcon />Ekspertise på alle niveauer</div>
  //       {/* <div><RocketLaunchIcon />Hurtig implementering</div>
  //       <div><RocketLaunchIcon />Garanteret ROI</div>
  //       <div><RocketLaunchIcon />Ekspertise på alle niveauer</div> */}
  //     </Stack>
  //     <Button
  //       variant="contained"
  //       size="small"
  //       sx={{ minWidth: 'fit-content', backgroundColor: 'orange', textTransform: 'none', padding: '10px 20px', fontSize: '15px', fontWeight: 'bold' }}
  //     >
  //       Book møde
  //     </Button>
  //   </Container>
  // </Box>
);

export default Hero;
