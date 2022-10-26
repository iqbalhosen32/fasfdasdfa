import "../styles/globals.css";
import "../styles/app.css";
import { ThemeProvider } from "next-themes";
import '../styles/accordion.css'
import { Provider } from "react-redux";
import { store } from "../dataStore/store";
import { StateContext } from '../context/StateContext'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <StateContext>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Component {...pageProps} />
        </ThemeProvider>
      </StateContext>
    </Provider>
  );
}

export default App;
