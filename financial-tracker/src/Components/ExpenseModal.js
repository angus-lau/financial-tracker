import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ExpenseModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Expense
      </Button>

      <Modal show={show} onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Expense</Modal.Title>
        </Modal.Header>


        <Modal.Body>Manually enter any expense.</Modal.Body>

        <Form.Group className="mb-3" controlId="expenseModal.ControlInput1">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="24 May 2024"
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Expense</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fuel"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="100.00"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="expenseModal.ControlInput1">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Vehicle"
          />
        </Form.Group>


        <Modal.Footer className='justify-content-center'>
          <Button variant="secondary" onClick={handleClose} className='btn btn-danger'>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} className='btn btn-success'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpenseModal;