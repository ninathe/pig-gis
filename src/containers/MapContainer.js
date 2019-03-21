import { connect } from "react-redux";
import { updateLayers } from "../actions";
import Map from "../components/map/Map";

const mapStateToProps = (state) => ({
  layers: state.layers
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(updateLayers(ownProps.layers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
