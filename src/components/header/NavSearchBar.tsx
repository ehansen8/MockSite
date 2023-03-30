import {
  Box,
  BoxProps,
  Button,
  Popover,
  SxProps,
  TextField,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { ChangeEvent, useState } from 'react'

const buttonStyle: SxProps = {
  px: 4,
  ml: 3,
  borderColor: 'white',
  color: 'white',
}

export function NavSearchBar({ display }: { display?: BoxProps['display'] }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const searchOpen = Boolean(anchorEl)

  function handleSearchClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget)
  }

  const handleSearchClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box display={display}>
      <Button
        aria-label='Open Search'
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
          <SearchBarPopover />
        </Box>
      </Popover>
    </Box>
  )
}

function SearchBarPopover() {
  const [input, setInput] = useState('')

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }
  function handleSearch() {}

  return (
    <Box display='flex'>
      <TextField
        onChange={handleInput}
        value={input}
        placeholder='Search rfa.sc.gov'
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          backgroundColor: 'white',
          height: '100%',
          minWidth: 310,
          flexGrow: 1,
        }}
      />
      <Button
        onClick={handleSearch}
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
