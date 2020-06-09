import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{

    state={term:''};
    onFormSubmit= (event)=>{
        event.preventDefault();
       // console.log(this.state.term+"ljlkjkpp");
        this.props.onSubmitMethod(this.state.term);
    }
    render(){
        return (
        <div className="ui segment">
            <form className="ui form"  onSubmit={this.onFormSubmit} >
            <div className="field">   
                <label>Image Search </label>             
                <input onChange={(e)=>this.setState({term:e.target.value.toUpperCase()})}  type="text" value={this.state.term}/>
             </div>
            </form>
        </div>
    );
    }
}
export default SearchBar;