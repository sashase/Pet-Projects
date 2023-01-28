import LoadingElement from "./LoadingElement"

export default function Loading() {
  return (
    <div className="flex flex-col gap-10">
      <LoadingElement />
      <LoadingElement />
      <LoadingElement />
      <LoadingElement />
    </div>
  )
}
