import Current from './_components/Current'
import Latest from './_components/Latest'

function ArticlePage() {
  return (
    <main className="flex flex-col gap-32">
      <Current />
      <Latest />
    </main>
  )
}

export default ArticlePage
