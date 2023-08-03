import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = { exercises: [] };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
              .then((response) => {
                this.setState({ exercises: response.data })
                .catch((error) => {
                    console.log(error.message);
                })
              })
    }
    render(){
        return (
            <div>
                <p>You are on the exercise list component</p>
            </div>
        )
    }
}
