import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    navigate("/chat"); // Abhi ke liye direct chat page par bhej do
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        <input type="text" placeholder="Full Name" className="w-full mb-3 border rounded-lg p-2" />
        <input type="email" placeholder="Email" className="w-full mb-3 border rounded-lg p-2" />
        <input type="password" placeholder="Password" className="w-full mb-3 border rounded-lg p-2" />
        <button onClick={handleRegister} className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          Sign Up
        </button>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </div>
    </div>
  );
}
