import { connect } from "react-redux";
import Counter from "../components/Counter";

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    testStore: state
  };
}

// There are two redux defined core methods of each container: mapStateToProps and mapDispatchToProps: 
// among which mapStateToProps responsible to load states from store and map them into components’ props, 
// while mapDispatchToProps is to send action to reducers.

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onAddTrack: trackName => {
      dispatch({ type: "ADD_TRACK", payload: trackName });
    }
  };
}

// Connected Component
const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default VisibleCounter;
