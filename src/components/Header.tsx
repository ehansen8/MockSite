import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  Popover,
  Stack,
  SxProps,
  Toolbar,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import rfa_logo from '/rfa_logo.png'
import Link from '@mui/material/Link'
import { useState } from 'react'
import { NavSearchBar } from './NavSearchBar'

const navLinks = ['About Us', 'Events', 'Boards & Committees']

const subnavLinks = [
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

const menuButtonStyle: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '67px',
  bgcolor: '#3068AD',
  ':hover': {
    bgcolor: '#225089',
  },
}

function MenuButton({
  isOpen,
  handleClick,
}: {
  isOpen: boolean
  handleClick: () => void
}) {
  return (
    <Button
      variant='contained'
      onClick={handleClick}
      sx={menuButtonStyle}
    >
      {isOpen ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
      <Typography fontSize={12}>{isOpen ? 'Close' : 'Menu'}</Typography>
    </Button>
  )
}

const gridBlocks = [
  {
    title: 'Data & Research',
    links: [
      'Economy',
      'State Finances',
      'Education',
      'Healthcare',
      'Local Government',
      'Population and Demographics',
      'State Register Calculations',
      'Presentations',
    ],
  },
  {
    title: 'Geography & Mapping',
    links: [
      'Transportation Carrier Network (Uber)',
      'SC Real Time Network',
      'SC State GIS',
      'Maps',
      'Interactive Mapping',
      'Statewide Aerial Imagery',
    ],
  },
  {
    title: 'Programs & Services',
    links: [
      'Precinct Demographics and Redistricting',
      'State 911 Program',
      'Data Services and Online Solutions',
      'Geodetic Survey',
      'Fiscal Analysis',
      '2020 Census',
    ],
  },
  {
    title: 'Legislative Fiscal Impacts',
    links: [
      'Current General Assembly Session',
      'Previous General Assembly Session',
      'Forms',
    ],
  },
]

function HeaderDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <Collapse in={isOpen}>
      <Stack direction='row'>
        <Stack
          width='25%'
          gap={1}
          alignItems='center'
          bgcolor='#F3F6F9'
          px={6}
          py={4}
          divider={<Divider sx={{ width: '100%', bgcolor: '#CCCCCC' }} />}
        >
          {subnavLinks.map((link) => (
            <Link
              href='#'
              sx={{ color: '#333' }}
              underline='hover'
              fontSize='15px'
              fontWeight={700}
              textAlign='center'
              px={3}
              py={1}
            >
              {link}
            </Link>
          ))}
        </Stack>
        <Grid
          container
          padding={4}
          rowGap={4}
          sx={{ flexGrow: 1, borderTop: '2px solid #F3F6F9' }}
        >
          {gridBlocks.map(({ title, links }) => (
            <Grid
              item
              xs={4}
            >
              <Box mb={2}>
                <Link
                  underline='hover'
                  className='display-2'
                  mb={4}
                  href='#'
                >
                  {title}
                </Link>
              </Box>
              <Stack gap={1}>
                {links.map((link) => (
                  <Link
                    href='#'
                    sx={{ color: 'black' }}
                    underline='hover'
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Collapse>
  )
}
