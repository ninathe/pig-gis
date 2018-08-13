import React, { Component}  from 'react';
import Dropzone from 'react-dropzone';

export default class Accept extends Component {
    constructor() {
      super()
      this.state = {
        accepted: [],
        rejected: []
      }
    }
  
    render() {
      return (
        <section>
          <div className="dropzone">
            <Dropzone
              accept="application/octec-stream"
              onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
            >
              <p>Try dropping some files here, or click to select files to upload.</p>
              <p>Only .shp will be accepted</p>
            </Dropzone>
          </div>
          <aside>
            <h2>Accepted files</h2>
            <ul>
              {
                this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
            <h2>Rejected files</h2>
            <ul>
              {
                this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
        </section>
      );
    }
  }
  
  <Accept />