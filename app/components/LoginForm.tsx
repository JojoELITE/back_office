"use client";
import React from "react";
import "./login.css";
import Image from "next/image";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="flex flex-col justify-center items-center  login-header">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={150}
            height={150}
          />
          <p className="pt-2 text-2xl text-blue-500">Connectez-vous</p>
        </div>
        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="m@example.com" required />

          <div className="password-field">
            <label>Mot de passe</label>
            <a href="#" className="forgot-link">
              Mot de passe oublier
            </a>
          </div>
          <input type="password" required />
          <Link href="/dashboard">
            <button type="submit" className="btn black w-full">
              Connexion
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
