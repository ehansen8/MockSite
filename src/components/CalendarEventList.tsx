import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import CalendarEventCard from './CalendarEventCard'
import UpdateCard from './UpdateCard'

export type CalendarEvent = {
  title: string
  date: { month: string; day: number }
  location: string
  time: string
  phone: string
  status?: 'Updated' | 'New' | 'Canceled'
}

const events: CalendarEvent[] = [
  {
    title: 'Local Government Finance',

    date: { month: 'Nov', day: 22 },
    location: 'Room 415, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
    status: 'Updated',
  },
  {
    title: 'Local Government Finance',

    date: { month: 'Nov', day: 23 },
    location: 'Room 415, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
    status: 'Canceled',
  },
  {
    title: 'Local Government Finance',

    date: { month: 'Nov', day: 25 },
    location: 'Room 415, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
  },
  {
    title: 'Local Government Finance',

    date: { month: 'Nov', day: 28 },
    location: 'Room 415, Bowers Conference Room, Rembert Dennis Building',
    time: '1:30 pm',
    phone: '(803) 734-2265',
  },
]

function CalendarEventList() {
  return (
    <div>
      <div className='display-2'>Calendar of Events</div>
      <Stack
        gap={4}
        mb={4}
        divider={<Divider variant='inset' />}
      >
        {events.map((event) => (
          <CalendarEventCard {...event} />
        ))}
      </Stack>
      <Button variant='contained'>View All Events</Button>
    </div>
  )
}
export default CalendarEventList
