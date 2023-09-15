import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value) // Update the state when the input value changes
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`) // Navigate to the search results page
      setSearchTerm("") // Clear the search term from the state
    }

    // Handle the form submission or search action using the searchValue
    // For example, you can use the value to perform a search and navigate to the search results page.
  }

  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }, // margin right for mobile
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm} // Bind the input value to the state
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
