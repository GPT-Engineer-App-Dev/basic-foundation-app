import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <nav>
          <NavLink to="/" className="text-lg font-semibold">Your Company</NavLink>
        </nav>
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="border-t bg-background p-4 text-center text-sm text-muted-foreground">
        © 2023 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;