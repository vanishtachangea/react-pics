import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
//import axios from 'axios'
import ImageList from './ImageList';

import unsplash from './api/unsplash';
class App extends React.Component{
    state ={
        images:[]
    }

    onSearchSubmit= async (term)=>{
        console.log(term);
        //const response = await axios.get('https://api.unsplash.com/search/photos', {
            const response = await unsplash.get('/search/photos',{
            params:{
                query:term
            }
        })/* .then(
            (response)=>{
                console.log(response.data.results);
            }
        ) */;
        console.log(this);
        this.setState({images: response.data.results});
    }

    render(){  
        return(
            <div className="ui container" style={{marginTop:'10px'}}> 
                <SearchBar onSubmitMethod={this.onSearchSubmit}/>
                {/* Found:{this.state.images.length} images */}
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}
export default App;