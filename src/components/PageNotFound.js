import React from 'react';
import { Container} from 'reactstrap';

class PageNotFound extends React.Component {

    render() {
      return (
        <div>
            <Container>
                <br/><br/><br/>
                <h3 align="center">Sorry the Page You're  requesting is unavailable!</h3>
                <br/><br/><br/>
            </Container>
        </div>
      );
    }
  }
  
  export default PageNotFound;
