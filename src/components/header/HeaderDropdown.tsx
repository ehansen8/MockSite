import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  Stack,
  Theme,
  useMediaQuery,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import Link from '@mui/material/Link'
import { SubnavBlockData, subnavBlocks } from '../../data/subNavBlocks'
import { subnavLinks } from './Header'
import { useEffect, useState } from 'react'

export function HeaderDropdown({ isOpen }: { isOpen: boolean }) {
  return (
    <Collapse in={isOpen}>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Stack
          width={{ xs: '100%', sm: '25%' }}
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
          {subnavBlocks.map((block, idx) => (
            <Grid
              key={idx}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <ListDropdown {...block} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Collapse>
  )
}

function ListDropdown({ title, links }: SubnavBlockData) {
  const isXs = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'))
  const [isOpen, setIsOpen] = useState(!isXs)

  //Handles case where dynamic resize would not reset open state
  useEffect(() => {
    setIsOpen(!isXs)
  }, [isXs])

  function handleExpand() {
    setIsOpen((state) => !state)
  }

  return (
    <>
      <Box
        mb={2}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Link
          underline='hover'
          className={`display-2 ${isXs ? 'display-2-small' : ''}`}
          mb={4}
          href='#'
        >
          {title}
        </Link>
        <Button
          variant='contained'
          onClick={handleExpand}
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
        >
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Box>
      <Collapse in={isOpen}>
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
      </Collapse>
      <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />
    </>
  )
}
