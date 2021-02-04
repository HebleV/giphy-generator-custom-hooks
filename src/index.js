import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";

Sentry.init({
  dsn: "https://e724767e24c0434cb84865f4d9dc6a0d@o516734.ingest.sentry.io/5623600",
  integrations: [new Integrations.BrowserTracing()],
});

ReactDOM.render(<App />, document.getElementById("root"));