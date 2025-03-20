import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <h1 className="text-5xl font-bold">Celebrity Divorce List</h1>
      <p className="text-lg mt-4 max-w-lg">
        Explore the funniest and most bizarre reasons celebrities have split up!
      </p>

      <button
        className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition duration-300"
        onClick={() => navigate("/divorces")}
      >
        Get Started
      </button>
    </div>
  );
}
