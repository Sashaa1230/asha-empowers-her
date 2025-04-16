
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-asha">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page not found</p>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="bg-asha text-white px-6 py-2 rounded-full font-medium hover:bg-asha-dark transition-colors">
          Back to Chat with ASHA
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
