import React from 'react';
import './search-bar.css';

class SearchBar extends React.Component {

    state = {
        query: ""
    };




    render() {
        return (
            <div className="search-bar">
                <form onSubmit={(event)=>{event.preventDefault();this.props.onSub({q: this.state.query});}}>
                    <input
                    type="text"
                    placeholder="Search For Specific Location"
                    onChange={(e)=> {this.setState({query: e.target.value})}} />
                </form>

                <button onClick={
                    () => {
                        window.navigator.geolocation.getCurrentPosition((pos) => {
                            this.props.onSub({
                                lat: pos.coords.latitude,
                                lon: pos.coords.longitude
                            })
                    })
                    }
                }><ion-icon name="locate"></ion-icon></button>
            </div>
        );
    }
}

export default SearchBar;