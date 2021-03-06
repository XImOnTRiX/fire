import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ROOT_URL, getEinsatz } from '../../../config';

import { fetch } from '../../../redux/actions';

import { Card } from './card';

import Brand from '../../images/filler/brand.jpg';
import Help from '../../images/filler/help.jpg';

class Einsätze extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        date: '9. Oktober 2018',
      }

    }
  }

  componentDidMount() {
    if(this.props.data.loaded.loaded.Einsätze !== true) {
      this.props.fetch('fetch_einsaetze', `${getEinsatz}`);
    }
  }

  renderHelper = (data) => {
    return(
      data.map((data, i) => {
        if(i < 3) {
          var imageArray;
          var clock = data.Beginn;

          if(data.Bilderverzeichnis === null) {
            if(data.Brandeinsatz.data[0] === 1) {
              imageArray = Brand;
            }
            if(data.Techn_Einsatz.data[0] === 1 || data.Techn_Hilfeleistung.data[0] === 1) {
              imageArray = Help;
            }
          }

          if(data.Beginn === null) {
            clock = " n.A";
          }

          return (
            <div key={i} className="column col-s-12 col-md-6 col-lg-4">
              <Card
                title={data.Ausrueckungsgrund}
                subtitle={data.Einsatzort}
                date={data.Datum}
                clock={clock}
                ort={data.Einsatzort}
                image={imageArray}
              />
            </div>
          )
        } else {
          return
        }

      })
    )
  }

  render() {
    var array = [];
    this.props.data.einsätze.map( data => {
      array.splice( 0, 0, data)
    })

    return (
      <div className="einsatz-container">
        <div className="row">
          {this.renderHelper(array)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (data) => {
  return {
    data
  }
}

export default connect(
  mapStateToProps,
  { fetch }
)(Einsätze)
