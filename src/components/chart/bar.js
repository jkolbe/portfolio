import React, { Component } from 'react';
import { Bar } from 'react-chartjs';

import './chart.css';

class BarChart extends Component {

  constructor(){
    super();
    this.state = {
      colors: ['#FA7F77', '#63666A', '#0092BC', '#77C5D5', '#000000', '#78BE20', '#000000'],
      chartOptions: {},
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
    data.datasets.map((d, i) => {
      const rgb = this.hexToRgb(colors[i])
      d.fillColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`
      d.strokeColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`
      d.highlightFill = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.75)`
      d.highlightStroke = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`
      return d
    })
    
    return data
  }

  render() {
    const { chartOptions, data } = this.state
    const { title } = this.props;
    const chartData = this.getChartData(this.props.data)

    return (
      <figure className='Chart__ctn'>
        <figcaption>{title}</figcaption>
        <Bar height={300} data={chartData} options={chartOptions} />
      </figure>
    );
  }
}

export default BarChart;
