import Image from 'next/image'
import Hero from "@/components/main/hero";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col h-[850px] gap-20">
          <Hero />
      </div>
    </main>
  )
}
