import React, {Component} from 'react';
import $ from 'jquery';


class Foxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foxes:[]
          }
    }

    componentDidMount(){

        const API_KEY = '';
        const URL = "https://pixabay.com/api/?key=13903825-3372c5bc650dcd1a23337cc95&q=travel";
        $.getJSON(URL, function(data){
       
            $.each(data.hits, function(i, hit){
                console.log(hit.pageURL);})
                this.setState({foxes: hit.pageURL})    
       
        });
	

    

    }
    render() { 
        return (
            <div>
           <img src= {this.state.foxes}></img>
            </div>
          );
    }
}
 
export default Foxes;