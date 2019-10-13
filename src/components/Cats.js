import React, { Component } from 'react';
import ImageFrame from './ImageFrame';

const axios = require('axios');


class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: []
        }
    }

    componentDidMount() {
        axios
            .get('https://api.thecatapi.com/v1/images/search')
            .then(data => {
                this.setState({ cats: data.data[0].url })
            })
            .catch(err => {
                console.log('An error occured')
            })
    }





    render() {
        return (
                 <ImageFrame>
                <img src={this.state.cats} alt='cat'className="imageFrame__image"></img>
                </ImageFrame>
        );
    }
}

export default Cats;