import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      sx={{
        height: 200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.dark'
        },
      }}
    />
  );
}