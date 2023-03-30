import { Box, IconButton, Link } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export function ScrollFab() {
  return (
    <Box
      my={3}
      width='100%'
      textAlign='right'
    >
      <Link
        href='#'
        underline='hover'
      >
        Back to Top
      </Link>
      <IconButton
        href='#'
        color='primary'
      >
        <KeyboardArrowUpIcon fontSize='large' />
      </IconButton>
    </Box>
  )
}
