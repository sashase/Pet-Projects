import Head from "next/head"
import { db } from "../utils/firebase.js"
import { doc, getDoc } from "firebase/firestore"
import { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { currentDate, weekDays } from "../modules/date"
import DayButtons from "../components/DayButtons.jsx"
import WeekButtons from "../components/WeekButtons.jsx"
import Lesson from "../components/Lesson.jsx"
import getCurrentLesson from "../modules/getCurrentLesson.js"
import Timeline from "../components/Timeline.jsx"
import LibraryDay from "../components/LibraryDay.jsx"
import Loading from "../components/Loading.jsx"

export default function Schedule() {
  const [currentWeekDay, setCurrentWeekDay] = useState("")
  const [currentTime, setCurrentTime] = useState({
    hours: currentDate.time.hours,
    minutes: currentDate.time.minutes
  })
  const [currentSchedule, setCurrentSchedule] = useState("")
  const [libraryDay, setIsLibraryDay] = useState(true)
  const { query, isReady } = useRouter()

  const getSchedule = async () => {
    const docRef = doc(db, `year${query.year}`, `schedule${query.week}`)
    const docSnap = await getDoc(docRef)
    setCurrentSchedule(docSnap.data()[query.group])
  }

  const isLibraryDay = () => {
    setIsLibraryDay(true)
    currentSchedule[currentWeekDay].forEach((lesson) => {
      if (lesson.lesson != "") {
        setIsLibraryDay(false)
      }
    })
  }

  useEffect(() => {
    if (isReady) getSchedule()
    const getScheduleWeekDay = () => {
      if (query.group !== "ipz41" && query.group !== "kn41") {
        if (query.weekDay === "saturday" || query.weekDay === "sunday")
          return "monday"
        else return query.weekDay
      }

      if (query.group === "kn41" && query.weekDay !== "sunday") {
        return query.weekDay
      } else if (
        query.group === "ipz41" &&
        ((query.week === "2" && query.weekDay !== "sunday") ||
          (query.week === "1" &&
            query.weekDay !== "saturday" &&
            query.weekDay !== "sunday"))
      ) {
        return query.weekDay
      } else return "monday"
    }
    setCurrentWeekDay(getScheduleWeekDay())
  }, [query.weekDay, query.week])

  useEffect(() => {
    if (currentSchedule) isLibraryDay()
  }, [currentSchedule])

  return (
    <div>
      <Head>
        <title>Schedule</title>
      </Head>
      <div className="lg:mx-20 md:mx-10 mx-0">
        <div className="flex flex-wrap items-center gap-8 text-center text-2xl font-bold my-7">
          {weekDays.map((weekDay, key) => {
            if (
              weekDay.englishName === "saturday" &&
              query.group !== "ipz41" &&
              query.group !== "kn41"
            )
              return
            else if (
              weekDay.englishName === "saturday" &&
              query.week === "1" &&
              query.group === "ipz41"
            )
              return
            return (
              <DayButtons
                key={key}
                weekDay={weekDay.englishName}
                weekDayShortName={weekDay.shortName}
                currentWeekDay={currentWeekDay}
                query={query}
              />
            )
          })}
          <WeekButtons query={query} />
        </div>
        <div className="flex flex-col gap-10 my-14">
          {currentSchedule ? (
            !libraryDay ? (
              currentSchedule[currentWeekDay].map((lesson, key) => {
                return (
                  <Fragment key={key}>
                    {lesson.lesson != "" && (
                      <div className="flex gap-8 items-center" key={key}>
                        <Timeline
                          lessonNum={key}
                          currentWeekDay={currentWeekDay}
                          currentLesson={getCurrentLesson(
                            `${currentTime.hours}:${currentTime.minutes}`,
                            query.year
                          )}
                          year={query.year}
                        />
                        <div className="max-w-xs">
                          <Lesson
                            lesson={lesson.lesson}
                            teacher={lesson.teacher}
                            classRoom={lesson.classRoom}
                          />
                        </div>
                      </div>
                    )}
                  </Fragment>
                )
              })
            ) : (
              <LibraryDay />
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  )
}
