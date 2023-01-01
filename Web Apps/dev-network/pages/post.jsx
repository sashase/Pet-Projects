import { auth, db } from "../utils/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { toast } from "react-toastify"

export default function Post() {
  const route = useRouter()

  const [post, setPost] = useState({ title: "", content: "" })
  const [user, loading] = useAuthState(auth)

  const toastProps = {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
  }

  const createPost = async () => {
    if (!post.title && !post.content) {
      toast.error("Your title and content are empty!", toastProps)
      return
    } else if (!post.title) {
      toast.error("Your title is empty!", toastProps)
      return
    } else if (!post.content) {
      toast.error("Your content is empty!", toastProps)
      return
    } else if (post.content.length > 300) {
      toast.error("You've reached characters limit!", toastProps)
      return
    }

    const collectionRef = collection(db, "posts")
    await addDoc(collectionRef, {
      ...post,
      uid: user.uid,
      username: user.displayName,
      avatar: user.photoURL,
      timestamp: serverTimestamp(),
    })
    setPost({ title: "", content: "" })
    route.push("/")
  }

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
        Make New Post!
      </h2>
      <div className="bg-darker text-light w-full rounded-lg my-5 p-3">
        <h3>Title</h3>
        <input
          type="text"
          value={post.title}
          className="bg-lighter text-darker rounded-lg p-1 my-1"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        ></input>
        <h3>Content</h3>
        <textarea
          value={post.content}
          className="bg-lighter text-darker resize-none w-full h-32 rounded-lg p-1 my-1"
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        ></textarea>
        <p className={post.content.length > 300 ? "text-red-500" : ""}>
          {post.content.length}/300
        </p>
      </div>
      <button
        onClick={createPost}
        className="py-2 px-4 rounded-lg font-medium bg-darker text-light text-md hover:bg-light hover:text-darker"
      >
        Create
      </button>
    </div>
  )
}
