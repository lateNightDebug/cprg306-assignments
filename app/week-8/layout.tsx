import { AuthContextProvider } from "./_utils/auth-context";
 
const Layout = ({ children}:any) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
 
export default Layout;