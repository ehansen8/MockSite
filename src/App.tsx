import { Box, Grid } from '@mui/material'
import { Header } from './components/Header'
import Hero from './components/Hero'
import IconCardList from './components/IconCardList'
import RecentUpdateList from './components/UpdateList'
import Services from './components/Services'
import CalendarEventList from './components/CalendarEventList'
import Footer from './components/Footer'
import { ScrollFab } from './components/ScrollFab'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Box
          className='Main-Container'
          bgcolor='#E1E5EB'
          px={{ xs: 2, sm: 10 }}
          mb={3}
        >
          <IconCardList />
        </Box>
        <Box
          className='Main-Container'
          px={{ xs: 2, sm: 10 }}
          mb={2}
        >
          <Services />
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
              <RecentUpdateList />
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
