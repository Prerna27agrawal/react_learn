// It defines a Enforcement property and then assigns it a function that declared with the function keyword.
// And he said that use the function keyword.
// One of the special features of aero functions is that they automatically bind the value of this for
// all the code inside the function.
// So we can replace this default implementation right here with this usual syntax we've been using so
// far with a arrow function instead.

// just one little issue here every time that we have made use of props so far throughout this course
// it's always been a functional component.
// This is the first time that we are making use of props inside of a class based component.
// One little difference between the two when we are in a class based component we reference the props
// object with this props.

import React from 'react';
 
class SearchBar extends React.Component { 
    // onInputChange(event){
    //     console.log(event.target.value);

    // }
    state ={term: ''};
    onFormSubmit = (event)=>{
        event.preventDefault();
       this.props.onSubmit(this.state.term);
        // console.log(this.state.term);
    }

    render(){
        return(
        <div className="ui segment">
           <form onSubmit={this.onFormSubmit} className="ui form" >
               <div className="field">
                   <label>Image Search</label>
                {/* So rather than calling this(onInputChange) function with a set of parentheses we'd leave the parentheses off by leaving */}
                {/* off the parentheses we are passing a reference to this function to the input element so that the input */}
                {/* can call that function at some point in time in the future. */}
                   <input
                    type="text"
                    value={this.state.term} 
                   onChange={e=> this.setState({term:e.target.value})}
                   />
                   {/* can be written like this also */}
                   {/* <input type="text" onChange={(event)=>console.log(event.target.value)}/> */}
                   </div>
           </form>
        </div>
        );
    }
}
export default SearchBar;