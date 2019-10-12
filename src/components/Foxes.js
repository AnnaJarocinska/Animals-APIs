import React, { Component } from 'react';
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
            .done(res => this.setState({ foxes: res.hits[1].largeImageURL }))


    }
    render() {
        return (
            <div>
                <img src={this.state.foxes} alt="fox"></img>
            </div>
        );
    }
}

export default Foxes;