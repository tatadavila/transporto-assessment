// @vendors
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// @app
import { setShowPendindTaskModal } from "../../app";

export const PendingTask = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(setShowPendindTaskModal(false));
  };

  const { showPendingTaskModal, requiredTaskId } = useSelector(
    (state) => state.data,
  );

  console.log("showPendingTaskModal", showPendingTaskModal);

  return (
    <div>
      <Modal show={showPendingTaskModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tarea Pendiente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Es necesario finalizar la tarea #{requiredTaskId} antes de finalizar
          la actual.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
