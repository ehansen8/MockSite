import { Box, Divider, Grid, Link, Typography } from '@mui/material'

const links = [
  'Overview and History of the South Carolina State Budget',
  'Overview and History of the South Carolina State Budget',
  'Overview and History of the South Carolina State Budget',
  'Employer Contribution Trends',
  'Employer Contribution Trends - June 4, 2019',
  'Employer Contribution Trends - June 4, 2019',
  'Appropriation Bills and Acts',
  'Executive Budget Office State Agency Budget Plans(Requests)',
  'Executive Budget Office State Agency Budget Plans(Requests)',
]

function Services() {
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
        {links.map((link) => (
          <Grid
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
export default Services
