export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid gap-4 w-full max-w-3xl mx-auto">
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-4xl font-bold">Quill Weather</h1>
        </div>
        <form className="flex flex-col gap-2">
          <label className="text-base" htmlFor="location">
            Enter a location or zip code
          </label>
          <input
            className="p-3 rounded-md border border-gray-200 focus:outline-none focus:ring focus:ring-gray-300 dark:border-gray-800 dark:focus:ring-gray-600 dark:text-black"
            id="location"
            placeholder="Search for a city or zip code..."
          />
        </form>
        <div className="flex flex-col gap-2">
          <button
            className="p-3 rounded-md bg-blue-500 text-white font-bold hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 dark:bg-indigo-700 dark:focus:ring-indigo-600"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
}
