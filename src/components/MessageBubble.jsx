export default function MessageBubble({ name, time, text, avatar }) {
  return (
    <div className="flex items-start space-x-3">
      <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-medium">
          {name} <span className="text-xs text-gray-500">{time}</span>
        </p>
        <p className="bg-gray-200 inline-block p-2 rounded-lg">{text}</p>
      </div>
    </div>
  );
}
