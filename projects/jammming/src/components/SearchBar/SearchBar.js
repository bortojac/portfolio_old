import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.state = {
            searchTerm: ''
        };
    }

    // update the searchTerm state when the input changes
    handleTermChange(event) {
        //console.log(event.target.value);
        this.setState({searchTerm: event.target.value});
    }

    // search Spotify API with onSearch passed down from App.js
    search() {
        this.props.onSearch(this.state.searchTerm);
    }
    

    render() {
        return (
            <div className="SearchBar">
            <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <a onClick={this.search}>SEARCH</a>
          </div>

        );
    }
}

export default SearchBar;