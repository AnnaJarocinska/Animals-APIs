import React, {Component} from 'react';
import ImageFrame from '../components/ImageFrame';

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
            <ImageFrame>
           <img src= {this.state.dogs} alt="dog" className="imageFrame__image"></img>
            </ImageFrame>
          );
    }
}
 
export default Dogs;