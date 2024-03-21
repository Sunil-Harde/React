import React from 'react'
import { Component } from "react"

export default class Child extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: 'green' }}>
                    <center>GeeksforGeeks</center>
                </h1>

                <div className="container">
                    <div className="progress-bar bg-primary
                            progress-bar-striped
                            progress-bar-animated"
                        aria-valuemax={100}
                        aria-valuenow={70}
                        aria-valuemin={0}

                        style={{ width: '50%' }}>50%</div>
                    <br></br>
                    <div className="progress-bar bg-success
                            progress-bar-striped
                            progress-bar-animated"
                        style={{ width: '90%' }}>90%</div>
                    <br></br>
                    <div className="progress-bar bg-warning
                            progress-bar-striped
                            progress-bar-animated"
                        style={{ width: '30%' }}>30%</div>
                    <br></br>
                    <div className="progress-bar bg-danger
                            progress-bar-striped
                            progress-bar-animated"
                        style={{ width: '10%' }}>10%</div>
                    <br></br>
                    <div className="progress-bar bg-info
                            progress-bar-striped
                            progress-bar-animated"
                        style={{ width: '70%' }}>70%</div>
                </div>
            </div>

        )
    }
}
