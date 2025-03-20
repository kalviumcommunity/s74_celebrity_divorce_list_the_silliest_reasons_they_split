import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DivorceItem from "./components/DivorceItem";

function DivorcePage() {
  const [divorces, setDivorces] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDivorces = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/divorces");
        const data = await response.json();
        setDivorces(data);
      } catch (error) {
        console.error("Error fetching divorces:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDivorces();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <p className="text-3xl font-bold">Divorce List</p>

      <div className="mt-4 space-x-4">
        <button
          onClick={() => navigate("/add-divorce")}
          className="px-4 py-2 bg-green-500 rounded-md text-white font-semibold hover:bg-green-700 transition"
        >
          Add Divorce
        </button>
      </div>

      {loading ? (
        <p className="mt-4 text-lg">Loading...</p>
      ) : (
        <div className="mt-8 w-full max-w-2xl">
          {divorces.length > 0 ? (
            divorces.map((divorce, index) => (
              <DivorceItem
                key={index}
                celebrity1={divorce.celebrity1}
                celebrity2={divorce.celebrity2}
                reason={divorce.reason}
              />
            ))
          ) : (
            <p className="mt-4 text-lg">No divorces found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default DivorcePage;
