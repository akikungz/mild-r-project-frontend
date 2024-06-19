import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Appointments,
  DateNavigator,
  MonthView,
  Scheduler,
  TodayButton,
  Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui'
import { Button, Grid, Paper } from '@mui/material'
import { FC } from 'react'

import { events } from './_mock/events'

interface CustomTodayButtonProps {
  setCurrentDate: (date: Date) => void
}

const CustomTodayButton: FC<CustomTodayButtonProps> = ({ setCurrentDate }) => (
  <Button
    type="button"
    variant="contained"
    className="!bg-[#f4b7d2] hover:!bg-[#fdb0d0]"
    onClick={() => setCurrentDate(new Date())}
  >
    วันนี้
  </Button>
)

export default function CalendarPageView() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="min-h-[100vh]"
    >
      <Grid item xs={12} md={10}>
        <Paper>
          <Scheduler data={events} locale="th-TH" height="auto">
            <ViewState defaultCurrentDate={new Date()} />
            <MonthView />
            <Toolbar />
            <DateNavigator />
            <TodayButton buttonComponent={CustomTodayButton} />
            <Appointments />
          </Scheduler>
        </Paper>
      </Grid>
    </Grid>
  )
}
