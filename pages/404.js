import { useRouter } from "next/router"
import { useEffect } from "react"

function NotFound(){

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000)
  }, []); 
  
  return(
    <div className="not-found">
      <h1>Oh, no!</h1>
      <p>Your requested page could not be found</p>
      <p>You will be <span className="golden">redirected</span> shortly...</p>
    </div>
  )
}

export default NotFound; 