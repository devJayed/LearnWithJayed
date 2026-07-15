import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App";
import { ThemeProvider } from "./contexts/theme-provider";
import { I18nProvider } from "./i18n/i18n-context";
import { MotionProvider } from "./components/ui/motion";
import { queryClient } from "./lib/query-client";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <I18nProvider><ThemeProvider><MotionProvider><App /></MotionProvider></ThemeProvider></I18nProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
);
