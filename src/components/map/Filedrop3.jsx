import React, { Component}  from 'react';
import Dropzone from 'react-dropzone';

export default class Basic extends Component {
    constructor() {
      super()
      this.state = { files: [] }
    }
  
    onDrop(files) {
        console.log("FILES:");
        console.log(files);
        console.log("ShapeFILE-------");
        console.log('https://cdn.rawgit.com/mbostock/shapefile/master/test/points.shp');
        
      this.setState({
        files
      });
    }
  
    render() {
      return (
        <section>
          <div className="dropzone">
            <Dropzone onDrop={this.onDrop.bind(this)}>
              <p>Try dropping some files here, or click to select files to upload.</p>
            </Dropzone>
          </div>
          <aside>
            <h2>Dropped files</h2>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>
      );
    }
  }
  
  <Basic />