import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDivorcePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ celebrity1: "", celebrity2: "", reason: "" });

  useEffect(() => {
    fetch(`http://localhost:3000/api/divorces/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.error("Error fetching divorce:", err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/api/divorces/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      navigate("/divorces");
    } catch (error) {
      console.error("Error updating divorce:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6">
      <p className="text-3xl font-bold">Edit Divorce</p>
      <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-md text-black">
        <input
          type="text"
          name="celebrity1"
          value={form.celebrity1}
          onChange={handleChange}
          className="border p-2 w-full rounded-md mb-2"
          placeholder="Celebrity 1"
          required
        />
        <input
          type="text"
          name="celebrity2"
          value={form.celebrity2}
          onChange={handleChange}
          className="border p-2 w-full rounded-md mb-2"
          placeholder="Celebrity 2"
          required
        />
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="border p-2 w-full rounded-md mb-2"
          placeholder="Reason"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditDivorcePage;
