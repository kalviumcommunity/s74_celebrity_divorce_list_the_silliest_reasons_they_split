import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDivorcePage() {
  const [celebrity1, setCelebrity1] = useState("");
  const [celebrity2, setCelebrity2] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/divorces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ celebrity1, celebrity2, reason }),
      });

      if (response.ok) {
        navigate("/divorces");
      } else {
        console.error("Failed to add divorce");
      }
    } catch (error) {
      console.error("Error adding divorce:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
      <p className="text-3xl font-bold">Add a Divorce</p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-gray-900"
      >
        <label className="block mb-2 font-semibold">Celebrity 1</label>
        <input
          type="text"
          value={celebrity1}
          onChange={(e) => setCelebrity1(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label className="block mb-2 font-semibold">Celebrity 2</label>
        <input
          type="text"
          value={celebrity2}
          onChange={(e) => setCelebrity2(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label className="block mb-2 font-semibold">Reason</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Divorce"}
        </button>
      </form>
    </div>
  );
}

export default AddDivorcePage;
