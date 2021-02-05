import React from 'react'
import * as Sentry from "@sentry/react";
import RandomGiphy from "../src/components/RandomGiphy";

<Sentry.ErrorBoundary fallback={"An error has occurred"}>
  <RandomGiphy />
</Sentry.ErrorBoundary>;