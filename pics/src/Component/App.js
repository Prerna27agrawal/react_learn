import React from 'react'
// import axios from 'axios';
import  unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
    state = {images: [] };
     onSearchSubmit= async (term)=>{
        const response = await unsplash.get('/search/photos',{
            params:{query:term},
            //  headers:{
            //     Authorization: ' Client-ID SZrPLsRo1D1f1doMztzcUrywnTio5HkIvmyjKW8Z6vI'

            //  }
            });
            this.setState({images:response.data.results});
            //    console.log(response.data.results);
    }
render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            {/* Found:{this.state.images.length} images */}
           <ImageList images={this.state.images}/>
        </div>
    ); 
  }
}
export default App;