import { Box, Link, Stack } from '@mui/material'
import { locations } from '../data/locations'
import rfa_logo_gray from '/rfa_logo_gray.png'

const links = [
  'Privacy Statement',
  'FOIA',
  'Disclosures and Reporting',
  'Report Fraud',
  'Accessibility',
  'Contact Us',
]

export function Footer() {
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
        <a
          href='#'
          aria-label='Home'
        >
          <img
            width={135}
            src={rfa_logo_gray}
            alt='SC Revenue and Fiscal Affairs Office Logo'
          />
        </a>
      </Box>
      <Stack gap={2}>
        {links.map((link, idx) => (
          <Link
            key={idx}
            href='#'
            underline='hover'
            color='inherit'
          >
            {link}
          </Link>
        ))}
      </Stack>
      <Stack gap={2}>
        {locations.map(({ name, addrL1, addrL2 }, idx) => (
          <Box
            key={idx}
            sx={{ color: '#93A4BD' }}
          >
            <h2 className='footer-header'>{name}</h2>
            <div>{addrL1}</div>
            <div>{addrL2}</div>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
