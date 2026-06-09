import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/profile";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  return {
    title: article ? `${article.title} | Neil Pimley` : "Writing | Neil Pimley",
    description: article?.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 py-10">
      <article className="mx-auto max-w-3xl">
        <Link href="/#writing" className="text-sm font-semibold text-sky-500">
          Back to writing
        </Link>
        <p className="mt-12 text-sm font-semibold uppercase tracking-[0.22em] text-sky-500">
          {article.topic}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">{article.title}</h1>
        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
          {article.published ? `Published ${article.published}` : `Created ${article.created}`}
        </p>
        <div className="mt-10 rounded-md border border-[var(--line)] bg-[var(--panel)] p-6">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">{article.excerpt}</p>
          <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">
            The supplied LinkedIn export contains the original article HTML. This portfolio keeps a
            concise article summary in the application data layer so the blog can be expanded with
            full posts without adding unsupported claims.
          </p>
        </div>
      </article>
    </main>
  );
}
