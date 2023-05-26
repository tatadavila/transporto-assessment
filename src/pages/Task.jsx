// @vendors
import { Button, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// @app
import { markTaskDone } from "../app";

export const Task = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/home");
  };

  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(markTaskDone(taskId));
    navigate("/home");
  };

  return (
    <Stack gap={2} className="col-md-5 mx-auto h-100  ">
      <Button onClick={handleOnClick} variant="secondary">
        Finalizar tarea #{taskId}
      </Button>
      <Button variant="outline-secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </Stack>
  );
};
