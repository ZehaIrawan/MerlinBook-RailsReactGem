import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

//Action
function getThings() {
  console.log('getThings() Action!!');
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`v1/things.json`)
      // .then(response => console.log(response))
      .then(response => response.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(error => console.log(error));
  };
}

//Dispatch Action
export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json,
  };
}

class HelloWorld extends React.Component {
  render() {
    const { things } = this.props;
    const thingsList = things.map(thing => {
      return (
        <li key={thing.guid}>
          {thing.name} {thing.guid}
        </li>
      );
    });
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>
          getThings
        </button>
        <br />
        <ul>{thingsList}</ul>
      </React.Fragment>
    );
  }
}

const StructuredSelector = createStructuredSelector({
  things: state => state.things,
});

const mapDispatchToProps = { getThings };

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

export default connect(
  StructuredSelector,
  mapDispatchToProps,
)(HelloWorld);
