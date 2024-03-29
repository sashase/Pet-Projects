import Head from "next/head"
import Link from "next/link"
import { db } from "../utils/firebase"
import { useEffect, useState } from "react"
import Message from "../components/Message"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import Like from "../components/Like"

export default function Home() {
  const [allPosts, setAllPosts] = useState([])

  const getPosts = () => {
    const collectionRef = collection(db, "posts")
    const q = query(collectionRef, orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    return unsubscribe
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div>
      <Head>
        <title>Dev Network</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-6">
        {allPosts.map((post) => (
          <div key={post.id}>
            <Message {...post}>
              <Like post={post} />
              <Link
                href={{ pathname: `/${post.id}`, query: { ...post } }}
                key={"sas"}
              >
                <button>
                  {post.comments?.length ? post.comments.length : "0" } Comments
                </button>
              </Link>
            </Message>
          </div>
        ))}
      </div>
    </div>
  )
}
