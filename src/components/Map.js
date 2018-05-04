import { map } from 'lodash'
import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import { connect } from 'react-redux';
import { compose, withProps } from 'recompose';
import { toggleEvent } from '../redux/events';

const GOOGLE_MAPS_API_KEY = 'AIzaSyDUl-ub3O_XrUZ71artT6KIksNxSJmKn1U';

class MapView extends Component {
  render() {
    const { events } = this.props;
    const { toggle } = this.props;

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 23.903687, lng: 121.07937 }}
        onClick={() => {}}
        ref={mapRef => {
          this.map = mapRef;
        }}
      >
        { events.map(event => (
          <Marker
            key={event.id}
            position={event.geocode}
            onClick={() => toggle(event)}
          >
            { event.selected &&
              <InfoWindow onCloseClick={() => toggle(event)}><div>Hello</div></InfoWindow>
            }
          </Marker>
        ))}
      </GoogleMap>
    )
  }
}

const mapStateToProps = state =>  ({
  events: map(state.events),
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (event) => {
    dispatch(toggleEvent(event));
  }
})

export default compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  connect(mapStateToProps, mapDispatchToProps),
)(MapView);
