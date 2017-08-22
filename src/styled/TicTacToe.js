import React,{Component} from 'react';
import {Layer,Line} from 'react-konva';

export const Board = ({unit, size, rows}) => {
let grid = []
let stroke = 'red'
let strokeWidth = 10

for (let i =1; i < rows; i++) {
  let position = unit * i
  grid.push(
    <Line
      points = {[position, 0, position, size ]}
      stroke = {stroke}
      strokeWidth = {strokeWidth}
      key = {i + 'h'}
      />
  )
  grid.push(
    <Line
      points = {[ 0, position, size, position ]}
      stroke = {stroke}
      strokeWidth = {strokeWidth}
      key = {i + 'v'}
      />
  )
}


  return(
    <Layer>
      {grid}
      </Layer>

  )
}
