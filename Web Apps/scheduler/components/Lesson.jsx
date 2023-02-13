export default function Lesson(props) {
  return (
    <div className={`flex flex-col justify-between bg-whitePurple dark:bg-darkModeGray shadow-def dark:no-shadow rounded-3xl py-3 px-5 min-h-[100px]`}>
      <h3 className="text-lg text-black dark:text-gray-300 m-auto font-bold">{props.lesson}</h3>
      <div className="flex justify-between">
        <p className="text-grey text-sm mr-3">{props.teacher}</p>
        <p className="text-grey text-sm">{props.classRoom}</p>
      </div>
    </div>
  )
}
