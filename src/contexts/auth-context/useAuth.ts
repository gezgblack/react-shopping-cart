import { useAuthContext } from './AuthContextProvider';

const useAuth = () => {
  return useAuthContext();
};

export default useAuth;

