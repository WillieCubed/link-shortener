import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-screen f-screen dark:text-gray-50">
      <Head>
        <title>WillieCubed Link Shortener</title>
        <meta name="description" content="Willie's link shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-4 text-xl font-bold bg-slate-50 dark:bg-slate-800 shadow-lg">
        <div>
          <Link href="/">WillieCubed Link Shortener</Link>
        </div>
      </header>
      <main className="p-8 space-y-4">
        <section className="mx-auto max-w-3xl bg-white dark:bg-slate-700 p-4 shadow-md rounded-lg">
          <h1 className="font-bold text-2xl pt-2 pb-4">Add a link</h1>
          <form>
            <div className="p-2">
              <label htmlFor="targetUrl">
                Target URL
                <input type="url" name="targetUrl" id="targetUrl" />
              </label>
            </div>
            <div className="p-2">
              <label htmlFor="originalUrl">
                Original URL
                <input type="url" name="originalUrl" id="originalUrl" />
              </label>
            </div>
            <button
              type="submit"
              className="m-4 p-2 rounded-md bg-slate-200 dark:bg-slate-600"
            >
              Create URL
            </button>
          </form>
        </section>
        <section className="mx-auto max-w-3xl bg-white dark:bg-slate-700 p-4 shadow-md rounded-lg">
          <h1 className="font-bold text-2xl pt-2 pb-4">Link Preview</h1>
          <div className="mx-auto max-w-lg">
            <div className="border-2 border-gray-100 dark:border-gray-500 rounded-lg p-4 bg-slate-50 dark:bg-slate-600">
              <div className="text-xl">Title</div>
              <div className="text-lg">Original URL</div>
              <div className="text-lg">Target URL</div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
