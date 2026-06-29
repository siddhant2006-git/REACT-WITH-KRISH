import { useRef } from 'react'

export default function WomanCard({ name, subtitle, accent = '#ec4899', onClick }) {
  const ref = useRef(null)

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    const rx = -y * 8
    const ry = x * 12
    const tx = x * 6
    const ty = y * 6
    el.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 8px)`
    el.style.boxShadow = `${-ry}px ${rx}px 30px rgba(0,0,0,0.12)`
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.boxShadow = ''
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className="magnetic cursor-pointer rounded-2xl p-5 bg-white dark:bg-[#1f1f24] transition-transform duration-300"
      style={{ borderLeft: `6px solid ${accent}` }}
    >
      <div className="flex items-center gap-4">
        <div style={{ background: accent }} className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {name?.[0] || '?'}
        </div>
        <div className="text-left">
          <div className="text-lg font-semibold hover:font-extrabold">{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-300">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}
