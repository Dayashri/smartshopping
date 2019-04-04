import React from "react";
import { Button } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customerId: "" };
  }

  handleValidSubmit = (event, values) => {
    this.setState({ customerId: values.customerId }, () => {
      this.props.onSubmit(values.customerId);
    });
  };

  handleInvalidSubmit = (event, errors, values) => {
    this.setState({ customerId: values.customerId, error: true });
    console.log(`Login failed`);
  };

  render() {
    return (
      <AvForm
        onValidSubmit={this.handleValidSubmit}
        onInvalidSubmit={this.handleInvalidSubmit}
      >
        <AvField
          name="customerId"
          label="Customer Id"
          type="text"
          validate={{
            required: true,
          }}
          errorMessage="Please enter the customerId!"
        />

        <Button id="submit" color="success">Submit</Button>
      </AvForm>
    );
  }
}
