import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Box, Stack} from "@mui/material";

export function SearchByCategory() {
    const [category, setCategory] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    return (

            <FormControl variant="standard" sx={{minWidth: 200 }} className={"mb-3"}>
                <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={category}
                    onChange={handleChange}
                    label="Category"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Music</MenuItem>
                    <MenuItem value={2}>Sport</MenuItem>
                    <MenuItem value={3}>Culture</MenuItem>
                </Select>
            </FormControl>

    );
}

export function SearchByWord() {
    const [word, setWord] = React.useState('');

   return (
        <>
            <Stack direction={"row"}>
            <InputBase
                sx={{ minWidth: 200 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search word' }}
                variant="standard"
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Stack>
        </>
    );
    /*return (
        <FormControl variant="standard" sx={{minWidth: 200, m: 0, p:0}} style={{  }}>
            <InputLabel id="demo-simple-select-standard-label">Search</InputLabel>
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </FormControl>
    );*/
}