import { Link } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/chat"); 
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-3 border rounded-lg p-2" />
        <input type="password" placeholder="Password" className="w-full mb-3 border rounded-lg p-2" />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          Sign In
        </button>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600">Register</Link>
        </p>
      </div>
    </div>
  );
}
