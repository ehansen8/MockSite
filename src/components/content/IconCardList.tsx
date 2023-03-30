import IconCard from './IconCard'
import dataIcon from '/Data-Research-Icon.svg'
import geoIcon from '/Geography-Icon.svg'
import programsIcon from '/Programs-Icon.svg'
import legislativeIcon from '/Legislative-Icon.svg'
import { Grid } from '@mui/material'

const cards = [
  { title: 'Data & Research', src: dataIcon },
  { title: 'Geography & Mapping', src: geoIcon },
  { title: 'Programs & Services', src: programsIcon },
  { title: 'Legislative Fiscal Impacts', src: legislativeIcon },
]

export function IconCardList() {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      columnSpacing={4}
      rowGap={{ xs: 1, sm: 4 }}
      py={{ xs: 3, sm: 6 }}
      bgcolor='#E1E5EB'
    >
      {cards.map(({ title, src }, idx) => (
        <Grid
          key={idx}
          item
          xs={12}
          sm={6}
          md={3}
        >
          <IconCard
            title={title}
            src={src}
          />
        </Grid>
      ))}
    </Grid>
  )
}
