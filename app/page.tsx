import Link from "next/link"

export default function Home() {
return (
  <div className="min-h-screen bg-purple-800 text-white">
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Professional Painting Services</h1>
          <p className="text-lg">
            Transform your space with our expert painting services. Quality work, competitive prices.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/chat"
              className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-md font-medium hover:bg-yellow-300 transition-colors flex items-center gap-2"
            >
              Chat with AI
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="bg-purple-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Chat with our assistant</h2>
          <p className="text-sm mb-4">Ask about our services, pricing, or scheduling</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Type your question here..."
              className="w-full p-3 pr-10 rounded-md bg-purple-600 text-white placeholder-purple-300 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-purple-800 p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-center mb-6">See how it works</h2>
        <p className="text-center mb-8">
          Watch our professional painting services transform spaces into beautiful environments.
        </p>

        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
          {/* This is a placeholder for the video */}
          <div className="aspect-video bg-black flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8" fill="black"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}