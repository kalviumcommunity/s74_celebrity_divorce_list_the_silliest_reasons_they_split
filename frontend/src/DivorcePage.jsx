import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DivorceItem from "./components/DivorceItem";

function DivorcePage() {
  const [divorces, setDivorces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
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

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/divorces/${deleteId}`, {
        method: "DELETE",
      });
      setShowModal(false);
      fetchDivorces(); // Refresh list after delete
    } catch (error) {
      console.error("Error deleting divorce:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
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
                    onClick={() => {
                      setDeleteId(divorce._id);
                      setShowModal(true);
                    }}
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

      {/* Delete Confirmation Popup with Proper Blur Effect */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-transparent">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black w-80">
            <p className="text-lg font-semibold">Are you sure you want to delete this entry?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 rounded-md text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 rounded-md text-white hover:bg-red-800"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DivorcePage;
