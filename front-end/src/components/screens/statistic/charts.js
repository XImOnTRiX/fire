import React, { Component } from 'react';
import {Doughnut, Chart} from 'react-chartjs-2';

import _ from 'lodash';


var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart;
    var width = chart.chart.width,
        height = chart.chart.height,
        ctx = chart.chart.ctx;

    var fontSize = (height / 120).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var sum = 0;
    for (var i = 0; i < chart.config.data.datasets[0].data.length; i++) {
      sum += chart.config.data.datasets[0].data[i];
    }

    var text = sum,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.8;

    ctx.fillText(text, textX, textY);
  }
});

class Charts extends Component {

  renderHelper = (data, numbers) => {
    var num = _.uniq(numbers);
    var array = []
    for ( var key in data) {
      array.push(data[key]);
    }
    console.log(data);
    return (
      array.map((data, i) => (

        <div className="column col-s-12 col-ms-6 col-lg-4 col-ml-4 team-card shadow index">
          <h2 className="align-center">Einsätze {data.year}</h2>
          <Doughnut width={200} height={100} labels={data.einsätze} />
        </div>

        )
      )
    );
  }

  render() {
    const { data, length } = this.props;
    return (
      <div className="container-big">
        <div className="row shadow-land">
          {this.renderHelper(data, length)}
        </div>
      </div>
    );
  }
};

export default Charts;
