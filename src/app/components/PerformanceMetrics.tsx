import ShipmentUpdatesChart from './ShipmentUpdatesChart'

export default function PerformanceMetrics() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Instant Dive into Your Performance Metrics</h2>
      <div className="flex space-x-4 mb-4 overflow-x-auto">
        <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded whitespace-nowrap">Lifetime</button>
        <button className="text-gray-600 px-4 py-2 whitespace-nowrap">Last Week</button>
        <button className="text-gray-600 px-4 py-2 whitespace-nowrap">Last Month</button>
        <button className="text-gray-600 px-4 py-2 whitespace-nowrap">Last Year</button>
        <button className="text-gray-600 px-4 py-2 flex items-center whitespace-nowrap">
          Customize Time Line
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ShipmentUpdatesChart />
        <div className="bg-[#8B6E4E] text-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Star Facts about your orders!!!</h3>
          <ul className="space-y-2">
            <li>There are 8 shipments that have been in out for delivery for more than 3 days.</li>
            <li>There are 5 shipments in exception right now</li>
            <li>The maximum chargebacks are from Miami.</li>
          </ul>
          <button className="mt-4 bg-white text-[#8B6E4E] px-4 py-2 rounded">Check Orders Page</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Tracking Page Views Vs Orders</h3>
          <p className="text-sm text-gray-600 mb-4">Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
          <div className="space-y-4">
            <div className="bg-[#FFF1E3] p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Orders</span>
                <span className="text-3xl font-bold">80</span>
              </div>
              <svg className="w-6 h-6 text-[#8B6E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="bg-[#FFF8F0] p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Tracking Page Views</span>
                <span className="text-3xl font-bold">44</span>
              </div>
              <svg className="w-6 h-6 text-[#8B6E4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}