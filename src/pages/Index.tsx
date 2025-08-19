import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import Home from './Home';
import Welcome from './Welcome';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner message="Iniciando aplicación..." />;
  }

  if (user) {
    return <Home />;
  }

  return <Welcome />;
};

export default Index;