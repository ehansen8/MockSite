import { Box, Divider, Grid, Link, Typography } from '@mui/material'
import { services } from '../../data/services'

export function ServiceList() {
  return (
    <Box mb={3}>
      <Typography
        color='#1B3A61'
        textTransform='uppercase'
        fontSize='1.875rem'
        lineHeight={1.2}
        mb={2}
      >
        Popular Services and Links
      </Typography>
      <Divider sx={{ mb: 3, borderBottomWidth: 10, borderColor: '#1B3A61' }} />
      <Grid
        container
        spacing={3}
        pt={2}
      >
        {services.map((link, idx) => (
          <Grid
            key={idx}
            item
            sm={6}
            md={4}
          >
            <Link>{link}</Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
