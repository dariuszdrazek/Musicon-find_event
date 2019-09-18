import { connect } from 'react-redux';
import FavoriteEvents from '../components/+FavoriteEvents';
import { addFavoriteEvent } from '../redux/favorite/actions';

const mapState = ({ getEvents: { events } }) => ({ events });

const mapDispatch = dispatch => {
     return {
          addEvent: query => dispatch(addFavoriteEvent(query))
     };
};

export default connect(
     mapState,
     mapDispatch
)(FavoriteEvents);
