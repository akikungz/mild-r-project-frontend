import { Box, Button, Grid } from '@mui/material'
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import { LuImagePlus } from 'react-icons/lu'

import { IImage, images } from './_mock/images'

export default function GalleryPageView() {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} className="p-5 md:px-0">
          <div className="container mx-auto grid grid-cols-1 gap-2">
            <Box display="flex" justifyContent="end">
              <Button
                type="button"
                variant="contained"
                size="large"
                className="!bg-[#f4b7d2]"
              >
                <LuImagePlus className="mr-3" />
                ฝากผลงาน
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} className="px-5 pb-5 md:px-0">
          <SlideshowLightbox className="container mx-auto grid grid-cols-1 gap-2 md:grid-cols-3">
            {images.map((image: IImage, index: number) => {
              return (
                <img
                  className="h-[300px] w-full rounded"
                  src={image.src}
                  alt={image.name}
                  key={index}
                />
              )
            })}
          </SlideshowLightbox>
        </Grid>
      </Grid>
    </>
  )
}
