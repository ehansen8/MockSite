import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import rfa_logo from '/rfa_logo.png'
import Link from '@mui/material/Link'
import { useState } from 'react'
import { NavSearchBar } from './NavSearchBar'
import { HeaderDropdown } from './HeaderDropdown'
import { MenuButton } from './MenuButton'

const navLinks = ['About Us', 'Events', 'Boards & Committees']

export const subnavLinks = [
  'Home',
  'News & Events',
  'About Us',
  'Contact Us',
  'Boards & Committees',
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuClick() {
    setIsMenuOpen((state) => !state)
  }

  return (
    <AppBar
      position='sticky'
      sx={{
        backgroundColor: 'white',
        overflowY: 'auto',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: 'flex',
          height: { xs: '50px', sm: '110px' },
        }}
      >
        <MenuButton
          isOpen={isMenuOpen}
          handleClick={handleMenuClick}
        />
        <LogoIconButton />
        <Stack
          className='nav-title'
          fontSize={{ xs: '.5625rem', sm: '1.125rem' }}
        >
          <div>South Carolina</div>
          <div>Revenue And Fiscal Affairs Office</div>
          <Box
            className='subtitle'
            fontSize={{ xs: '.5rem', sm: '1rem' }}
          >
            Transforming data into solutions for South Carolina
          </Box>
        </Stack>
        <Stack
          direction='row'
          gap={2}
          justifyContent='flex-end'
          alignItems='center'
          flexGrow={1}
          px={2}
        >
          {navLinks.map((link) => {
            return (
              <Link
                key={link}
                href='#'
                color='#1B3A61'
                underline='hover'
                display={{ xs: 'none', lg: 'flex' }}
              >
                {link}
              </Link>
            )
          })}
          <NavSearchBar display={{ xs: 'none', sm: 'block' }} />
        </Stack>
      </Toolbar>
      <HeaderDropdown isOpen={isMenuOpen} />
      <Box
        sx={{ backgroundColor: '#1B3A61', width: '100%', height: '8px' }}
      ></Box>
    </AppBar>
  )
}

function LogoIconButton() {
  return (
    <Box
      mx={{ xs: 0.5, sm: 1.5 }}
      height='100%'
    >
      <a
        href='#'
        aria-label='Home'
      >
        <Box
          p={{ xs: 0.5, sm: 1.5 }}
          height='100%'
        >
          <img
            className='logo'
            height='100%'
            src={rfa_logo}
            alt='SC Revenue and Fiscal Affairs Office Logo'
          />
        </Box>
      </a>
    </Box>
  )
}
