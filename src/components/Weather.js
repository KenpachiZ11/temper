import React, { Component } from 'react'

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            temperatura: 'none'
        }
    }
    componentDidMount() {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
        .then(res => res.json())
        .then(result => {
            let  weather  = result.hourly;
            console.log(weather.temperature_2m[0]);

            this.setState({
                temperatura: weather.temperature_2m[0]
            })
        })
    }
    render() {

        const weather = {
            width: 800,
            height: 800,
            background: 'grey',
            margin: '100px auto',
            borderRadius: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
        return (
            <div style = {weather}>
                <h2>{this.state.temperatura} - Это температура КОТОРУЮ МЫ ВЫВЕЛИ!</h2>
            </div>
        )
    }
}
