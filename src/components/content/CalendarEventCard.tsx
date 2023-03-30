import { Box, Chip, Stack, SxProps, Typography } from '@mui/material'
import RoomIcon from '@mui/icons-material/Room'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PhoneIcon from '@mui/icons-material/Phone'
import { CalendarEventData } from '../../data/calendarEvents'

const iconStyle: SxProps = {
  color: '#8C6910',
  mr: 1,
}

const ColoredChip = ({ status }: { status: CalendarEventData['status'] }) => {
  const canceled: SxProps = {
    bgcolor: '#DB222C',
  }

  const updated: SxProps = {
    bgcolor: '#DBBA46',
    color: 'black',
  }

  const style = status === 'Canceled' ? canceled : updated
  return (
    <Chip
      sx={style}
      label={status}
    />
  )
}

function CalendarEventCard({
  title,
  location,
  date,
  time,
  phone,
  status,
}: CalendarEventData) {
  return (
    <Stack
      direction='row'
      gap={3}
    >
      <div>
        <Stack
          bgcolor='#8C6910'
          p={2}
          textAlign='center'
          color='white'
        >
          <Box
            textTransform='uppercase'
            fontSize='1rem'
            fontWeight={600}
          >
            {date.month}
          </Box>
          <Box
            lineHeight={1}
            fontSize='30px'
            fontWeight={600}
          >
            {date.day}
          </Box>
        </Stack>
      </div>
      <Stack
        alignItems='flex-start'
        gap='5px'
      >
        {status && <ColoredChip status={status} />}
        <h2>{title}</h2>
        <Box display='flex'>
          <RoomIcon sx={iconStyle} />
          <Typography>{location}</Typography>
        </Box>
        <Box display='flex'>
          <AccessTimeIcon sx={iconStyle} />
          <Typography>{time}</Typography>
        </Box>
        <Box display='flex'>
          <PhoneIcon sx={iconStyle} />
          <Typography>{phone}</Typography>
        </Box>
      </Stack>
    </Stack>
  )
}
export default CalendarEventCard
