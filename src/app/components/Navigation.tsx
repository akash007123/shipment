import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex space-x-4">
        <Link href="/" className="text-purple-600 font-semibold">Home</Link>
        <Link href="/orders" className="text-gray-600">Orders</Link>
        <Link href="/integrations" className="text-gray-600">Integrations</Link>
        <div className="relative">
          <button className="text-gray-600 flex items-center">
            Tracking Page
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <Link href="/partner" className="text-gray-600">Partner with Us</Link>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
        <button className="text-gray-600">Account</button>
        <button className="text-gray-600">Settings</button>
      </div>
    </nav>
  )
}