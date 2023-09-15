import React, { useEffect, useState } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { fetchFromAPI } from "../utils/fetchFromAPI"
import { Videos } from "./"

import { useParams } from "react-router-dom"

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items[0])
    )
  }, [])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: "white" }}>
        Search Result for:{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span>videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
