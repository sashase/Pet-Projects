import Link from "next/link"
import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore"
import Message from "../components/Message"
import { BsFillTrashFill } from "react-icons/bs"
import { MdEdit } from "react-icons/md"

export default function Dashboard() {
  const route = useRouter()

  const [user, loading] = useAuthState(auth)
  const [posts, setPosts] = useState([])

  const getData = () => {
    if (loading) return
    if (!user) return route.push("auth/login")

    const collectionRef = collection(db, "posts")
    const q = query(collectionRef, where("uid", "==", user.uid))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    return unsubscribe
  }

  const deletePost = async (id) => {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
  }

  useEffect(() => {
    getData()
  }, [user, loading])

  return (
    <div className="bg-light shadow-xl rounded-lg my-12 p-10">
      <h2 className="text-darker text-center font-medium text-3xl">
        Dashboard
      </h2>
      <h3 className="text-darker text-center font-medium text-xl my-6">
        Your posts
      </h3>
      {posts.length != 0 && (
        <div className="w-full rounded-lg">
          <ul className="text-light font-medium">
            {posts.map((post) => {
              return (
                <Message {...post} key={post.id}>
                  <div className="flex gap-4 py-1">
                    <Link href={{ pathname: "/post", query: post }}>
                      <button className="flex items-center gap-2">
                        <MdEdit />
                        Edit
                      </button>
                    </Link>
                    <button
                      className="flex items-center gap-2 text-red-500"
                      onClick={() => deletePost(post.id)}
                    >
                      <BsFillTrashFill />
                      Delete
                    </button>
                  </div>
                </Message>
              )
            })}
          </ul>
        </div>
      )}
      {posts.length == 0 && (
        <h3 className="text-darker text-center font-medium text-xl my-6">
          You don't have any posts yet
        </h3>
      )}
      <button
        onClick={() => auth.signOut()}
        className="py-2 px-4 rounded-lg font-medium bg-darker text-light text-md hover:bg-light hover:text-darker"
      >
        Log out
      </button>
    </div>
  )
}
