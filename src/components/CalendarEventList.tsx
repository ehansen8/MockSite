import { Button, Divider, Stack } from '@mui/material'
import { calendarEvents } from '../data/calendarEvents'
import CalendarEventCard from './CalendarEventCard'

export function CalendarEventList() {
  return (
    <div>
      <div className='display-2'>Calendar of Events</div>
      <Stack
        gap={4}
        mb={4}
        divider={<Divider variant='inset' />}
      >
        {calendarEvents.map((event, idx) => (
          <CalendarEventCard
            key={idx}
            {...event}
          />
        ))}
      </Stack>
      <Button variant='contained'>View All Events</Button>
    </div>
  )
}
