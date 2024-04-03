import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.replace("https://admin.hepiste.mithatsarsu.com");
  }, []);

  return null; // Varsayılan olarak, hiçbir şey döndürmez
};

export default Redirect;
