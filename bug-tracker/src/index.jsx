import React from 'react';
import { render } from 'react-dom'
import { Title } from './components/Title'
import { Form } from './components/Form'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

class App extends React.Component {
  render(){
    return (
      <div className="container">
          <Title />
          <Form />
          <hr />
          <Card />
          <Footer />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
