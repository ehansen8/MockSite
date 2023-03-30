import { Grid, Stack, Typography } from '@mui/material'
import { SearchBar } from './SearchBar'

function Hero() {
  return (
    <Grid
      container
      className='hero'
      justifyContent='center'
    >
      <Grid
        item
        xs={10}
        sm={7}
        lg={4.5}
      >
        <Stack
          justifyContent='center'
          mx='auto'
          height='100%'
        >
          <Typography
            variant='h2'
            className='hero-content'
            fontSize={{ xs: '1.375rem', md: '1.75rem' }}
          >
            Providing insightful research, analysis, and resources to facilitate
            informed policy decisions and administration of services
          </Typography>
          <SearchBar />
        </Stack>
      </Grid>
    </Grid>
  )
}
export default Hero
