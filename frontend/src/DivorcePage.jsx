import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DivorceItem from "./components/DivorceItem";

function DivorcePage() {
  const [divorces, setDivorces] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDivorces();
  }, []);

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

  // Delete function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await fetch(`http://localhost:3000/api/divorces/${id}`, {
          method: "DELETE",
        });
        fetchDivorces(); // Refresh list after delete
      } catch (error) {
        console.error("Error deleting divorce:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <p className="text-3xl font-bold">Divorce List</p>

      <button
        onClick={() => navigate("/add-divorce")}
        className="mt-4 px-4 py-2 bg-green-500 rounded-md text-white font-semibold hover:bg-green-700 transition"
      >
        Add Divorce
      </button>

      {loading ? (
        <p className="mt-4 text-lg">Loading...</p>
      ) : (
        <div className="mt-8 w-full max-w-2xl">
          {divorces.length > 0 ? (
            divorces.map((divorce) => (
              <div key={divorce._id} className="bg-white text-black p-4 rounded-lg mb-4 shadow-md">
                <DivorceItem
                  celebrity1={divorce.celebrity1}
                  celebrity2={divorce.celebrity2}
                  reason={divorce.reason}
                />
                <div className="mt-2 flex justify-between">
                  <button
                    onClick={() => navigate(`/edit-divorce/${divorce._id}`)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(divorce._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
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
