import React, { Component } from 'react';
import { Pie } from 'react-chartjs';

import './chart.css';

class PieChart extends Component {

  constructor(){
    super();
    this.state = {
      colors: ['#FA7F77', '#63666A', '#0092BC', '#77C5D5', '#000000', '#78BE20', '#000000'],
      chartOptions: {
        segmentShowStroke : true,
      },
    }
  }

  hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  getChartData = (data) => {
    const {colors} = this.state
    return data.map((d, i) => {
      const rgb = this.hexToRgb(colors[i])
      d.color = colors[i]
      d.highlight = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`
      return d
    })
  }

  render() {

    const { chartOptions } = this.state
    const { title } = this.props;
    const chartData = this.getChartData(this.props.data)

    return (
      <figure className='Chart__ctn'>
        <figcaption>{title}</figcaption>
        <Pie data={chartData} options={chartOptions} />
      </figure>
    );
  }
}

export default PieChart;
