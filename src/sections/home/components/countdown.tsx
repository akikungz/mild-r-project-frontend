import { pad } from '@/utils/format-number'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'

const current = new Date()
const exampleExpired = new Date(`${current.getFullYear()}-12-12`)

interface ITimer {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Timer: FC<ITimer> = ({ days, hours, minutes, seconds }) => (
  <>
    <Box className="mx-2 inline-block">
      <Typography
        id="days"
        component="span"
        className="xs:text-2xl block text-4xl sm:text-3xl"
      >
        {days}
      </Typography>
      <Typography className="label xs:text-sm text-lg text-gray-500 sm:text-base">
        วัน
      </Typography>
    </Box>
    <Box className="mx-2 inline-block">
      <Typography
        id="hours"
        component="span"
        className="xs:text-2xl block text-4xl sm:text-3xl"
      >
        {pad(hours, 2)}
      </Typography>
      <Typography className="label xs:text-sm text-lg text-gray-500 sm:text-base">
        ชั่วโมง
      </Typography>
    </Box>
    <Box className="mx-2 inline-block">
      <Typography
        id="minutes"
        component="span"
        className="xs:text-2xl block text-4xl sm:text-3xl"
      >
        {pad(minutes, 2)}
      </Typography>
      <Typography className="label xs:text-sm text-lg text-gray-500 sm:text-base">
        นาที
      </Typography>
    </Box>
    <Box className="mx-2 inline-block">
      <Typography
        id="seconds"
        component="span"
        className="xs:text-2xl block text-4xl sm:text-3xl"
      >
        {pad(seconds, 2)}
      </Typography>
      <Typography className="label xs:text-sm text-lg text-gray-500 sm:text-base">
        วินาที
      </Typography>
    </Box>
  </>
)

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <span>You are good to go!</span>
  } else {
    return (
      <Timer days={days} hours={hours} minutes={minutes} seconds={seconds} />
    )
  }
}

export default function CountdownComponent() {
  return (
    <Box className="countdown text-center">
      <Countdown date={exampleExpired} renderer={renderer} />
    </Box>
  )
}
