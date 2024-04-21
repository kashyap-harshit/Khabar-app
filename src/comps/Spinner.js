import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className='my-4'>
                <div className="spinner"><div className=" spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div></div>
            </div>
        )
    }
}

export default Spinner
