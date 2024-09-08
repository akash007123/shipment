'use client'

import { useState } from 'react'

export default function Functionality() {
  const [accentColor, setAccentColor] = useState('#FF9898')
  const [textColor, setTextColor] = useState('#571010')
  const [backgroundColor, setBackgroundColor] = useState('#FFEAEA')
  const [htmlValue, setHtmlValue] = useState('')

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Discover the Heart of Our Functionality</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h3>
          <p className="text-sm text-gray-600 mb-4">Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>
          <div className="space-y-2">
            <div>
              <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">Accent Color</label>
              <input
                type="text"
                id="accentColor"
                value={accentColor}
                onChange={(e) => setAccentColor(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <div className="w-8 h-8 mt-1 rounded" style={{ backgroundColor: accentColor }}></div>
            </div>
            <div>
              <label htmlFor="textColor" className="block text-sm font-medium text-gray-700">Text Color</label>
              <input
                type="text"
                id="textColor"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <div className="w-8 h-8 mt-1 rounded" style={{ backgroundColor: textColor }}></div>
            </div>
            <div>
              <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-700">Background Color</label>
              <input
                type="text"
                id="backgroundColor"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <div className="w-8 h-8 mt-1 rounded" style={{ backgroundColor: backgroundColor }}></div>
            </div>
          </div>
          <div className="mt-4 space-x-2">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Preview</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply Colors</button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Exclusive Onboarding Support for High-Volume Brands</h3>
          <p className="text-sm text-gray-600 mb-4">Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
          <button className="bg-gray-800 text-white px-4 py-2 rounded w-full">Schedule A Call</button>
          <h4 className="font-semibold mt-4 mb-2">Explore Our Integrated Ecosystem</h4>
          <p className="text-sm text-gray-600 mb-4">Discover a variety of popular integrations tailored for your convenience.</p>
          <div className="flex space-x-2 mb-4">
            <img src="https://w7.pngwing.com/pngs/136/293/png-transparent-paypal-logo.png" alt="PayPal" className="w-8 h-8" />
            <img src="https://cdn.shopify.com/app-store/listing_images/1ff5e1954776a87c29b55388172a662f/icon/CJOP9ZSag_0CEAE=.png" alt="Shopify" className="w-8 h-8" />
            <img src="https://s.cafebazaar.ir/images/icons/tz.co.wadau.downloadbooster-233f140b-3d6a-4409-ba25-80126e5b4c08_128x128.png" alt="Square" className="w-8 h-8" />
            <img src="https://wpamelia.com/wp-content/themes/amelia-theme/assets/img/pricing/icons/icon_04.webp" alt="Google Analytics" className="w-8 h-8" />
            <img src="https://cdn.prod.website-files.com/667de4a880bfa3b43c3fbdcf/66b0a204ea37b34b0b864b0a_integration-Shopify%20Flow.webp" alt="Zapier" className="w-8 h-8" />
          </div>
          <button className="bg-gray-800 text-white px-4 py-2 rounded w-full">Explore Integrations</button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Seamlessly Integrate Custom HTML Elements</h3>
          <p className="text-sm text-gray-600 mb-4">Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
          <div className="mb-4">
            <label htmlFor="htmlInput" className="block text-sm font-medium text-gray-700 mb-2">HTML Link</label>
            <textarea
              id="htmlInput"
              rows={4}
              value={htmlValue}
              onChange={(e) => setHtmlValue(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your custom HTML here"
            ></textarea>
          </div>
          <div className="space-x-2">
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Preview</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Apply changes</button>
          </div>
        </div>
      </div>
    </section>
  )
}