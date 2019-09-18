import { connect } from 'react-redux';
import FindEvent from '../components/+FindEvent';
import { fetchEvents } from '../redux/events/actions';
import { addFavoriteEvent } from '../redux/favorite/actions';

const mapState = ({ getEvents: { events } }) => ({ events });

const mapDispatch = dispatch => {
     return {
          getEvents: query => dispatch(fetchEvents(query)),
          addEvent: query => dispatch(addFavoriteEvent(query))
     };
};

export default connect(
     mapState,
     mapDispatch
)(FindEvent);