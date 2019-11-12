import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    // Every time when we create instance of App class constructor function is the very first thing to be called before any thing else 
    state = {lat : null, errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => { 
                //Here we called setState
                this.setState({lat: position.coords.latitude });
                 
                //we will not ever assign directly to this.state like this .. we always use setState like above
                // this.state.lat = position.coords.latitude
             },
            (err) => {
                this.setState({errorMessage: err.message})
                //so we learn here that when ever update the state we dont have to update all properties in it.
            }
        );
    }

    componentDidUpdate(){
        console.log('My Component Just update');
    }

    //Helper Function
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner/>
    }

    // React says we have to define render!!!
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}



ReactDOM.render(<App /> , document.querySelector('#root'))