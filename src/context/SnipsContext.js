import { createContext, useContext, useEffect, useState } from 'react';
import { getSnips } from '../services/snips.js';

const SnipsContext = createContext();

const SnipsProvider = ({ children }) => {
  const [snips, setSnips] = useState([]);

  useEffect(() => {
    const fetchSnips = async () => {
      try {
        const data = await getSnips();
        setSnips(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchSnips();
  }, []);

  return <SnipsContext.Provider value={{ snips, setSnips }}>{children}</SnipsContext.Provider>;
};

const useSnips = () => {
  const data = useContext(SnipsContext);
  console.log('data', data);

  if (!data) {
    throw new Error('useSnips must be wrapped in a UseProvider');
  }
  return data;
};

export { SnipsProvider, useSnips };
