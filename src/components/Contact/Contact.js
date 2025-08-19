import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import styles from './Contact.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/PhoneRounded'

const Contact = () => (
  <Box
    id="highlights"
    sx={{
      pt: { xs: 4, sm: 10 },
      pb: { xs: 4, sm: 10 },
      bgcolor: 'white',
    }}
  >
    <Container
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 2, sm: 2 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Snak med os
        </Typography>
        <Typography variant="body2" gutterBottom>
          Some more catchy text
        </Typography>
      </Box>
      <Stack direction="row" spacing={3}>
        <Stack direction="row" sx={{ gap: 1 }}>
          <PhoneIcon fontSize="small" />
          <Typography variant="subtitle2" gutterBottom sx={{}}>
            sales@blackcapitaltechnology.com
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 1 }}>
          <PhoneIcon fontSize="small" />
          <Typography variant="subtitle2" gutterBottom sx={{}}>
            +45 39394243
          </Typography>
        </Stack>
        <Stack direction="row" sx={{ gap: 1 }}>
          <PhoneIcon fontSize="small" />
          <Typography variant="subtitle2" gutterBottom sx={{}}>
            blackcapitaltechnology.com
          </Typography>
        </Stack>
      </Stack>
      <Button
        variant="contained"
        size="small"
        sx={{
          minWidth: 'fit-content',
          backgroundColor: '#280050',
          textTransform: 'none',
          padding: '10px 20px',
          fontSize: '15px',
          fontWeight: 'bold'
        }}
      >
        Book møde
      </Button>
    </Container>
  </Box>
);

export default Contact;
