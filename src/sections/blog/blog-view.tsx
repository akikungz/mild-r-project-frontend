import {
  Avatar,
  Box,
  Card,
  Container,
  Link,
  Pagination,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import { IBlog, blogs } from './_mock/content'

export default function BlogPageView() {
  return (
    <Container maxWidth="lg" className="min-h-[100vh] pb-10 pt-5">
      <Box className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {blogs.map((blog: IBlog, index: number) => (
          <Paper
            key={index}
            elevation={0}
            component={Card}
            className="z-0 flex rounded-[16px]"
          >
            <Stack className="flex w-[388px] flex-row gap-[8px] p-[24px] pb-[16px]">
              <Box className="mb-[16px] flex items-center justify-end">
                <Box className="!text-[0.75rem] !font-[400] !leading-6 text-gray-400">
                  19 Jun 2024
                </Box>
              </Box>
              <Stack className="flex flex-grow flex-col gap-[8px]">
                <Link
                  // component={Typography}
                  variant="subtitle2"
                  className="!m-0 cursor-pointer overflow-hidden !text-inherit !no-underline hover:!underline"
                  href={`/blog/${blog.id}`}
                >
                  <Typography
                    variant="subtitle2"
                    className="text-ellipsis !text-[0.875rem] !font-[600] !leading-[1.57143]"
                  >
                    {blog.title}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  className="!m-0 line-clamp-[2] overflow-hidden text-ellipsis !text-[0.875rem] !font-[400] !leading-[1.57143]"
                >
                  {blog.detail}
                </Typography>
              </Stack>
            </Stack>
            <Box className="relative hidden h-[240px] w-[180px] flex-shrink-0 p-[8px] md:block">
              <Avatar className="!absolute right-[16px] top-[16px] z-[9] flex h-[40px] w-[40px] flex-shrink-0 select-none items-center overflow-hidden rounded-[50%] text-[1.25rem] leading-4">
                <img
                  alt="avatar1"
                  src="https://api-prod-minimal-v6.vercel.app/assets/images/avatar/avatar-1.webp"
                />
              </Avatar>
              <Box className="relative inline-block h-[100%] overflow-hidden rounded-[12px] align-bottom">
                <span className="inline-block h-[100%] w-[100%] bg-cover align-bottom text-transparent blur-0">
                  <Box
                    component="img"
                    className="h-[100%] opacity-[1]"
                    src="https://api-prod-minimal-v6.vercel.app/assets/images/cover/cover-1.webp"
                  />
                </span>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
      <Pagination
        count={10}
        boundaryCount={2}
        className="mt-[40px] md:mt-[64px]"
        sx={{
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </Container>
  )
}
