import { connect } from 'react-redux';
import FindEvent from '../components/+FindEvent';
import { fetchEvents } from '../redux/events/actions';

const mapState = ({ getEvents: { events } }) => ({ events });

const mapDispatch = dispatch => {
     return {
          getEvents: query => dispatch(fetchEvents(query))
     };
};

export default connect(
     mapState,
     mapDispatch
)(FindEvent);
