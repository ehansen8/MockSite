import { Button, Stack } from '@mui/material'
import { updates } from '../data/updates'
import UpdateCard from './UpdateCard'

export function UpdateList() {
  return (
    <div>
      <div className='display-2'>Recent Updates</div>
      <Stack
        gap={4}
        mb={4}
      >
        {updates.map((update, idx) => (
          <UpdateCard
            key={idx}
            {...update}
          />
        ))}
      </Stack>
      <Button variant='contained'>View More</Button>
    </div>
  )
}
