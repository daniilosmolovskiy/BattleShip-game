import React, { useEffect, useState } from "react";
import styled from 'styled-components'

const fightField = new Array(8).fill(new Array(8).fill(0));

const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  height: 640px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const Cell = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid black;
`;
const Ship = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid black;
  background: red;
`;

function App() {

  const [shipsPosition, setShipsPosition] = useState([])

const getCell = () => {
  const rowShip = parseInt((Math.random() * 8).toFixed(0))
  const cellShip = parseInt((Math.random() * 8).toFixed(0))
  
  setShipsPosition([
    [[rowShip, cellShip], [rowShip + 1, cellShip]],
    // [[rowShip - 1, cellShip]],
    // [rowShip - 1, cellShip]
    // [rowShip, cellShip, rowShip - 1, cellShip],
    // [rowShip, cellShip, rowShip, cellShip - 1, rowShip, cellShip - 1],
    // [rowShip, cellShip, rowShip, cellShip + 1, rowShip, cellShip + 1, rowShip, cellShip + 1]
  ])

  // console.log(rowShip, cellShip)
}

const checkShip = (row, cell) => {
  let trueShip = true;
  shipsPosition.forEach(ship => {
    ship.some(shipCell => {
      if(shipCell[0] === row && shipCell[1] === cell) {
        trueShip = true
        return trueShip
      } else trueShip = false
    })
    if(trueShip)
      return
    // trueCell ? trueShip = true : trueShip = false
  })
  // console.log(row, cell, trueShip)
  return trueShip
}

  useEffect(() => {
    getCell()
  }, []
  )
  
  return (
    <Field>
      {fightField.map((row, index) => {
        return (
          <Row key={index}>
            Row: {index}
            {row.map((field, indexCell) => {
              if(checkShip(index, indexCell)) {
                return <Ship key={indexCell}>Field: {indexCell}</Ship>
              } else {
                return <Cell key={indexCell}>Field: {indexCell}</Cell>;
              }
            })}
          </Row>
        );
      })}
      </Field>
  );
}
export default App;
