import { Provider } from "react-redux";
import "./App.css";
import { Dashboard } from "./pages/components/Dashboard/Dashboard.component";
import store from "./pages/store";
import { SessionProvider } from "./hooks/SessionManager";

function App() {
  return (
    <>
      <SessionProvider>
        <Provider store={store}>

          <section id="Dashboard">

            <Dashboard />
          </section>
        </Provider>
      </SessionProvider>

    </>
  );
}

export default App;
