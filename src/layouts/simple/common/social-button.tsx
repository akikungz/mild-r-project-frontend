import { Button, Container, Grid, styled } from '@mui/material'
import { FaFacebook, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const SocialButton = styled(Button)(() => ({
  backgroundColor: '#a7f0e8',
  color: '#fceff6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: '60px',
  minWidth: '0',
  padding: '10px',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  ':hover': {
    backgroundColor: '#a7f0e8',
  },
  '& .MuiButton-startIcon': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
}))

const SocialButtons = () => {
  return (
    <Container
      sx={{
        position: 'fixed',
        top: '40%',
        left: 'calc(100% - 60px)',
        zIndex: '2',
        padding: '0 !important',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SocialButton
            variant="contained"
            startIcon={<FaYoutube size={30} />}
            href="https://www.youtube.com/@MildRWorldEnd"
          />
        </Grid>
        <Grid item xs={12}>
          <SocialButton
            variant="contained"
            startIcon={<FaXTwitter size={30} />}
            href="https://twitter.com/MildRWorldEnd"
          />
        </Grid>
        <Grid item xs={12}>
          <SocialButton
            variant="contained"
            startIcon={<FaFacebook size={30} />}
            href="https://www.facebook.com/MildRWorldEnd"
          />
        </Grid>
        <Grid item xs={12}>
          <SocialButton
            variant="contained"
            startIcon={<FaTiktok size={30} />}
            href="https://www.tiktok.com/@mildrworldend"
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SocialButtons
