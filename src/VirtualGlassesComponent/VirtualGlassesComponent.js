import React, { Component } from 'react'
import { dataGlasses } from './dataGlasses'

export default class VirtualGlassesComponent extends Component {

    state = {
        listGlasses: dataGlasses,
        selected: 1
    }
    
    handleChangeGlasses = (id) => {
        this.setState({
            selected : id - 1
        })
    }

  render() {
    console.log(this.state.listGlasses[this.state.selected].name)
    return (
      <div>
        <div className="container vglasses py-3">
            <div className="row  justify-content-between">
                <div className="col-5 vglasses__right p-0">
                    <div className="vglasses__card">
                        <div className="mb-2 text-right mt-2 mr-2">
                            </div>
                        <div className="vglasses__model" id="avatar" />
                        <div id="glassesInfo" className="vglasses__info">
                            <h2>{this.state.listGlasses[this.state.selected].name}</h2>
                            <p>{this.state.listGlasses[this.state.selected].desc}</p>
                        </div>
                        <div className="vglasses__test">
                            <img src={this.state.listGlasses[this.state.selected].url} alt="" />
                        </div>
                    </div>
                </div>

                <div className="col-5 vglasses__right p-0">
                    <div className="vglasses__card">
                        <div className="mb-2 text-right mt-2 mr-2">
                            </div>
                        <div className="vglasses__model" id="avatar" />
                    </div>
                </div>

                <div className="vglasses__under row">
                    {
                        this.state.listGlasses.map(item => {
                            return (
                                <div className='border border-dark m-2' onClick={() => {this.handleChangeGlasses(item.id)}}>
                                    <img src={item.url} alt="" width="180px" height="120px"/>
                                </div>
                            )
                        })
                    }

                    
                </div>
            </div>
        </div>
      </div>
    )
  }
}
