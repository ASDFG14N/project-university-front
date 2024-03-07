/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "../services/api/authRequests";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUp = async (userData) => {
    try {
      const response = await registerRequest(userData);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error during sign up:", error.message);
    }
  };

  const signIn = async (userData) => {
    try {
      const response = await loginRequest(userData);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error during sign in:", error.response.data.message);
    }
  };

  const logout = async () => {
    await logout();
  };

  useEffect(() => {
    const nombreCookie = "token";
    const valorCookie = obtenerValorCookie(nombreCookie);
    if (valorCookie != null) {
      setIsAuthenticated(true);
    } else {
      return setIsAuthenticated(false);
    }

    // Función para obtener el valor de una cookie por su nombre
    function obtenerValorCookie(nombre) {
      const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
      for (const cookie of cookies) {
        const [cookieNombre, cookieValor] = cookie.split("=");
        if (cookieNombre === nombre) {
          return cookieValor;
        }
      }
      return null; // Si no se encuentra la cookie
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logout,
        user,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
