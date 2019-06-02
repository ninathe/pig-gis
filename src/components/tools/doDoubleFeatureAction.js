import formatJson from '../utils';
import * as turf from '@turf/turf'



const doDoubleFeatureAction=(FeatureCollection1, FeatureCollection2, action, actionType, multi)=> {
    let newGeojson = {
      "type": "FeatureCollection",
      "features": []
    }
    

    if(!multi && isMultiPolygon(FeatureCollection1)){
        FeatureCollection1.features = convertToPolygons(FeatureCollection1)
    } 
    if(!multi && isMultiPolygon(FeatureCollection2 )){
        FeatureCollection2.features = convertToPolygons(FeatureCollection2)
    } 

    FeatureCollection1.features.forEach(poly1 => {
        FeatureCollection2.features.forEach(poly2 => {
            let newGeometry = action(poly1.geometry, poly2.geometry)
            if(newGeometry!= null)
                newGeojson.features.push(newGeometry)
        });
    });
    
    let newName = FeatureCollection1.name+"_"+FeatureCollection2.name + "_"+ actionType;

    return(formatJson(newGeojson,newName, true, 0.5));
  }
const isMultiPolygon = (FC)=>{  
    if(FC.features[0].geometry.type == "MultiPolygon")
        return true
return false
}

const convertToPolygons = (FC)=>{  
    let polygons =[] 
    FC.features.forEach(poly=>{
        if(poly.geometry.type == "MultiPolygon"){
            poly.geometry.coordinates.forEach(coord=>{
                let polygon = turf.polygon(coord)
                polygons.push(polygon)
            })
        }
    });
    return polygons;
}

  

  export default doDoubleFeatureAction