import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from './App.module.css'; 

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
  /* background: red; */
`;

function App() {
  const [shipsPosition, setShipsPosition] = useState([]);
  const [targetShoot, setTargetShoot] = useState(null);

  const getCell = () => {
    const rowShip = parseInt((Math.random() * 7).toFixed(0));
    const cellShip = parseInt((Math.random() * 7).toFixed(0));

    const rowShip2 = parseInt((Math.random() * 7).toFixed(0));
    const cellShip2 = parseInt((Math.random() * 7).toFixed(0));

    let ship1 = [new Array(2).fill([rowShip, cellShip])];

    console.log(ship1, rowShip, cellShip);

    setShipsPosition([
      [
        [rowShip, cellShip],
        [rowShip + 1 >= 9 ? rowShip - 1 : rowShip - 1, cellShip],
      ],
      [
        [rowShip2, cellShip2],
        [rowShip2, cellShip2 + 1 >= 9 ? cellShip2 - 1 : cellShip2 + 1],
      ],
    ]);
  };

  const checkShip = (row, cell) => {
    for (let i = 0; i < shipsPosition.length; i++) {
      let ship = shipsPosition[i];
      for (let j = 0; j < ship.length; j++) {
        let shipCell = ship[j];
        if (shipCell[0] === row && shipCell[1] === cell) {
          return true;
        }
      }
    }
  };

  const checkWin = () => {
    if(targetShoot === 4) {
      alert('all ships was bombed!')
    }
  }

  useEffect(() => {
    getCell();
  }, []);
  useEffect(() => {
    checkWin();
  }, [targetShoot]);

  return (
    <>
      <Field>
        {fightField.map((row, index) => {
          return (
            <Row key={index}>
              Row: {index}
              {row.map((field, indexCell) => {
                if (checkShip(index, indexCell)) {
                  return (
                    <Ship
                      key={indexCell}
                      onClick={(e) => {
                        if(e.target.classList.contains('clicked')) {
                          alert('was clicked')
                          return
                        } else
                        e.target.classList.add(styles.clicked)
                        setTargetShoot(targetShoot + 1)
                      }}
                    >
                      Field: {indexCell}
                    </Ship>
                  );
                } else {
                  return <Cell key={indexCell}>Field: {indexCell}</Cell>;
                }
              })}
            </Row>
          );
        })}
      </Field>
      <div className="counter">
        <p>Your correct shoots: {targetShoot}</p>
      </div>
    </>
  );
}
export default App;
