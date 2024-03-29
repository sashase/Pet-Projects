import Link from "next/link"

export default function WeekButtons(props) {
  return (
    <div className="flex gap-5 text-sm font-bold lg:m-0 m-auto">
      <Link
        className={`${
          props.query.week === "1"
            ? "bg-green text-white"
            : "bg-grayGreen dark:bg-darkModeGray text-black dark:text-gray-400"
        } shadow-def rounded-3xl py-3 px-5 transition-all duration-300 outline-none`}
        href={{
          pathname: "/schedule",
          query: {
            ...props.query,
            week: 1
          }
        }}>
        1 тиждень
      </Link>
      <Link
        className={`${
          props.query.week === "2"
            ? "bg-green text-white"
            : "bg-grayGreen dark:bg-darkModeGray text-black dark:text-gray-400"
        } shadow-def rounded-3xl py-3 px-5 transition-all duration-300 outline-none`}
        href={{
          pathname: "/schedule",
          query: {
            ...props.query,
            week: 2
          }
        }}>
        2 тиждень
      </Link>
    </div>
  )
}
