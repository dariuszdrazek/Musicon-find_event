import { connect } from 'react-redux';
import FavoriteEvents from '../components/+FavoriteEvents';

const mapState = addEvents => addEvents;

export default connect(
     mapState,
     null
)(FavoriteEvents);
