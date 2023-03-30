import { Box, Button, SxProps, TextField } from '@mui/material'

type NavSearchBarProps = {
  minWidth?: number
}

const buttonStyle: SxProps = {
  px: 4,
  ml: 3,
  borderColor: 'white',
  color: 'white',
}

export function NavSearchBar({ minWidth }: NavSearchBarProps) {
  return (
    <Box display='flex'>
      <TextField
        placeholder='Search rfa.sc.gov'
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          backgroundColor: 'white',
          height: '100%',
          minWidth: minWidth,
          flexGrow: 1,
        }}
      />
      <Button
        aria-label='search'
        variant={'outlined'}
        color='primary'
        size='medium'
        sx={buttonStyle}
      >
        Search
      </Button>
    </Box>
  )
}
