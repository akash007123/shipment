export default function WelcomeSection() {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">Welcome, John Mathew!!</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Order Sync Successful!</h2>
            <p className="text-sm text-gray-600 mb-4">Your order details from the last 30 days have been successfully synced. Check them out now!</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Explore Your Orders</button>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Customize Customer Notification</h2>
            <p className="text-sm text-gray-600 mb-4">Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Configure Notifications</button>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Your Tracking Link has been generated</h2>
            <p className="text-sm text-gray-600 mb-4">Include the Link to Your Store's Navigation Menu.</p>
            <div className="space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Copy Link</button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">Go To Navigation Menu</button>
            </div>
          </div>
        </div>
      </section>
    )
  }