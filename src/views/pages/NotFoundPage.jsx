import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="container not-found-content">
        <p className="eyebrow">404 Error</p>

        <h1>Page not found</h1>

        <p>The page you are looking for does not exist.</p>

        <Link to="/" className="primary-button">
          Return Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;