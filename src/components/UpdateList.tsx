import { Button, Stack } from '@mui/material'
import UpdateCard from './UpdateCard'

export type Update = {
  title: string
  content?: string
  date: string
  status: 'Updated' | 'New'
}

const updates: Update[] = [
  {
    title: 'Local Government Finance',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam voluptas labore ab!',

    date: 'Jan 2, 2020',
    status: 'Updated',
  },
  {
    title: 'Transportation Network Carrier Maps',
    date: 'Jan 2, 2020',
    status: 'New',
  },
  {
    title:
      'BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam voluptas labore ab!',

    date: 'Dec 16, 2019',
    status: 'Updated',
  },
  {
    title: 'Budget Development',
    date: 'Dec 16, 2019',
    status: 'New',
  },
  {
    title: 'November 2019 General Fund Revenue Digest',
    date: 'Dec 13, 2019',
    status: 'New',
  },
]

function UpdateList() {
  return (
    <div>
      <div className='display-2'>Recent Updates</div>
      <Stack
        gap={4}
        mb={4}
      >
        {updates.map((update) => (
          <UpdateCard {...update} />
        ))}
      </Stack>
      <Button variant='contained'>View More</Button>
    </div>
  )
}
export default UpdateList
