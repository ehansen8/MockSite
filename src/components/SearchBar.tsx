import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, SxProps, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'

type SearchBarProps = {
  minWidth?: number
}

const buttonStyle: SxProps = {
  px: 4,
  ml: 3,
  height: '56px',
}

export function SearchBar({ minWidth }: SearchBarProps) {
  const [input, setInput] = useState('')

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  function handleSearch() {}
  return (
    <Box
      display='flex'
      flexWrap='wrap'
      rowGap={2}
      justifyContent='center'
    >
      <TextField
        onChange={handleInput}
        value={input}
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
        onClick={handleSearch}
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
