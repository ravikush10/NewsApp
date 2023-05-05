import React, { Component } from 'react'
import loading from './loading.gif.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center" >
                <img className="my-3" src={loading} alt="loading" width="100" height="100" />
            </div>
        )
    }
}

export default Spinner
