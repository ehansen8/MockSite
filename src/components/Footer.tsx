import { Box, Link, List } from '@mui/material'
import { Stack } from '@mui/system'
import rfa_logo_gray from '/rfa_logo_gray.png'

const links = [
  'Privacy Statement',
  'FOIA',
  'Disclosures and Reporting',
  'Report Fraud',
  'Accessibility',
  'Contact Us',
]

const places = [
  {
    name: 'Main Office',
    addrL1: '1000 Assembly St, Rembert Dennis Building, Suite 421',
    addrL2: 'Columbia, SC 29201',
  },

  {
    name: 'Geodetic Survey Section',
    addrL1: '5 Geology Rd',
    addrL2: 'Columbia, SC 29212',
  },

  {
    name: 'Health and Demographics Division',
    addrL1: '1000 Assembly St, Rembert Dennis Building, Suite 240',
    addrL2: 'Columbia, SC 29201',
  },
]

function Footer() {
  return (
    <Box
      className='footer'
      display='flex'
      flexDirection={{ xs: 'column', md: 'row' }}
      rowGap={5}
      bgcolor='#1B3A61'
      py='30px'
      px='4rem'
    >
      <Box
        color='white'
        fontSize='1.125rem'
        fontWeight={700}
      >
        <Box>South Carolina</Box>
        <Box mb={2}>Revenue and Fiscal Affairs Office</Box>
        <a href='#'>
          <img
            width={135}
            src={rfa_logo_gray}
            alt=''
          />
        </a>
      </Box>
      <Stack gap={2}>
        {links.map((link) => (
          <Link
            href='#'
            underline='hover'
            color='inherit'
          >
            {link}
          </Link>
        ))}
      </Stack>
      <Stack gap={2}>
        {places.map(({ name, addrL1, addrL2 }) => (
          <Box sx={{ color: '#93A4BD' }}>
            <h2 className='footer-header'>{name}</h2>
            <div>{addrL1}</div>
            <div>{addrL2}</div>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
export default Footer
