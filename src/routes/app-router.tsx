import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layout";
import { LandingPage } from "@/pages/landing-page";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
