
import React, { Component } from "react";
import { Card, Header} from 'semantic-ui-react'

class NoRuter extends Component {
  render() {
    return (
    <Card.Group>
      <Card fluid color='red' 
        header='Error!!'
        description='Lo siento estas perdido!🤮' />
    </Card.Group>
    );
  }
}

export default NoRuter;