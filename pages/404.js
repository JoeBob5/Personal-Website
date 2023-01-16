import { useRouter } from "next/router"
import { useEffect } from "react"

function NotFound(){

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000)
  }, []); 
  
  return(
    <>
      <h1>Oh, no!</h1>
      <p>Your requested page could not be found</p>
      <p>You will be redirected shortly...</p>
    </>
  )
}

export default NotFound; 