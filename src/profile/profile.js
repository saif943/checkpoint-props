
import React from 'react'
import PropTypes from "prop-types"
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


const Profile = (props) => {
    return (
        <CardDeck>
        <Card>
        {props.children}
        <Card.Body>
              <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          Full Stack Web Developer
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </CardDeck>
    )
}

export default Profile
Profile.defaultProps ={
  Title:"Full-Name",
  Text:"bio",
};
Profile.propTypes = {
  title:PropTypes.string,
  Btn:PropTypes.func,
  children:PropTypes.object
}