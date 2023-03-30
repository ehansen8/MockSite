import { Box, Collapse, Divider, Grid, Stack } from '@mui/material'
import Link from '@mui/material/Link'
import { subnavBlocks } from '../../data/subNavBlocks'
import { subnavLinks } from './Header'

export function HeaderDropdown({ isOpen }: { isOpen: boolean }) {
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
          {subnavLinks.map((link, idx) => (
            <Link
              key={idx}
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
          columnSpacing={3}
          sx={{ flexGrow: 1, borderTop: '2px solid #F3F6F9' }}
        >
          {subnavBlocks.map(({ title, links }, idx) => (
            <Grid
              key={idx}
              item
              xs={6}
              md={4}
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
                {links.map((link, idx) => (
                  <Link
                    key={idx}
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
