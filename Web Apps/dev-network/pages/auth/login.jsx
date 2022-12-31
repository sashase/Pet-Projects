import { BsGoogle } from "react-icons/bs"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "../../utils/firebase"
import { useRouter } from "next/router"

export default function Login() {
  const route = useRouter()

  const googleProvider = new GoogleAuthProvider()
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      route.push("/")
    } catch (error) {}
  }

  return (
    <div className="bg-light shadow-xl rounded-lg mt-32 p-10">
      <h2 className="text-darker text-center font-medium text-2xl">Sign In!</h2>
      <div className="py-5">
        <h3 className="text-darker text-center font-medium text-lg pb-4">
          Sign in with providers below
        </h3>
        <button
          onClick={googleLogin}
          className="text-light font-medium flex align-middle w-full bg-darker rounded-lg py-2 px-4 gap-3 hover:bg-light hover:text-darker"
        >
          <BsGoogle className="text-2xl" /> Sign in with Google
        </button>
      </div>
    </div>
  )
}
