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

function App() {

  const [shipPosition, setShipPosition] = useState([])

const getCell = () => {
  const rowShip = parseInt((Math.random() * 8).toFixed(0))
  const cellShip = parseInt((Math.random() * 8).toFixed(0))
  
  setShipPosition([rowShip, cellShip])

  console.log(rowShip, cellShip)
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
            Row: {index + 1}
            {row.map((field, i) => {
              if( index === shipPosition[0] || i === shipPosition[1]) {
                console.log('test')
              } else {
                return <Cell className={[index + 1, i + 1]} key={i}>Field: {i}</Cell>;
              }
            })}
          </Row>
        );
      })}
      </Field>
  );
}
export default App;
