import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../utils/firebase"

export default function Nav() {
  
  const [user, loading] = useAuthState(auth)
  
  return (
    <div className="flex justify-between items-center py-5">
      <Link href={"/"} className="text-darker text-xl font-medium">Dev Network</Link>
      
        {!user &&
        <Link href={"/auth/login"} className="py-2 px-4 rounded-lg font-medium bg-darker text-light text-md">Sign In</Link>
        }
        {user &&
        <div className="flex items-center gap-8">
          <Link href={"/post"} className="py-2 px-4 rounded-lg font-medium bg-darker text-light text-md">Post</Link>
          <Link href={"/dashboard"}>
            <img src={user.photoURL} className="rounded-full w-11"/>
          </Link>
        </div>
        }
    </div>
  )
}
