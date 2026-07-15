import { Outlet } from "react-router-dom";
import { Footer } from "./site-footer";
import { Header } from "./site-header";

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
