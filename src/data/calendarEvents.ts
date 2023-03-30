export type CalendarEventData = {
  title: string
  date: { month: string; day: number }
  location: string
  time: string
  phone: string
  status?: 'Updated' | 'New' | 'Canceled'
}

export const calendarEvents: CalendarEventData[] = [
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
