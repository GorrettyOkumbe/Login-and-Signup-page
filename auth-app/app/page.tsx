'use client'; // Needed for client-side features

import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: '#f8f9fa' }} // Light gray background
    >
      {/* Full-screen container, vertically and horizontally centered */}

      <div className="card p-5 shadow-lg text-center" style={{ maxWidth: '400px', width: '90%' }}>
        {/* Card with padding, shadow, and responsive width */}

        <h1 className="mb-3">Welcome to Auth App 🔐</h1>
        {/* Main heading */}

        <p className="lead mb-4">
          Login or create an account to continue
        </p>
        {/* Subheading */}

        <div className="d-grid gap-3">
          {/* Bootstrap grid for buttons with spacing */}

          <Link href="/login" className="btn btn-primary btn-lg">
            Login
          </Link>

          <Link href="/signup" className="btn btn-success btn-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}