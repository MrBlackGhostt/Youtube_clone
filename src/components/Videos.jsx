import React from "react"
import { Stack, Box } from "@mui/material"

import { VideoCard, ChannelCard } from "./index"

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...."
  if (!videos || !Array.isArray(videos)) {
    return null // Return null or a loading indicator, or some other fallback UI
  }

  return (
    <Stack direction={direction} flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
