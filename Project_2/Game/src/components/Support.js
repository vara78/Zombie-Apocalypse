import React from 'react'
import {
    Container,
    Row,
    Column,
    RowTwo,
    Box,
    BoxTwo,
    ColumnTwo,
    } from "./FooterStyles";
    import { Link } from "react-router-dom";

export default function Support() {
  return (
    <form  className="flex justify-content max-w-xs mx-auto mt-5 "  >

    <h1 className="pt-5">
      Zombie Apocalypse
    </h1>
    <Container>
      <Row>
        <Column>
          <h3>Game Help</h3>
        </Column>
        <Column>
          <h3>Feed Back</h3>
        </Column>
        <Column>
          <h3>Password Reset</h3>
        </Column>
      </Row>
    </Container>

    <BoxTwo>
        <RowTwo>
          <ColumnTwo>
          <br></br>
            <h3>Playing the Game</h3>
           <p>Playing the game requires internet and the abilty to read. You must also be aware this game is for mature audience and not for the feint hearted.
           Please rememnber to keep all hands and feet inside at all times as you could be eatin by a Zombie. Thanks again for flying 
           Alterra the only inter-galatic space agency this side of the Milky Way.</p> <p>If you are having technical issue please click the link 
             below.</p> <div className="text-start"><Link to="/Support" type="submit" className="">Get help</Link></div>
            </ColumnTwo>
          </RowTwo> 
          </BoxTwo>


  </form>
  )
}
