/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Grid,
  Icon,
  IconButton,
  Slider,
  Typography,
  styled,
} from '@mui/material'
import { useRef, useState } from 'react'
import {
  MdPause,
  MdPlayArrow,
  MdRepeat,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeUp,
} from 'react-icons/md'
import ReactPlayer from 'react-player'

import Duration from './components/duration'

const RightColumn = styled(Grid)({
  height: '100%',
})

const SongList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '60%',
})

const Song = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '20%',
  width: '100%',
  borderBottom: '1px solid lightgrey',
})

const SongInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '50%',
  padding: '5px',
})

const SongTime = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '30%',
})

export default function SongPageView() {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.8)
  const [muted, setMuted] = useState(false)
  const [played, setPlayed] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1.0)
  const [loop, setLoop] = useState(false)
  const [seeking, setSeeking] = useState(false)

  const playerRef = useRef(null)
  const handlePlayPause = () => setPlaying(!playing)
  const handleToggleLoop = () => setLoop(!loop)
  const handleOnPlaybackRateChange = (speed: any) =>
    setPlaybackRate(parseFloat(speed))
  const handlePlay = () => {
    console.log('onPlay')
    setPlaying(true)
  }
  const handlePause = () => {
    console.log('onPause')
    setPlaying(false)
  }
  const handleSeekMouseDown = () => setSeeking(true)
  const handleSeekChange = (e: any) =>
    setPlayed(parseFloat(e.target.value) * 100)
  const handleSeekMouseUp = (e: any) => {
    setSeeking(false)
    if (playerRef.current) {
      ;(playerRef.current as any).seekTo(parseFloat(e.target.value) * 100)
    }
  }
  const handleProgress = (state: any) => {
    console.log('onProgress', state)
    if (!seeking) {
      setPlayed(state.played)
    }
  }
  const handleEnded = () => {
    console.log('onEnded')
    setPlaying(loop)
  }
  const handleDuration = (duration: any) => {
    console.log('onDuration', duration)
    setDuration(duration)
  }

  return (
    <Box className="flex h-screen flex-col">
      <Box className="flex h-full flex-row">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="player-wrapper">
              <ReactPlayer
                ref={playerRef}
                className="react-player"
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=-fxIAm8dozk"
                playing={playing}
                loop={loop}
                playbackRate={playbackRate}
                volume={volume}
                muted={muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={handlePlay}
                onPause={handlePause}
                onPlaybackRateChange={handleOnPlaybackRateChange}
                onEnded={handleEnded}
                onProgress={handleProgress}
                onDuration={handleDuration}
              />
            </div>
            <div className="flex items-center justify-center">
              <Box className="relative w-[100%] overflow-hidden bg-white p-6">
                <Typography
                  id="title"
                  className="mt-4 text-center text-purple-600"
                >
                  รักษาหัวใจ
                </Typography>
                <Box className="mt-4">
                  <Slider
                    className="text-purple-600"
                    min={0}
                    max={100}
                    value={played * 100}
                    onMouseDown={handleSeekMouseDown}
                    onChange={handleSeekChange}
                    onMouseUp={handleSeekMouseUp}
                  />
                  <Box className="mt-1 flex justify-between text-xs text-purple-600">
                    <Duration seconds={duration * played} />
                    <Duration seconds={duration * (1 - played)} />
                  </Box>
                </Box>
                <Box className="mt-4 flex items-center justify-between">
                  <IconButton onClick={handleToggleLoop}>
                    <MdRepeat className="text-purple-600" />
                  </IconButton>
                  <Box className="flex items-center">
                    <IconButton>
                      <MdSkipPrevious className="text-purple-600" />
                    </IconButton>
                    <Button
                      onClick={handlePlayPause}
                      className="flex h-[4.5rem] w-[4.5rem] items-center justify-center !rounded-full !bg-purple-600"
                    >
                      {playing ? (
                        <MdPause className="text-white" size={'1.7rem'} />
                      ) : (
                        <MdPlayArrow className="text-white" size={'1.7rem'} />
                      )}
                    </Button>
                    <IconButton onClick={() => {}}>
                      <MdSkipNext className="text-purple-600" />
                    </IconButton>
                  </Box>
                  <IconButton>
                    <MdVolumeUp className="text-purple-600" />
                  </IconButton>
                </Box>
                {/* <Box className="absolute bottom-6 left-1/2 flex w-full -translate-x-1/2 transform items-center justify-center">
                  <Box className="flex w-3/4">
                    <Slider
                      min={0.01}
                      max={1}
                      step={0.01}
                      value={volume}
                      // onChange={handleVolumeChange}
                      className="text-purple-600"
                    />
                    <Typography className="my-auto !ml-3">
                      {volume.toString()}
                    </Typography>
                  </Box>
                </Box> */}
              </Box>
            </div>
          </Grid>
          <RightColumn xs={12} md={6} className="w-100 bg-[#fdc9de] p-4">
            <Box className="flex h-full flex-col">
              <Box className="mb-4 flex items-center justify-between">
                <a href="#" className="text-sm uppercase">
                  back
                </a>
                <IconButton>
                  <Icon>keyboard_backspace</Icon>
                </IconButton>
              </Box>
              <Box className="mb-4 flex flex-col">
                <Typography variant="body2" className="uppercase">
                  alternative /{' '}
                  <span style={{ color: 'rgb(91, 91, 189)' }}>2007</span>
                </Typography>
                <Typography variant="h3" className="font-bold uppercase">
                  i see you
                </Typography>
              </Box>
              <SongList>
                {[...Array(7)].map((_, index) => (
                  <Song key={index}>
                    <SongInfo>
                      <Icon>play_arrow</Icon>
                      <Typography variant="body1">
                        dangerous / the xx
                      </Typography>
                    </SongInfo>
                    <SongTime>
                      <Icon>more_vert</Icon>
                      <Typography variant="body2">2:33</Typography>
                    </SongTime>
                  </Song>
                ))}
              </SongList>
            </Box>
          </RightColumn>
        </Grid>
      </Box>
    </Box>
  )
}
