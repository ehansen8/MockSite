import { Button, SxProps, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

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

export function MenuButton({
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
