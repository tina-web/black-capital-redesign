import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import styles from './AiAnalyser.module.css';
import RocketIcon from '@mui/icons-material/Rocket';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import visuallyHidden from '@mui/utils/visuallyHidden';

const AiAnalyser = () => (
  <Box
    id="ai-analyzer"
    sx={(theme) => ({
      width: '100%',
      height: '100vh',
      overflow: 'auto',
      backgroundColor: '#280050',
      backgroundRepeat: 'no-repeat',
      backgroundImage:
        'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
      ...theme.applyStyles('dark', {
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
      }),
    })}
  >
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Stack
        spacing={2}
        useFlexGap
        sx={{
          alignItems: 'center',
          width: { xs: '100%', sm: '70%', paddingBottom: '20px' }
        }}
      >
        <RocketIcon sx={{ color: 'white', fontSize: 40 }} />
        <Typography
          variant="h1"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          <Typography
            variant="span"
            component="h1"
            sx={{
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              color: '#ff9700'
            }} >
            AI&nbsp;
          </Typography>
          Virksomhed Analyser
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
            fontSize: '18px',
            width: { sm: '100%', md: '90%' },
          }}
        >
          Lær hvordan AI kan transformere din forretning med personaliserede anbefalinger.
        </Typography>
        <InputLabel htmlFor="url-hero" sx={visuallyHidden}>
          URL
        </InputLabel>
        <TextField
          id="url-hero"
          hiddenLabel
          size="small"
          variant="outlined"
          aria-label="URL"
          placeholder="Indtast din hjemmeside URL (f.eks. virksomhed.dk)"
          fullWidth
          sx={{ backgroundColor: 'white', borderRadius: '5px', marginTop: '20px' }}
        />
        <Button
          variant="contained"
          size="small"
          sx={{
            minWidth: 'fit-content',
            backgroundColor: '#ff9700',
            textTransform: 'none',
            padding: '10px 20px',
            fontSize: '15px',
            fontWeight: 'bold',
            marginTop: '10px'
          }}
        >
          Analyser min virksomhed
        </Button>
      </Stack>
    </Container>
  </Box>
);
export default AiAnalyser;
