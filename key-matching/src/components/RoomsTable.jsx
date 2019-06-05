import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const RoomsTable = props => {
  const page = props.page;
  return (
    <div className="table-cont">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Key Tag</th>
            <th>Building Number</th>
            <th>Room number</th>
          </tr>
        </thead>
        <tbody>
          {props.rooms
            .filter(
              (room, index) => index < 10 * page && index >= 10 * page - 10
            )
            .map(room => {
              return (
                <tr key={room.key}>
                  <td>{room.key}</td>
                  <td>{room.building_num}</td>
                  <td>{room.room_num}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default RoomsTable;
