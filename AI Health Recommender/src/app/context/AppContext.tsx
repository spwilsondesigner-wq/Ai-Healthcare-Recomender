import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface AppState {
  fileName: string;
  fileType: "LLM" | "Non-LLM" | null;
  originalDocument: string;
  maskedDocument: string;
  confidenceScore: number;
  finalReport: string;
}

interface AppContextType {
  state: AppState;
  updateState: (updates: Partial<AppState>) => void;
  resetState: () => void;
}

const initialState: AppState = {
  fileName: "",
  fileType: null,
  originalDocument: "",
  maskedDocument: "",
  confidenceScore: 0,
  finalReport: "",
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(initialState);

  const updateState = useCallback((updates: Partial<AppState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return (
    <AppContext.Provider value={{ state, updateState, resetState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}