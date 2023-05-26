// @vendors
import { useEffect } from "react";
import { useSelector } from "react-redux";

// @app
import { router } from "./app";

// @styles.css
import "./App.css";

function App() {
  const tasks = useSelector((state) => state.data.tasks);

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);
  return <div className="app__container">{router}</div>;
}

export default App;
