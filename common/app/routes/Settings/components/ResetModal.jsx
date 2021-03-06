import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const propTypes = {
  onHide: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  show: PropTypes.bool
};

function ResetModal(props) {
  const { show, onHide } = props;
  return (
    <Modal
      aria-labelledby='modal-title'
      autoFocus={ true }
      backdrop={ true }
      bsSize='lg'
      keyboard={ true }
      onHide={ onHide }
      show={ show }
      >
      <Modal.Header closeButton={ true }>
        <Modal.Title id='modal-title'>Reset My Progress</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This will really delete all of your progress, points, completed
          challenges, our records of your projects, any certifications you have,
          everything.
        </p>
        <p>
          We won't be able to recover any of it for you later, even if you
          change your mind.
        </p>
        <hr />
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='success'
          onClick={ props.onHide }
          >
          Nevermind, I don't want to delete all of my progress
        </Button>
        <div className='button-spacer' />
        <Button
          block={ true }
          bsSize='lg'
          bsStyle='danger'
          onClick={ () =>{ props.reset(); return props.onHide(); } }
          >
          Reset everything. I want to start from the beginning
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ props.onHide }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

ResetModal.displayName = 'ResetModal';
ResetModal.propTypes = propTypes;

export default ResetModal;
