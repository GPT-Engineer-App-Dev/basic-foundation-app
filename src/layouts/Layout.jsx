import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 p-4">
        <nav>
          <Link to="/" className="text-lg font-semibold">Your Company</Link>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;