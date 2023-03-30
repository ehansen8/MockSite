import { Box, Grid } from '@mui/material'
import { Header } from './components/header/Header'
import { Hero } from './components/Hero'
import { IconCardList } from './components/IconCardList'
import { UpdateList } from './components/UpdateList'
import { ServiceList } from './components/ServiceList'
import { CalendarEventList } from './components/CalendarEventList'
import { Footer } from './components/Footer'
import { ScrollFab } from './components/ScrollFab'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Box
          className='main-container'
          bgcolor='#E1E5EB'
          px={{ xs: 2, sm: 10 }}
          mb={3}
        >
          <IconCardList />
        </Box>
        <Box
          className='main-container'
          px={{ xs: 2, sm: 10 }}
          mb={2}
        >
          <ServiceList />
          <Grid
            container
            columnSpacing={4}
            rowGap={5}
            mt={5}
          >
            <Grid
              item
              md={6}
            >
              <UpdateList />
            </Grid>
            <Grid
              item
              md={6}
            >
              <CalendarEventList />
            </Grid>
          </Grid>
          <ScrollFab />
        </Box>
      </main>
      <Footer />
      <div className='App'></div>
    </>
  )
}

export default App
