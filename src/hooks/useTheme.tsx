import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark-green' | 'light' | 'dark-blue' | 'dark-purple' | 'dark-orange';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('fzs-theme') as Theme;
    return saved || 'dark-green';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark-green', 'light', 'dark-blue', 'dark-purple', 'dark-orange');
    root.classList.add(theme);
    localStorage.setItem('fzs-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
