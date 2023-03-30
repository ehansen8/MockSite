import { Box, Chip, Link, Stack, Typography } from '@mui/material'
import { UpdateData } from '../../data/updates'

function UpdateCard({ title, content, date, status }: UpdateData) {
  return (
    <Stack gap={0.5}>
      <Link
        href='#'
        fontWeight={600}
      >
        {title}
      </Link>
      {content && <Typography>{content}</Typography>}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Typography
          color='#666666'
          fontWeight={700}
        >
          Published:{' '}
        </Typography>
        <Typography
          color='#666666'
          fontWeight={300}
        >
          {date}
        </Typography>
        <Chip label={status} />
      </Box>
    </Stack>
  )
}
export default UpdateCard
