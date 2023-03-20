import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3'

const BarChart = (props) => {
  
  const {data, w, h, color} = props

  const myRef = useRef()
  
  useEffect(() => {
  
    const accessToRef = d3.select(myRef.current)
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .style('background-color', 'lightblue')
      .style('padding', 10)
      .style('margin-left', 0)
  
    accessToRef.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => h - 10 * d)
      .attr('width', 40)
      .attr('height', (d, i) => d * 10)
      .attr('fill', color)
  }, [data, w, h, color])
  
  
  return(
  <div ref={myRef}></div>
  )
}

export default BarChart