export default function Message({
  children,
  avatar,
  username,
  title,
  content,
}) {
  return (
    <div className="bg-darker text-light rounded-lg shadow-xl p-3 mt-4 mb-6">
      <div className="flex items-center gap-3">
        <img src={avatar} className="w-12 rounded-full" />
        <h3>{username}</h3>
      </div>
      <div className="my-3">
        <h2 className="text-xl font-medium pb-2">{title}</h2>
        <h3>{content}</h3>
      </div>
      {children}
    </div>
  )
}
