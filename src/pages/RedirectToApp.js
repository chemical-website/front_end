import { useEffect } from "react";

function RedirectToApp() {
  
    useEffect(() => {
        window.location.href = "/app";
    }, [])
    return <></>;
}

export default RedirectToApp;