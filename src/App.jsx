import "./App.css";
import { Dashboard } from "./components/Dashboard/Dashboard.component";
import { Navigation } from "./components/Navigation/Navigation.component";

function App() {
  return (
    <>
      <section id="Dashboard">
        <Navigation />
        <Dashboard />
      </section>
    </>
  );
}

export default App;
