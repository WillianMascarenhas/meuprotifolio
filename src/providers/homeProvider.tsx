import { ReactNode, createContext, useState } from "react";

interface HomeValues {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean
}
interface HomeProviderProps {
  children: ReactNode;
}
export const HomeContext = createContext({} as HomeValues);

export const HomeProvider = ({ children }: HomeProviderProps) => {
  const [loading, setLoading] = useState(true);

  const HomeContextValue: HomeValues = {
    setLoading: setLoading,
    loading:loading
  };

  return (
    <HomeContext.Provider value={HomeContextValue}>
      {children}
    </HomeContext.Provider>
  );
};
