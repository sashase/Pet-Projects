import { isFirstWeek } from "../modules/isFirstWeek"
import { currentDate } from "../modules/date"
import Link from "next/link"
import groups from "../modules/groups"
import { useEffect, useRef } from "react"

export default function Popup(props) {
  const popupRef = useRef()

  useEffect(() => {
    const handleClose = (e) => {
      if (!popupRef.current.contains(e.target)) {
        props.setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClose)

    return () => {
      document.removeEventListener("mousedown", handleClose)
    }
  }, [popupRef])

  return (
    <div className="fixed inset-0 min-h-screen bg-black bg-opacity-75 flex items-center justify-center">
      <div
        ref={popupRef}
        className={`h-[450px] md:h-[400px] bg-whiteGreen dark:bg-blackGreen rounded-[45px] p-3`}>
        <h3 className="text-black dark:text-gray-300 text-3xl my-6">
          Оберіть групу
        </h3>
        <hr className="w-11/12 m-auto border-1 border-green border-opacity-10" />
        <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center justify-evenly gap-8 gap-y-7 m-6">
          {groups[props.year].map((group, key) => {
            return (
              <Link
                key={key}
                href={{
                  pathname: "/schedule",
                  query: {
                    year:
                      Number(props.year) === 2
                        ? "2r"
                        : Number(props.year) > 2
                        ? Number(props.year)
                        : Number(props.year) + 1,
                    group: groups[props.year][key].query,
                    weekDay: currentDate.weekDay.englishName,
                    week: isFirstWeek() ? 1 : 2
                  }
                }}
                className={`text-black dark:text-gray-300 text-xl md:text-2xl w-[120px] h-[50px] leading-[50px] md:w-[140px] md:h-[55px] md:leading-[55px] bg-lightGreen dark:bg-darkModeGray shadow-groups rounded-[90px] ${
                  key === 6
                    ? "col-span-full"
                    : key === 3 && props.year === "4"
                    ? "md:col-span-full"
                    : ""
                }`}>
                {group.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
