import { connect } from "react-redux";
import { updateLayerVisibility, updateLayerFill, updateLayerBorder, updateLayerName, deleteLayer} from "../actions"; //Redux actions
import LayerList from "../components/sidebar/LayerList";


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
