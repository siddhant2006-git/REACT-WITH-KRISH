import { useEffect, useState } from 'react'
import './App.css'
import WomanCard from './components/WomanCard'
import AnimatedPoll from './components/AnimatedPoll'
import { fetchWomanDetails } from './api/fetchWomanDetails'

const SAMPLE = [
  { name: 'Marie Curie', subtitle: 'Physics & Chemistry', field: 'Science' },
  { name: 'Rosa Parks', subtitle: 'Civil Rights', field: 'Politics' },
  { name: 'Frida Kahlo', subtitle: 'Artist', field: 'Arts' },
  { name: 'Ada Lovelace', subtitle: 'Mathematician', field: 'Tech' },
]

function getAccentForField(field) {
  const map = {
    Science: '#06b6d4',
    Politics: '#4f46e5',
    Arts: '#ec4899',
    Tech: '#7c3aed',
    Sports: '#f59e0b',
  }
  return map[field] || '#9ca3af'
}

function App() {
  const [selected, setSelected] = useState(null)
  const [details, setDetails] = useState(null)

  useEffect(() => {
    if (!selected) return
    let mounted = true
      ; (async () => {
        const d = await fetchWomanDetails({ name: selected.name }, {})
        if (mounted) setDetails(d)
      })()
    return () => (mounted = false)
  }, [selected])

  const pollData = [
    { country: 'USA', percent: 32 },
    { country: 'India', percent: 26 },
    { country: 'UK', percent: 18 },
    { country: 'Brazil', percent: 12 },
    { country: 'Kenya', percent: 6 },
  ]

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-semibold mb-6">Women International — Spotlight</h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {SAMPLE.map((w) => (
          <WomanCard
            key={w.name}
            name={w.name}
            subtitle={w.subtitle}
            accent={getAccentForField(w.field)}
            onClick={() => setSelected(w)}
          />
        ))}
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-3">Details</h2>
          {selected ? (
            <div className="p-4 bg-white dark:bg-[#111113] rounded-lg">
              <h3 className="text-xl font-bold">{selected.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{details?.summary || 'Loading...'}</p>
              <div className="mt-3">
                <strong>Promotion ideas:</strong>
                <ul className="list-disc list-inside">
                  {(details?.promotionIdeas || []).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="p-6 bg-white dark:bg-[#111113] rounded-lg">Click a card to see details.</div>
          )}
        </div>

        <aside>
          <h2 className="text-2xl font-semibold mb-3">Country Poll</h2>
          <AnimatedPoll data={pollData} />
        </aside>
      </div>
    </div>
  )
}

export default App
