import Link from "next/link"

export default function WeekButtons(props) {
  return (
    <div className="flex gap-5 text-sm font-bold lg:m-0 m-auto">
      <Link
        className={`${
          props.query.week == "schedule1"
            ? "bg-purple text-white dark:text-gray-300"
            : "bg-grayPurple dark:bg-darkModeGray text-black dark:text-gray-400"
        } shadow-def rounded-3xl py-3 px-5 transition-all duration-300 outline-none`}
        href={{
          pathname: "/schedule",
          query: {
            ...props.query,
            week: "schedule1"
          }
        }}>
        1 тиждень
      </Link>
      <Link
        className={`${
          props.query.week == "schedule2"
            ? "bg-purple text-white dark:text-gray-300"
            : "bg-grayPurple dark:bg-darkModeGray text-black dark:text-gray-400"
        } shadow-def rounded-3xl py-3 px-5 transition-all duration-300 outline-none`}
        href={{
          pathname: "/schedule",
          query: {
            ...props.query,
            week: "schedule2"
          }
        }}>
        2 тиждень
      </Link>
    </div>
  )
}
