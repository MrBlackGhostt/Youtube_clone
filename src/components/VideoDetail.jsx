import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Typography, Box, Stack } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { Video, Videos } from "./"

import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetails = () => {
  const [videoDetail, setVideoDetail] = useState([])
  const [relatedVideos, setRelatedVideos] = useState(null)
  const { id } = useParams()

  // const fetchVideoDetail = async () => {
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then(
      (data) => setVideoDetail(data.items[0]),
      console.log(videoDetail, "adadadae")
    )
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    )
  }, [])

  if (!videoDetail?.snippet) return "Loading..."

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              position: "Sticky",
              top: "86px",
              width: "100%",
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              px={2}
              py={1}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color='#fff'
                  fontWeight='bold'
                  variant={{ sm: "subtitle1", md: "h6" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "#fff", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack
                direction='row'
                gap='20px'
                alignItems='center'
                color='#fff'
              >
                <Typography variant='body1' sx={{ opacity: "0.7" }}>
                  {" "}
                  {parseInt(likeCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: "0.7" }}>
                  {" "}
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          <Videos videos={relatedVideos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails
