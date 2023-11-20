import LogoCarousel from "../ui/logo-carousel"
import Particles from "../ui/particles"

export default function References() {
  return (
    <div className="pointer-events-none relative border-t bg-background py-10">
      <Particles className="absolute w-full" />
      <div className="container flex flex-col items-center gap-5">
        <h5 className="bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text text-sm font-semibold text-transparent">
          Kurumlar tarafından güveniliyor
        </h5>
        <LogoCarousel />
      </div>
    </div>
  )
}
