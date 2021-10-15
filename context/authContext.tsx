import { createContext } from "react";

interface AuthContextType {}

const initialState: AuthContextType = {}

const AuthContext = createContext<AuthContextType>(initialState);

