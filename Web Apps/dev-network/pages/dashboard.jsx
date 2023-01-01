import { auth } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const route = useRouter()

  const [user, loading] = useAuthState(auth)

  const getData = () => {
    if (loading) return
    if (!user) return route.push("auth/login")
  }

  useEffect(() => {
    getData()
  }, [user, loading])

  return (
    <div className="bg-light shadow-xl rounded-lg mt-32 p-10">
      <h2 className="text-darker text-center font-medium text-2xl pb-4">
        Dashboard
      </h2>
      <h3 className="text-darker text-center font-medium text-lg">
        Your posts
      </h3>
      <div className="bg-darker w-full rounded-lg my-5">
        <ul className="text-light font-medium p-3">
          <li>Post1</li>
          <li>Post2</li>
          <li>Post3</li>
        </ul>
      </div>
      <button
        onClick={() => auth.signOut()}
        className="py-2 px-4 rounded-lg font-medium bg-darker text-light text-md hover:bg-light hover:text-darker"
      >
        Log out
      </button>
    </div>
  )
}
