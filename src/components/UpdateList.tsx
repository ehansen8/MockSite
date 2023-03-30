import { Button, Stack } from '@mui/material'
import { updates } from '../data/updates'
import UpdateCard from './UpdateCard'

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
