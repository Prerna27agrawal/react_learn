//NOTES
// We called Set States said state is a function that gets put on our app component automatically when
// we extended re-act dot component.
// So a component lifecycle method is a function that we can optionally define inside of our class based
// components
// we can take state from one component and pass it as a prop down to the child in this case the seasoned
// display.
// or icon insatll npm semantic-ui-css and then import it
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import "semantic-ui-css/semantic.min.css";
//using function component
// const App = () =>{
//     window.navigator.geolocation.getCurrentPosition(
//         position=>console.log(position),
//         err=> console.log(err)
//     );
//      return <div>hi there</div>
// };


//using class component
class App extends React.Component {
    //initialise state
    // constructor(props){
    //     //necessary to call super
    //     super(props);
    //  //This is the only time we do direct assignment to this.state
    //     this.state = { lat:null , errorMessage: ''};
    //     // window.navigator.geolocation.getCurrentPosition(
    //     //     position => {
    //     //         //we called setState
    //     //         this.setState({lat:position.coords.latitude});
    //     //     },//console.log(position),
    //     //     //we did not do
    //     //     //this.setState.lat = position.coords.latitude
    //     //     err => {
    //     //         this.setState({errorMessage:err.message});
    //     //      }//console.log(err)
    //     // );
    // }

    //instead of using constructor and defining state we can define in the following way also
    state = {lat: null, errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
                position => this.setState({lat:position.coords.latitude}),
                err => this.setState({errorMessage:err.message})
            );
    }
//helper method for render
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
        }
        else{
            return <Spinner message="Please accept location request"/>;
        }
   
    }
    //React says we have to define render
    render(){
           return(
               //sometimes when we want all the conditions to have something in common
               //no border ed will be visible just an example
                   <div className="border red">
                   {this.renderContent()}
               </div>
           )
    }
}
ReactDOM.render(<App />,document.querySelector("#root"));