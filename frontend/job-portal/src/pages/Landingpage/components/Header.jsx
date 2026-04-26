import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isAuthenticated = true;
  const user = { fullName: "Alex", role: "employer" };
  const navigate = useNavigate();

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">JobPortal</span>
        </div>

        {/* nav links */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6 text-gray-700">
            <button
              onClick={() => navigate("/find-jobs")}
              className="hover:text-blue-600"
            >
              Find Jobs
            </button>

            <button
              onClick={() =>
                navigate(
                  isAuthenticated && user.role === "employer"
                    ? "/employer-dashboard"
                    : "/login",
                )
              }
              className="hover:text-blue-600"
            >
              For Employers
            </button>
          </nav>

          {/* auth section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-600">Welcome, {user?.fullName}</span>

                <button
                  onClick={() =>
                    navigate(
                      user?.role === "employer"
                        ? "/employer-dashboard"
                        : "/find-jobs",
                    )
                  }
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-md"
                >
                  Dashboard
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="text-gray-700"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  className="bg-blue-600 text-white px-4 py-1.5 rounded-md"
                >
                  Signup
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
