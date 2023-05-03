import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      sx={{
        height: 200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}