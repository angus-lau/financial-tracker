import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PostNewTransaction from './PostNewTransaction';

function ExpenseModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setDate] = useState('')
  const [expense, setExpense] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'expense':
        setExpense(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      case 'category':
        setCategory(value);
        break;
        default:
        break;

    }
  };
  
  const handleSubmit = async () => {
    console.log("Data:", date, expense, amount, category);
    PostNewTransaction(date, expense, amount, category);
    handleClose();
  };


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
            name="date"
            value={date}
            onChange={handleInput}
            placeholder="24 May 2024"
            autoFocus
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Expense</Form.Label>
          <Form.Control
            type="text"
            placeholder="Esso"
            name="expense"
            value={expense}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="100.00"
            name="amount"
            value={amount}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="expenseModal.ControlInput1">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Vehicle"
            name="category"
            value={category}
            onChange={handleInput}
          />
        </Form.Group>


        <Modal.Footer className='justify-content-center'>
          <Button variant="secondary" onClick={handleClose} className='btn btn-danger'>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} className='btn btn-success'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpenseModal;