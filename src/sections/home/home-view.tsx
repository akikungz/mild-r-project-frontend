import { Box } from '@mui/material'

import CountdownComponent from './components/countdown'

export default function HomePageView() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className="h-[100vh]"
    >
      <CountdownComponent />
    </Box>
  )
}
