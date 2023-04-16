import React, { useEffect, useState } from 'react';
import './Styles/login.css';
import { handlePopupEvents } from './script.js';
import logo from './Styles/LOGO2.png';

const API_URL = "http://localhost:3001";

const handleRegister = async (event) => {
  event.preventDefault();
  const citizen_card_number = event.target[0].value;
  const email = event.target[1].value;
  const password = event.target[2].value;

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ citizen_card_number, email, password }),
    });
    const data = await response.json();
    if (data.id) {
      console.log(`User ${data.id} created`);
    } else {
      console.error("Error creating user");
    }
  } catch (err) {
    console.error(err);
  }
};


const CoimbraReporta = ({ onLoginSuccess }) =>  {
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    onLoginSuccess();

    /*try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.id) {
        console.log(`User ${data.id} logged in`);
      } else {
        console.error("Error logging in");
      }
    } catch (err) {
      console.error(err);
    }*/
  };
  useEffect(() => {
    handlePopupEvents();

    const createScript = (src, isModule) => {
      const script = document.createElement('script');
      script.src = src;
      if (isModule) {
        script.type = 'module';
      } else {
        script.setAttribute('nomodule', '');
      }
      document.body.appendChild(script);
      return script;
    };

    const ionIconsScriptModule = createScript(
      'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
      true
    );
    const ionIconsScriptNomodule = createScript(
      'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js',
      false
    );

    return () => {
      document.body.removeChild(ionIconsScriptModule);
      document.body.removeChild(ionIconsScriptNomodule);
    };
}, []);

  return (
    <>
      <header>
      <img className="logo" src={logo} alt="Logo" />
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Contactos</a>
          <button className="btnLogin-popup">Iniciar Sessão</button>
        </nav>
      </header>
      <div className="wrapper">
        <span className="icon-close">
          <ion-icon name="close"></ion-icon>
        </span>
        <div className="form-box login">
          <h2>Iniciar Sessão</h2>
          <form action="#" onSubmit={handleLogin}>
            <div className="input-box">
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Lembra-me</label>
              <a href="#">Esqueci-me da password!</a>
            </div>
            <button type="submit" class="btn">Login</button>
            <div className="login-register">
              <p>Não tens uma conta?<a href="#" className="register-link"> Regista-te</a></p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <h2>Criar nova conta</h2>
          <form action="#" onSubmit={handleRegister}>
            <div className="input-box">
              <span className="icon"><ion-icon name="person"></ion-icon></span>
              <input type="text" required />
              <label>Número de Cartão de Cidadão</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="mail"></ion-icon></span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />I agree to the terms & conditions</label>
            </div>
            <button type="submit" class="btn">Register</button>
            <div className="login-register">
              <p>Já tens uma conta?<a href="#" className="login-link"> Iniciar Sessão</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CoimbraReporta;