"use client";
import React from "react";
import "./login.css";

export default function LoginForm() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>Login to your account</h2>
          <p>Entrez votre email ci-dessous pour vous connecter à votre compte</p>
          <a href="#" className="signup-link">Sign Up</a>
        </div>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="m@example.com" required />

          <div className="password-field">
            <label>Mot de passe</label>
            <a href="#" className="forgot-link">Forgot your password?</a>
          </div>
          <input type="password" required />

          <button type="submit" className="btn black">Login</button>
        </form>
      </div>
    </div>
  );
}
