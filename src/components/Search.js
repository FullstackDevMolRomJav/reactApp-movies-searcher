import React, { Component, useState } from 'react'

//export default class Search extends Component 
const Search = (props) => {
    //render() {
        const [searchValue, setSearchValue ] = useState("");
        const handleSearchInputChanges = (e) => {
            setSearchValue(e.target.value);
        }
        const resetInputField = () => {
            setSearchValue("");
        }
        const callSearchFunction = (e) => {
            e.preventDefault();
            props.search(searchValue);
            resetInputField();
        }

        return (
            <form className="search">
                <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"/>
                <input onClick={callSearchFunction} type="submit" value="SEARCH" />
            </form>
        )
    //}
}

export default Search;