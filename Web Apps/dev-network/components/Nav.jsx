import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex justify-between items-center py-5">
      <Link href={"/"} className="text-darker text-xl font-medium">Dev Network</Link>
      <ul>
        <Link href={"/auth/login"} className="py-2 px-4 rounded-lg font-medium bg-darker text-light text-md">Sign In</Link>
      </ul>
    </div>
  )
}
