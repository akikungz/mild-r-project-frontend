import { CalendarPageView } from '@/sections/calendar'
import { Helmet } from 'react-helmet-async'

// ----------------------------------------------------------------------

export default function CalendarPage() {
  return (
    <>
      <Helmet>
        <title>Calendar</title>
      </Helmet>

      <CalendarPageView />
    </>
  )
}
