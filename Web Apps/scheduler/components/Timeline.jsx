import { currentDate } from "../modules/date"
import timeOfLessons from "../modules/timeOfLessons.js"

export default function Timeline(props) {
  return (
    <div
      className={`items-center text-center text-lg leading-5 font-bold ${
        props.currentLesson === props.lessonNum &&
        props.currentWeekDay === currentDate.weekDay.englishName
          && "text-green animate-pulse"
      }`}>
      <p className="text-black dark:text-gray-300 w-14">
        {timeOfLessons[props.year === "2r" ? 1 : props.year - 1][props.lessonNum].start}
        <br />
        <span className="font-normal text-sm text-black dark:text-gray-300">
          {timeOfLessons[props.year === "2r" ? 1 : props.year - 1][props.lessonNum].end}
        </span>
      </p>
    </div>
  )
}
