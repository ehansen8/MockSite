export type UpdateData = {
  title: string
  content?: string
  date: string
  status: 'Updated' | 'New'
}

export const updates: UpdateData[] = [
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
