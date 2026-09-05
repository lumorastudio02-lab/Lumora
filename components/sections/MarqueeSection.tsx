import Marquee from '@/components/common/Marquee'

const row1 = ['Website Design', 'Brand Identity', 'Web Development', 'UI / UX Design', 'Strategy', 'Storytelling']
const row2 = ['Boutiques', 'Restaurants', 'Salons', 'Cafés', 'Studios', 'Wellness', 'Photography', 'Startups']

export default function MarqueeSection() {
  return (
    <div className="border-y border-gray-200 overflow-hidden bg-white">
      <div className="py-3.5 border-b border-gray-200">
        <Marquee
          items={row1}
          separator="◆"
          itemClassName="text-[11px] font-medium text-gray-400 tracking-[0.22em] uppercase whitespace-nowrap select-none"
        />
      </div>
      <div className="py-3.5">
        <Marquee
          items={row2}
          reverse
          separator="◆"
          itemClassName="text-[11px] font-medium text-gray-400/60 tracking-[0.22em] uppercase whitespace-nowrap select-none"
        />
      </div>
    </div>
  )
}