// @vendors
import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// @styles
import "./taskCard.css";

export const TaskCard = ({ taskInfo }) => {
  return (
    <Card>
      <Card.Header as="h6">TAREA #{taskInfo?.id}</Card.Header>
      <Card.Body>
        {taskInfo.subTasks.length === 0 ? (
          <Link to={`/task/${taskInfo.id}`}>
            <Button id={taskInfo.id}>Hacer Tarea #{taskInfo.id}</Button>
          </Link>
        ) : (
          taskInfo.subTasks.map((subTask) => {
            return (
              <Link key={subTask.id} to={`/task/${subTask.id}`}>
                <Button>Hacer Tarea #{subTask.id}</Button>
              </Link>
            );
          })
        )}
      </Card.Body>
    </Card>
  );
};

TaskCard.propTypes = {
  taskInfo: PropTypes.object.isRequired,
};
