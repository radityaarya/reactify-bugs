// console.log('Hello Bandung');

import React from 'react';
import {render} from 'react-dom';

class Hello extends React.Component{
  render() {
    return <p> Hello Radit! </p>
  }
}

render(<Hello />, document.getElementById('app'))
