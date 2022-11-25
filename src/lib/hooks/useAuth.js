import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { toastMaker } from "../utils";

const useAuth = () => {
  const {pathname} = useLocation();
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(pathname)
    if (!cookies.userData) {
      toastMaker.error("로그인이 필요합니다.")
      navigate('/login');
      return;
    }
  }, [pathname])
}

export default useAuth;