import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { User } from "../types/auth.types";

type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string | null) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function readStoredAuth(): { user: User | null; token: string | null } {
  try {
    const rawUser = localStorage.getItem("userKey");
    const token = localStorage.getItem("accessToken");
    const parsed = rawUser ? JSON.parse(rawUser) : null;
    // Normalize into User shape
    const user: User | null = parsed
      ? {
          id: parsed._id ?? parsed.id ?? "",
          fullname: parsed.fullname ?? parsed.fullrname ?? "",
          email: parsed.email ?? "",
          userRole: parsed.userRole ?? "user",
        }
      : null;
    return { user, token };
  } catch {
    return { user: null, token: null };
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [{ user, token }, setAuth] = useState(readStoredAuth());

  const isAuthenticated = !!user && !!(token ?? true); // allow cases without token but with user

  useEffect(() => {
    // keep localStorage in sync
    if (user) {
      localStorage.setItem(
        "userKey",
        JSON.stringify({
          _id: user.id,
          fullname: user.fullname,
          email: user.email,
          userRole: (user as any).userRole ?? "user",
        })
      );
    } else {
      localStorage.removeItem("userKey");
    }
    if (token) localStorage.setItem("accessToken", token);
    else localStorage.removeItem("accessToken");
  }, [user, token]);

  const ctx = useMemo<AuthContextType>(
    () => ({
      user,
      token,
      isAuthenticated,
      login: (u, t) => setAuth({ user: u, token: t ?? null }),
      logout: () => setAuth({ user: null, token: null }),
    }),
    [user, token, isAuthenticated]
  );

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
