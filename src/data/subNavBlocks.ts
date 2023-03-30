export type SubnavBlockData = {
  title: string
  links: string[]
}

export const subnavBlocks: SubnavBlockData[] = [
  {
    title: 'Data & Research',
    links: [
      'Economy',
      'State Finances',
      'Education',
      'Healthcare',
      'Local Government',
      'Population and Demographics',
      'State Register Calculations',
      'Presentations',
    ],
  },
  {
    title: 'Geography & Mapping',
    links: [
      'Transportation Carrier Network (Uber)',
      'SC Real Time Network',
      'SC State GIS',
      'Maps',
      'Interactive Mapping',
      'Statewide Aerial Imagery',
    ],
  },
  {
    title: 'Programs & Services',
    links: [
      'Precinct Demographics and Redistricting',
      'State 911 Program',
      'Data Services and Online Solutions',
      'Geodetic Survey',
      'Fiscal Analysis',
      '2020 Census',
    ],
  },
  {
    title: 'Legislative Fiscal Impacts',
    links: [
      'Current General Assembly Session',
      'Previous General Assembly Session',
      'Forms',
    ],
  },
]
