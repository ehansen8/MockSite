import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'

export default function IconCard({
  title,
  src,
}: {
  title: string
  src: string
}) {
  return (
    <Card
      sx={{ height: '100%', width: '100%' }}
      elevation={2}
    >
      <CardActionArea sx={{ height: '100%' }}>
        <CardContent
          sx={{
            px: 3,
            py: { xs: 2, sm: 5 },
            bgcolor: 'white',
            display: 'flex',
            flexDirection: { xs: 'row', sm: 'column' },
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            textAlign={{ xs: 'left', sm: 'center' }}
            width={{ xs: '10%', sm: '50%' }}
          >
            <img
              src={src}
              alt={title}
            />
          </Box>
          <Typography
            color='#1B3A61'
            textAlign={{ xs: 'left', sm: 'center' }}
            fontSize='1.5rem'
            variant='h2'
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
