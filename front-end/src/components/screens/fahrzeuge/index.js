import React, { Component } from 'react';

//Head image
import headImage from '../.././images/headImage/head-image.png'

//Aktive Fahrzeuge
import Fahrzeug1 from '../.././images/Fahrzeuge/AktiveFahrzeuge/SLF-A.jpg'
import Fahrzeug2 from '../.././images/Fahrzeuge/AktiveFahrzeuge/TLFA2000.jpg'

//Ausgeschiedene Fahrzeuge
import Fahrzeug3 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/TLFA2000.jpg'
import Fahrzeug4 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/Unimog.jpg'
import Fahrzeug5 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/FordFK.jpg'
import Fahrzeug6 from '../.././images/Fahrzeuge/AusgeschiedeneFahrzeuge/Kutsche.jpg'

export default class Geschichte extends Component {
  state = {
    active: [
      {
        name: 'Mercedes 925 AF/32Atego',
        bez: 'SLF-A',
        ps: 'Leistung: 250 PS ',
        weight: 'Gesamtgewicht: 10,5t ',
        room: 'Sitzplätze: 9 ',
        year: 'Baujahr: 2005',
        img: Fahrzeug1
      },
      {
        name: 'Mercedes 1329 / Atego',
        bez: 'TLFA 2000',
        ps: 'Leistung: 290 PS ',
        weight: 'Gesamtgewicht: 13t ',
        room: 'Sitzplätze: 9 ',
        year: 'Baujahr: 2014',
        img: Fahrzeug2
      },
    ],
    away: [
      {
        name: 'Steyr 690',
        bez: 'TLF-A 2000',
        ps: 'Leistung: 170 PS ',
        weight: 'Gesamtgewicht: 11,2t',
        room: 'Sitzplätze: 9 ',
        year: 'Baujahr: 1986',
        awayTime: 'Ausgeschieden: 2014 ',
        img: Fahrzeug3,
      },
      {
        name: 'Mercedes Unimog U125',
        bez: 'LF-A',
        ps: 'Leistung: 125 PS ',
        weight: 'Gesamtgewicht: 6,8t ',
        room: 'Sitzplätze: 8 ',
        year: 'Baujahr: 1977',
        awayTime: 'Ausgeschieden: 2005',
        img: Fahrzeug4,
      },
      {
        name: 'Ford FK 1250',
        bez: 'MTF',
        ps: 'Leistung: 55 PS ',
        weight: 'Gesamtgewicht: 2t ',
        room: 'Sitzplätze: 8 ',
        year: 'Baujahr: 1960',
        awayTime: 'Ausgeschieden: 2005',
        img: Fahrzeug5
      },
      {
        name: 'Pferdebespannte Kutsche',
        bez: 'PfK',
        ps: 'Leistung: 1 PS ',
        weight: 'Gesamtgewicht: ? ',
        room: 'Sitzplätze: 3 ',
        year: 'Baujahr: ?',
        awayTime: 'Ausgeschieden',
        img: Fahrzeug6
      },
    ]
  }

  renderHelperActive = () => {
    return this.state.active.map(data => {
      return (
        <div className="column col-md-4 col-lg-3">
          <div className="team-card nop shadow">
            <div className="car-image-container">
              <img src={data.img} />
            </div>

            <div className="container fz-b-b">
              <p className="bold">{data.name}</p>
              <p className="bold primary">{data.bez}</p>
            </div>

            <div className="container">
              <p>{data.ps}</p>
              <p>{data.weight}</p>
              <p>{data.room}</p>
              <p>{data.year}</p>
            </div>

          </div>
        </div>
      )
    })
  }
  renderHelperAway = () => {
    return this.state.away.map(data => {
      return (
        <div className="column col-md-4 col-lg-3">
          <div className="team-card nop shadow">
            <div className="car-image-container">
              <img src={data.img} />
            </div>

            <div className="container fz-b-b">
              <p className="bold">{data.name}</p>
              <p className="bold primary">{data.bez}</p>
            </div>

            <div className="container">
              <p>{data.ps}</p>
              <p>{data.weight}</p>
              <p>{data.room}</p>
              <p>{data.year}</p>
              <p>{data.awayTime}</p>
            </div>

          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <img className="head_image" src={headImage}/>
          <div className="container-big">
            <h1 className="align-center heading">Fahrzeuge</h1>

            <h3 className="align-left heading">Aktive Fahrzeuge</h3>
            <div className="row">
              {this.renderHelperActive()}
            </div>

            <h3 className="align-left heading">Ausgeschiedene Fahrzeuge</h3>
            <div className="row">
              {this.renderHelperAway()}
            </div>

        </div>
      </div>
    );
  }
}
