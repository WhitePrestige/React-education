import React from 'react';
import {string} from 'prop-types';

class Test extends React.Component{
  static propTypes = {
    name: string,
    lastName: string,
  }

  state = {
    count: 0
  }

  handleButton = () => {
    this.setState({ count: this.state.count + 1});
    console.log('click');
  }

  render(){
    const { name, lastName} = this.props;
    // два способа отображения
    return(
      <div>
        { this.state.count } просто текст
        <button onClick={ this.handleButton }> click Me </button>
        { name }
        { lastName }
      </div>
    )
  }
}
export default Test;
