import React from 'react-dom';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class FieldGroup extends React.Component {



  render() {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
}
