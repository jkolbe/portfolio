import React, { Component } from 'react';

class Canvas extends Component {

  constructor() {
    super();

    this.canvas = null;
    this.ctx = null;
    this.color_1 = this.gColor(0,0,0);
    this.color_2 = this.gColor(250,127,119);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      diameter: 5,
      min_diameter: 5,
      max_diameter: 60,
      direction: 1,
      iteration: 1,
      // color_array: this.createColorRange(this.color_1, this.color_2, 255),
      color_array: this.createColorRange(this.color_1, this.color_2, 65)
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('mousemove', this.mouseMoving);

    try {
      this.canvas = document.getElementById("myCanvas");
      this.ctx = this.canvas.getContext("2d");
    } catch (e) {
        console.log(e)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    window.removeEventListener('resize', this.mouseMoving);
  }

  drawCircle(x, y, r, color = {r: 255, g: 255, b: 255}) {
    // this.ctx.fillStyle = color;
    this.ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  updateDimensions = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 200);
  }

  mouseMoving = (e) => {

    const cnvRect = this.canvas.getBoundingClientRect();
    if (e.clientX >= cnvRect.left && e.clientX <= cnvRect.right && e.clientY >= cnvRect.top && e.clientY <= cnvRect.bottom) {
      // Mouse is inside canvas.
      const {diameter, min_diameter, max_diameter, direction, iteration, color_array} = this.state
      var posx = e.clientX - cnvRect.left;
      var posy = e.clientY - cnvRect.top;
      const color = color_array[diameter]

      this.drawCircle(posx, posy, diameter, color)

      let newDirection = direction
      if (diameter > max_diameter){
        newDirection = -iteration;
      } else if(diameter <= min_diameter){
        newDirection = +iteration;
      }

      this.setState({
        diameter: diameter + newDirection,
        direction: newDirection
      })
    }
  }

  gColor = (r,g,b) => {
    r = (typeof r === 'undefined')?0:r;
    g = (typeof g === 'undefined')?0:g;
    b = (typeof b === 'undefined')?0:b;
    return {r:r, g:g, b:b};
  }

  createColorRange = (c1, c2, range) => {
    var colorList = [], tmpColor;
    for (var i=0; i<range; i++) {
        tmpColor = this.gColor();
        tmpColor.r = c1.r + ((i*(c2.r-c1.r))/range);
        tmpColor.g = c1.g + ((i*(c2.g-c1.g))/range);
        tmpColor.b = c1.b + ((i*(c2.b-c1.b))/range);
        colorList.push(tmpColor);
    }
    return colorList;
  }


  render() {

    const {width, height} = this.state
    return (
      <div id="canvas">
          <canvas id="myCanvas" width={width} height={height}></canvas>
      </div>
    );
  }
}

export default Canvas;
