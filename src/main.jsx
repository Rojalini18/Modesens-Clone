import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GenderContextProvider } from "./contexts/userGender";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { AuthContextProvider } from "./contexts/AuthContext";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
const theme = extendTheme({ colors });

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <BrowserRouter>
      <GenderContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </GenderContextProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
