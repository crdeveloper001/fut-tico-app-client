import { Provider } from "react-redux";
import "./App.css";
import { Dashboard } from "./pages/components/Dashboard/Dashboard.component";
import store from "./pages/store";

function App() {
  return (
    <>
     
        <Provider store={store}>
          <section id="Dashboard">
            <Dashboard />
          </section>
        </Provider>
     
    </>
  );
}

export default App;
