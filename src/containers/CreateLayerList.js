import { connect } from "react-redux";
import { updateLayers } from "../actions";
import LayerList from "../components/LayerList";

const mapStateToProps = (state, ownProps) => ({
  layers: ownProps.layers === state.layers
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(updateLayers(ownProps.layers))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayerList);
