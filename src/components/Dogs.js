import React, {Component} from 'react';

class Dogs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dogs:[]
         }
    }

componentDidMount(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then (res => res.json())
    .then(data => {
        this.setState({dogs:data.message})
    })
    .catch(err => {
        console.log('An error occured')
    })
}


    render() { 
        return (
            <div>
           <img src= {this.state.dogs}></img>
            </div>
          );
    }
}
 
export default Dogs;