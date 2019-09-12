import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Test from './Test';

@inject('store')
@observer
export default class Home extends Component {

  render() {
		const store = this.store;
		const divStyle = {
      textAlign: 'center',
    }
    const names = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignItems: 'baseline',
      alignContent: 'stretch'
    }
    const name = {
      wight: '30%',
    }
    const line = {
		  wight: '20px',
      height: '2px',
      color: 'orange'
    }
		return (
          <div style={divStyle}>
            <div style={divStyle}>
              WHAT OUR CUSTOMERS ARE SAYING
              <div style={line}></div>

              <div style={names}>
                <div style={name}>
                  Jeremy H.
                </div>

                <div style={name}>
                  Roland
                </div>

                <div style={name}>
                  Mike
                </div>
              </div>
            </div>
          </div>

    )
	}
}
