import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, SxProps, TextField } from '@mui/material'

type SearchBarProps = {
  minWidth?: number
}

const buttonStyle: SxProps = {
  px: 4,
  ml: 3,
  height: '56px',
}

export function SearchBar({ minWidth }: SearchBarProps) {
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      rowGap={2}
      justifyContent='center'
    >
      <TextField
        placeholder='Search rfa.sc.gov'
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          backgroundColor: 'white',
          minWidth: minWidth,
          flexGrow: 1,
          width: { xs: '100%', md: '' },
        }}
      />
      <Button
        aria-label='search'
        variant={'contained'}
        color='primary'
        size='medium'
        endIcon={<SearchIcon />}
        sx={buttonStyle}
      >
        Search
      </Button>
    </Box>
  )
}
