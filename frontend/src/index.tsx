import { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./features/store";
import { ContextProvider } from "./contexts/ContextProvider";

// ** Lazy load app
const LazyApp = lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <ContextProvider>
        <LazyApp />
      </ContextProvider>
    </Provider>
  </HashRouter>
);
