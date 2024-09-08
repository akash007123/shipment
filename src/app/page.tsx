import WelcomeSection from './components/WelcomeSection'
import PerformanceMetrics from './components/PerformanceMetrics'
import Functionality from './components/Functionality'

export default function Home() {
  return (
    <div className="space-y-8">
      <WelcomeSection />
      <PerformanceMetrics />
      <Functionality />
    </div>
  )
}