import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <Link to="/" className="text-xl font-bold">Your Company</Link>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;