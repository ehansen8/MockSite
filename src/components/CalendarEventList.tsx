import { Button, Divider, Stack } from '@mui/material'
import { calendarEvents } from '../data/calendarEvents'
import CalendarEventCard from './CalendarEventCard'

function CalendarEventList() {
  return (
    <div>
      <div className='display-2'>Calendar of Events</div>
      <Stack
        gap={4}
        mb={4}
        divider={<Divider variant='inset' />}
      >
        {calendarEvents.map((event) => (
          <CalendarEventCard {...event} />
        ))}
      </Stack>
      <Button variant='contained'>View All Events</Button>
    </div>
  )
}
export default CalendarEventList
