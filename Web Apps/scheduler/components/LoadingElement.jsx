export default function LoadingElement() {
  return (
    <div className="flex gap-8 items-center">
      <div className="flex flex-col gap-2 items-center animate-pulse">
        <div className="bg-gray-300 w-12 h-4 rounded-full" />
        <div className="bg-gray-300 w-10 h-4 rounded-full" />
      </div>
      <div className="flex flex-col justify-between shadow-def rounded-3xl py-3 px-5 min-h-[100px] animate-pulse w-[320px]">
        <div className="bg-gray-300 w-full h-6 rounded-full" />
        <div className="bg-gray-300 w-full h-5 rounded-full my-3" />
        <div className="flex justify-between">
          <div className="bg-gray-300 w-1/3 h-4 rounded-full" />
          <div className="bg-gray-300 w-1/5 h-4 rounded-full" />
        </div>
      </div>
    </div>
  )
}
