import { currentDate } from "../modules/date"
import Link from "next/link"
import { isFirstWeek } from "../modules/isFirstWeek"

export default function GroupsList(props) {
  return (
    <div className="flex flex-col gap-3 text-center text-black dark:text-gray-300 mx-auto">
      <h2 className="text-3xl">{props.year}</h2>
      <hr className="border-1 border-purple opacity-20" />
      {props.groups.map((group, key) => {
        return (
          <Link
            key={group.query}
            className="bg-lightPurple dark:bg-darkModeGray text-xl py-3 px-9 rounded-2xl shadow-groups my-2"
            href={{
              pathname: "/schedule",
              query: {
                year: props.yearIndex == 2 ? "2r" : props.yearIndex + 1,
                group: props.groups[key].query,
                weekDay: currentDate.weekDay.englishName,
                week: isFirstWeek() ? 1 : 2
              }
            }}>
            {group.name}
          </Link>
        )
      })}
    </div>
  )
}
