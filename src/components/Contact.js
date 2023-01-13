import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Please contact me with any of the following methods:
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h3>Linked in :
                  {resumeData.linkedinId}
                </h3>
                <h3>Email :
                    {resumeData.email}
                </h3>
                <h3>Facebook :
                    {resumeData.facebookId}
                </h3>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}