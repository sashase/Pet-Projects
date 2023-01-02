import { BsGoogle } from "react-icons/bs"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../utils/firebase"
import { useRouter } from "next/router"
import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react"

export default function Login() {
  const route = useRouter()

  const [user, loading] = useAuthState(auth)

  const googleProvider = new GoogleAuthProvider()
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      route.push("/")
    } catch (error) {}
  }

  useEffect(() => {
    user ? route.push("/") : console.log("login")
  }, [user])

  return (
    <div className="bg-light shadow-xl rounded-lg mt-32 p-10">
      <h2 className="text-darker text-center font-medium text-2xl">Sign In!</h2>
      <div className="py-5">
        <h3 className="text-darker text-center font-medium text-lg">
          Sign in with providers below
        </h3>
        <button
          onClick={googleLogin}
          className="text-light font-medium flex align-middle w-full bg-darker rounded-lg py-2 px-4 mt-5 gap-3 hover:bg-light hover:text-darker"
        >
          <BsGoogle className="text-2xl" /> Sign in with Google
        </button>
      </div>
    </div>
  )
}
