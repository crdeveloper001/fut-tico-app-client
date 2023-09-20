import { Provider } from "react-redux";
import "./App.css";
import { Dashboard } from "./pages/components/Dashboard/Dashboard.component";
import store from "./pages/store";
import { SessionProvider } from "./hooks/SessionManager";
import ReCAPTCHA from "react-google-recaptcha";
function App() {
  const handleRecaptchaVerify = (response) => {
    // Handle reCAPTCHA verification here
    console.log("reCAPTCHA response:", response);
  };
  return (
    <>
      <SessionProvider>
        <Provider store={store}>

          <section id="Dashboard">
            <ReCAPTCHA
              sitekey="6LdymDsoAAAAABy5JDYmEImN58p4q0ttPXj3RNsb"
              onChange={handleRecaptchaVerify()}
            />
            <Dashboard />
          </section>
        </Provider>
      </SessionProvider>

    </>
  );
}

export default App;
