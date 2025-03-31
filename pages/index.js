import Head from 'next/head';

export default function BuildCircleLanding() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <Head>
        <title>BuildCircle</title>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      <h1 className="text-5xl font-press-start text-center mb-4">Welcome to BuildCircle</h1>
      <p className="text-lg font-press-start text-center max-w-2xl mb-6">
        The project-first/talk-second social platform for engineers. Show off your builds, find collaborators,
        and get recognized for what you create — not where you work.
      </p>

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-press-start font-semibold mb-4">Request Early Access</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-xl border border-gray-300 font-press-start"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-xl border border-gray-300 font-press-start"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-press-start font-bold py-3 px-6 rounded-xl"
          >
            Get Invite
          </button>
        </form>
      </div>

      <div className="mt-10 text-center text-gray-600 font-press-start">
        <p>🚀 Showcase your skills</p>
        <p>🤝 Meet and collaborate with other engineers</p>
        <p>🏆 Promote your availability and get placement</p>
      </div>
    </div>
  );
}
