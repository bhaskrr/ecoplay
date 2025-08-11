import { TopicCards } from "@/components/TopicCards"

export default function GamePage() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mt-6 mb-10">
        <h2 className="md:text-5xl mb-3 font-semibold">Choose Your Learning Track</h2>
        <p className="max-w-xl mx-auto md:text-lg">Progress through carefully designed learning paths that build your economic knowledge step by step.</p>
      </div>
      <div>
        <TopicCards />
      </div>
    </section>
  )
}