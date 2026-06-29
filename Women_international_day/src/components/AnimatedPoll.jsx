export default function AnimatedPoll({ data = [] }) {
  return (
    <div className="space-y-4">
      {data.map((entry) => (
        <div key={entry.country}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">{entry.country}</span>
            <span className="text-sm text-gray-600">{entry.percent}%</span>
          </div>
          <div className="bg-gray-200 dark:bg-gray-700 h-3 rounded overflow-hidden">
            <div
              className="h-3 rounded bg-linear-to-r from-indigo-500 to-pink-500"
              style={{ width: `${entry.percent}%`, transition: 'width 700ms ease' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
