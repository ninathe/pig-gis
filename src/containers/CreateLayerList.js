import { connect } from "react-redux";
import { updateLayers, updateLayerVisibility, updateLayerFill, updateLayerBorder, updateLayerName, deleteLayer} from "../actions";
import LayerList from "../components/LayerList";


const mapStateToProps = (state) => ({
  layers: state.layers
});


const mapDispatchToProps ={
  updateLayerVisibility,
  updateLayerFill,
  updateLayerBorder, 
  updateLayerName,
  deleteLayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayerList);
