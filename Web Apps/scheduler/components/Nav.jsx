import Link from "next/link"
import { currentDate } from "../modules/date"

export default function Nav() {
  return (
    <div>
      <nav className="flex justify-between items-center my-7">
        <Link href={"/"} className="font-pacifico text-green text-4xl">
          Scheduler
        </Link>
        <h2 className="text-2xl text-black dark:text-gray-300">
          {currentDate.weekDay.shortName}, {currentDate.day} {currentDate.month}
        </h2>
      </nav>
      <hr className="border-1 border-green border-opacity-10" />
    </div>
  )
}
