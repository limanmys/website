import LogoCarousel from "../ui/logo-carousel"
import Particles from "../ui/particles"

export default function References() {
  return (
    <div className="pointer-events-none relative border-t bg-background py-10">
      <Particles className="absolute w-full" />
      <div className="container">
        <LogoCarousel />
      </div>
    </div>
  )
}
