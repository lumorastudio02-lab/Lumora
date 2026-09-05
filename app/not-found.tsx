import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-accent text-xs uppercase tracking-[0.3em] mb-6">404</p>
      <h1 className="font-display font-bold text-[clamp(4rem,12vw,10rem)] leading-none tracking-tight text-foreground/10 mb-4 select-none">
        Lost?
      </h1>
      <p className="text-muted text-base mb-10 max-w-sm">
        This page doesn&apos;t exist. But your perfect website does — let&apos;s build it.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="pill-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-background text-sm font-semibold"
        >
          <span>Go home</span>
        </Link>
        <Link
          href="/work"
          className="pill-btn inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/25 text-sm text-foreground"
        >
          <span>See our work</span>
        </Link>
      </div>
    </div>
  )
}
