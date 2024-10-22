import Hero from "../components/hero"
import Slider from "../components/slider"
import Steps from "../components/steps"
import Testimonial from "../components/testimonial"
import Upload from "../components/upload"


function Home() {
  return (
    <div>
      <Hero />
      <Steps />
      <Slider />
      <Testimonial />
      <Upload />
    </div>
  )
}

export default Home