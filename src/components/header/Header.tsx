import { AppBar, Box, Button, Popover, Stack, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import rfa_logo from '/rfa_logo.png'
import Link from '@mui/material/Link'
import { useState } from 'react'
import { NavSearchBar } from '../NavSearchBar'
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const searchOpen = Boolean(anchorEl)

  function handleSearchClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget)
  }
  const handleSearchClose = () => {
    setAnchorEl(null)
  }

  function handleMenuClick() {
    setIsMenuOpen((state) => !state)
  }

  return (
    <AppBar
      position='sticky'
      sx={{ backgroundColor: 'white' }}
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
        <Box
          mx={{ xs: 0.5, sm: 1.5 }}
          height='100%'
        >
          <a href='#'>
            <Box
              p={{ xs: 0.5, sm: 1.5 }}
              height='100%'
            >
              <img
                className='logo'
                height='100%'
                src={rfa_logo}
                alt=''
              />
            </Box>
          </a>
        </Box>
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
          display={{ xs: 'none', md: 'flex' }}
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
          <Button
            className={searchOpen ? 'button-active' : ''}
            onClick={handleSearchClick}
            variant='outlined'
            sx={{
              padding: '7px',
              aspectRatio: '1/1',
            }}
          >
            <SearchIcon fontSize='medium' />
          </Button>
          <Popover
            anchorEl={anchorEl}
            open={searchOpen}
            onClose={handleSearchClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{ sx: { borderRadius: 0 } }}
          >
            <Box
              p={2}
              bgcolor='primary.main'
            >
              <NavSearchBar minWidth={310} />
            </Box>
          </Popover>
        </Stack>
      </Toolbar>
      <HeaderDropdown isOpen={isMenuOpen} />
      <Box
        sx={{ backgroundColor: '#1B3A61', width: '100%', height: '8px' }}
      ></Box>
    </AppBar>
  )
}
