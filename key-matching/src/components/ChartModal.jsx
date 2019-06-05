import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import RoomsTable from "./RoomsTable";

const ChartModal = props => {
  const {rooms, page, modalStatus, setModalStatus, handlePage} = props;
  return (
    <div>
      <Modal
        show={modalStatus}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="table-modal"
        onHide={e => setModalStatus(false)}
      >
        <Modal.Header closeButton>
          <p>Rooms Chart</p>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <RoomsTable rooms={rooms} page={page} />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="primary" onClick={e => handlePage(e, "p")}>
            {"<<"} Previous
          </Button>
          <p>
            Page {page}/{Math.floor(rooms.length / 10)}
          </p>
          <Button variant="primary" onClick={e => handlePage(e, "n")}>
            Next {">>"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ChartModal
