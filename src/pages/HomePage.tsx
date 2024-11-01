import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Home Page</h2>

      <Link className="text-main" to="/register">Register</Link>
    </div>
  );
}

export default HomePage;
