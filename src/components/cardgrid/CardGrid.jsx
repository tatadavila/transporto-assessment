// @vendors
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

// @components
import { TaskCard } from "../taskcard";

import "./cardGrid.css";

export const CardGrid = () => {
  const tasks = useSelector((state) => state.data.tasks);

  console.log("TAKS", tasks);

  return (
    <Container>
      <Row xs={1} md={2} className="g-5 mt-0">
        {tasks.map((task) => {
          return (
            !task.done && (
              <Col key={task.id}>
                <TaskCard taskInfo={task} />
              </Col>
            )
          );
        })}
      </Row>
    </Container>
  );
};
