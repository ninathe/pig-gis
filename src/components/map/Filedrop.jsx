import React, { Component}  from 'react';
import FileDrop from 'react-file-drop';
import ShapeConverter from './ShapeConverter'

const shapefile = require('shapefile')

export default class Filedrop extends Component {
    
    _handleFileDrop(files, event) {
        console.log("Files: ");
        console.log(files[0]);
        // shp("files/pandr.zip").then(function(geojson){
        //     //see bellow for whats here this internally call shp.parseZip()
        // });
        console.log('https://cdn.rawgit.com/mbostock/shapefile/master/test/points.shp')
        // shapefile.open(files[0])
        
        // const nina = './arealbruk.shp';
        // console.log('./arealbruk.shp');
        // shapefile.open(nina)
        shapefile.open('https://cdn.rawgit.com/mbostock/shapefile/master/test/points.shp')        
        .then(source => {
            source.read()
            .then(function log(result) {
                if (result.done) return
                console.log("heo");
                console.log(result.value)
                // MapGL.addSource('some id', {
                //     type: 'geojson',
                //     data: {
                //         "type": "FeatureCollection",
                //         "features": [
                //             result.value
                //         ]
                //     }
                //  });
                return source.read().then(log)
            })
        })
        .catch(error => console.error(error.stack))
    }

    render() {
        return (
            <div className="my-uploader">
                Drop data here
                <FileDrop frame={document} onDrop={this._handleFileDrop}>
                    Drop some files here!
                </FileDrop>
            </div>
        );
    }
}