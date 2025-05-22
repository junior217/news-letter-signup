'use client';

import Link from 'next/link';

export default function EmailErrorPage() {
  return (
    <div className="min-h-screen bg-[#2B2D42] text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Missing Email</h1>
      <p className="text-lg mb-6">You must enter an email before subscribing to the newsletter.</p>
      <Link
        href="/"
        className="bg-gradient-to-r from-[#f857a6] to-[#ff5858] hover:from-[#e04691] hover:to-[#e94949] text-white font-semibold py-2 px-6 rounded-md transition-colors"
      >
        Go Back & Try Again
      </Link>
    </div>
  );
}