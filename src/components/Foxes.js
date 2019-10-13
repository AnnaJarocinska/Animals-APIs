import React, { Component } from 'react';
import ImageFrame from './ImageFrame';
import $ from 'jquery';


class Foxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foxes: []
        }
    }

    componentDidMount() {

        $.ajax({
            url: "https://pixabay.com/api/?key=13903825-3372c5bc650dcd1a23337cc95&q=" + encodeURIComponent('fox'),
            dataType: "json"
        })
            .done(res => this.setState({ foxes: res.hits[(Math.floor(Math.random()*10))].largeImageURL }));

    }
    render() {
        return (
                <ImageFrame>
                <img src={this.state.foxes} alt="fox" className="imageFrame__image"></img>
                </ImageFrame>
        );
    }
}

export default Foxes;