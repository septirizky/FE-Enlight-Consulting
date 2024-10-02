import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center h-16">
              <div className="flex-1 flex justify-center">
                <div className="space-x-4">
                  <a
                    href="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    TO DO
                  </a>
                  <a
                    href="/form"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Form
                  </a>
                  <a
                    href="/local-storage"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Local Storage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-grow overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Navbar;
