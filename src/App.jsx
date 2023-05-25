// @pages
import { Home } from "./pages";

// @components
import { Header } from "./components";

// @styles.css
import "./App.css";

function App() {
  return (
    <div className="app__container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
