export default function MessageBubble({ name, time, text, avatar, isOwn }) {
  return (
    <div
      className={`flex items-start space-x-3 ${
        isOwn ? "justify-end" : "justify-start"
      }`}
    >
      {!isOwn && (
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      )}
      <div
        className={`max-w-xs p-2 rounded-lg ${
          isOwn
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        {!isOwn && (
          <p className="font-medium text-sm">
            {name} <span className="text-xs text-gray-500">{time}</span>
          </p>
        )}
        <p>{text}</p>
      </div>
      {isOwn && (
        <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      )}
    </div>
  );
}
