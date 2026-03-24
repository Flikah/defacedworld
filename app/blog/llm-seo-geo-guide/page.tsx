import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'LLM SEO & GEO: How to Get Your Business Cited by ChatGPT and Perplexity',
  description: 'ChatGPT, Perplexity, and Google AI Overviews are how millions of people now find businesses. Here is exactly how to make sure yours gets cited — not ignored.',
  alternates: { canonical: 'https://defacedworld.com/blog/llm-seo-geo-guide' },
  openGraph: {
    title: 'LLM SEO & GEO: Get Cited by ChatGPT and Perplexity',
    description: 'AI search is replacing Google for millions of queries. Here is how to make sure your business shows up in ChatGPT, Perplexity, and Google AI Overviews.',
    url: 'https://defacedworld.com/blog/llm-seo-geo-guide',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'LLM SEO & GEO: How to Get Your Business Cited by ChatGPT and Perplexity',
  description: 'How to optimise your website so AI systems like ChatGPT, Perplexity, and Google AI Overviews cite your business in their answers.',
  author: { '@type': 'Person', name: 'Spencer Wilkinson', url: 'https://defacedworld.com/about' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://defacedworld.com/blog/llm-seo-geo-guide',
  keywords: ['LLM SEO', 'GEO', 'generative engine optimization', 'ChatGPT SEO', 'Perplexity SEO', 'AI search optimization'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is GEO (Generative Engine Optimization)?',
      acceptedAnswer: { '@type': 'Answer', text: 'GEO stands for Generative Engine Optimization. It is the practice of structuring your website content so that AI systems like ChatGPT, Perplexity, Google AI Overviews, and Claude can understand, retrieve, and cite it when answering user questions. It extends traditional SEO rather than replacing it.' }
    },
    {
      '@type': 'Question',
      name: 'Does SEO help with ChatGPT and AI search?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Good SEO is the foundation of good AI visibility. Structured content, schema markup, fast page speed, authoritative writing, and clear entity signals all help LLMs understand and cite your content. The same work that helps you rank on Google also helps you get cited in AI-generated answers.' }
    },
    {
      '@type': 'Question',
      name: 'How do I get my business mentioned in ChatGPT answers?',
      acceptedAnswer: { '@type': 'Answer', text: 'To increase your chances of being cited by ChatGPT: write clear, structured content that directly answers questions, use FAQ schema markup, get mentioned on authoritative third-party sites (Yelp, G2, industry directories), ensure fast page load times, and build consistent brand mentions across the web.' }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between SEO and LLM SEO?',
      acceptedAnswer: { '@type': 'Answer', text: 'Traditional SEO focuses on ranking in Google\'s blue link results. LLM SEO (also called GEO) focuses on being cited in AI-generated answers from systems like ChatGPT, Perplexity, and Google AI Overviews. Both share the same foundation — quality content, authority, and clear structure — but LLM SEO emphasizes conversational formatting, answer-first writing, and multi-platform brand presence.' }
    },
  ]
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.back}>← ALL POSTS</Link>
          <div className={styles.meta}>
            <span className={styles.tag}>AI SEARCH · GEO</span>
            <span className={styles.readTime}>11 MIN READ</span>
          </div>
          <h1 className={styles.h1}>
            LLM SEO<br />&amp; <span className={styles.red}>GEO</span>:<br />GET CITED<br />BY AI.
          </h1>
          <p className={styles.intro}>
            ChatGPT processes 3 billion prompts a month. Perplexity indexes 200 billion URLs.
            Google AI Overviews appear on over 50% of search result pages. When someone asks
            these systems about your industry, your business either gets mentioned — or it
            doesn&apos;t. Here is exactly how to make sure it does.
          </p>
        </div>

        <div className={styles.body}>

          <h2>First: is this actually real?</h2>
          <p>Yes — and it is moving fast. AI-referred website sessions jumped <strong>527% in 2025</strong> alone. ChatGPT now processes over 3 billion prompts monthly. Perplexity has indexed over 200 billion URLs. Google AI Overviews now appear on more than half of all search results pages.</p>
          <p>When someone searches &quot;best freight broker in South Carolina&quot; or &quot;women&apos;s boutique Greenville SC&quot; in ChatGPT or Perplexity, those systems pull answers from websites — and cite the ones they trust. Your site is either in the answer or it isn&apos;t.</p>
          <p>This is why the SEO work you do today matters more than ever. Not just to rank on Google — but to get cited by every AI system that&apos;s rapidly replacing Google for millions of queries.</p>

          <h2>What is GEO — and how is it different from SEO?</h2>
          <p><strong>GEO (Generative Engine Optimization)</strong> is the practice of optimising your content so that AI systems can understand, retrieve, and cite it in their generated answers. LLM SEO is the same concept with a slightly different name.</p>
          <p>Traditional SEO: you optimise to appear in Google&apos;s blue link results.<br />GEO: you optimise to be <em>cited inside the AI answer itself</em> — before anyone even clicks a link.</p>
          <p>The critical point: <strong>GEO does not replace SEO. It extends it.</strong> Every technical SEO fix, every well-written page, every piece of schema markup — that work also builds your AI visibility. The foundations are the same. The execution gets more specific.</p>

          <h2>How LLMs actually decide what to cite</h2>
          <p>Different AI systems use different signals. Here is what the research shows:</p>

          <h3>ChatGPT favours structured, authoritative sources</h3>
          <p>Nearly 48% of ChatGPT&apos;s citations come from Wikipedia — which tells you everything about what it trusts: clearly structured content with defined entities, consistent formatting, and verifiable facts. For your website, this means writing like an authority, not like a salesperson.</p>

          <h3>Perplexity favours conversational, community-based content</h3>
          <p>Perplexity pulls heavily from Reddit and community forums (46.7% of citations). It rewards content that sounds like a real person answering a real question with practical experience. Write in a direct, conversational voice. Use first-person examples. Answer the actual question in the first paragraph.</p>

          <h3>Google AI Overviews blend both</h3>
          <p>Google&apos;s AI Overviews pull from a mix of authoritative pages and lived-experience content. Reddit accounts for 21% of citations. Well-structured blog posts and FAQ pages rank highly. Pages with <strong>FAQPage schema</strong> are <strong>3.2x more likely</strong> to appear in AI Overviews.</p>

          <h2>The 7 signals that get you cited by AI</h2>

          <h3>1. Answer-first content structure</h3>
          <p>44% of all LLM citations come from the first 30% of a page — the introduction. Lead with the answer, then expand. Do not bury your main point. Every blog post, service page, and FAQ entry should open with a direct, concise answer to the question it&apos;s addressing.</p>

          <h3>2. Structured content formatting</h3>
          <p>Use descriptive H2 and H3 headings. Use numbered lists and bullet points for steps and comparisons. Keep paragraphs to 40–60 words. Dense walls of text perform worst for AI citation. Structured content (headings, lists, FAQ format) is the single most effective format for AI search.</p>

          <h3>3. Schema markup (JSON-LD)</h3>
          <p>FAQPage schema is particularly powerful — pages with it are 3.2x more likely to appear in Google AI Overviews. Article schema tells AI exactly what type of content it&apos;s reading, who wrote it, and when. Organization schema establishes your brand entity. All of this makes it dramatically easier for AI to extract and cite your content accurately.</p>
          <p>Important nuance: research shows ChatGPT and Perplexity read schema markup the same way they read any page text. The value isn&apos;t magic — it&apos;s that schema forces you to clearly label your content, which helps AI parse it correctly regardless of how it processes the markup.</p>

          <h3>4. Third-party brand presence</h3>
          <p>Domains with profiles on Trustpilot, G2, Yelp, and Capterra have a <strong>3x higher chance</strong> of being cited by ChatGPT than those without. Brand search volume is the strongest single predictor of LLM citations — stronger than backlinks. Get listed everywhere that matters for your industry.</p>

          <h3>5. Statistics and citations in your content</h3>
          <p>Adding data-backed statistics to your content increases AI visibility by 22%. Using quotations from experts or customers boosts it by 37%. AI systems are trained to cite sources that cite sources. Reference studies, include specific numbers, and quote real people.</p>

          <h3>6. Fast page load speed</h3>
          <p>Pages with a First Contentful Paint under 0.4 seconds average 6.7 AI citations. Slow pages (over 1.13 seconds) average just 2.1. Speed is not just a UX factor — it is now directly linked to whether AI systems bother to crawl and cite your content at all.</p>

          <h3>7. Content freshness</h3>
          <p>85% of AI Overview citations were published in the last two years. 50% of Perplexity citations are from 2025 alone. AI systems heavily favour recent content. Add &quot;Last updated&quot; dates to your pages, refresh key articles regularly, and keep your blog active. A post from 2019 is practically invisible to AI search.</p>

          <h2>What this means for your website right now</h2>
          <p>The good news: if you fix your SEO, you fix your AI visibility at the same time. The bad news: if your site has no meta descriptions, no schema, no structured content, and no third-party presence — you are invisible to both Google and every AI system simultaneously.</p>

          <p>Here is the order of priority:</p>
          <ul>
            <li>Fix the technical foundation first (title tags, meta descriptions, schema, speed)</li>
            <li>Rewrite content to be answer-first with clear headings and short paragraphs</li>
            <li>Add FAQPage schema to every service page and blog post</li>
            <li>Get listed on industry directories, review platforms, and local citations</li>
            <li>Publish fresh, statistics-backed content regularly</li>
            <li>Allow AI crawlers in your robots.txt (GPTBot, ClaudeBot, PerplexityBot)</li>
          </ul>

          <h2>Allow AI crawlers in your robots.txt</h2>
          <p>This is one most businesses miss entirely. If your <code>robots.txt</code> file blocks AI crawlers, you cannot be cited — period. Make sure these are explicitly allowed:</p>
          <p><code>User-agent: GPTBot</code> <code>Allow: /</code><br />
          <code>User-agent: ClaudeBot</code> <code>Allow: /</code><br />
          <code>User-agent: PerplexityBot</code> <code>Allow: /</code><br />
          <code>User-agent: Google-Extended</code> <code>Allow: /</code></p>
          <p>Our <code>robots.txt</code> at defacedworld.com explicitly allows all of these.</p>

          <div className={styles.faq}>
            <h2>Frequently asked questions</h2>
            <div className={styles.faqItem}>
              <h3>What is GEO (Generative Engine Optimization)?</h3>
              <p>GEO is the practice of structuring website content so AI systems like ChatGPT, Perplexity, and Google AI Overviews can understand, retrieve, and cite it. It extends traditional SEO rather than replacing it.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Does SEO help with ChatGPT and AI search?</h3>
              <p>Yes. Good SEO is the foundation of good AI visibility. Structured content, schema, fast page speed, authoritative writing, and clear entity signals all help LLMs cite your content.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How do I get my business mentioned in ChatGPT answers?</h3>
              <p>Write structured, answer-first content. Use FAQPage schema. Get listed on Yelp, G2, and industry directories. Ensure fast page load times. Build brand mentions across the web consistently.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What is the difference between SEO and LLM SEO?</h3>
              <p>Traditional SEO targets Google blue link rankings. LLM SEO (GEO) targets citations inside AI-generated answers from ChatGPT, Perplexity, and AI Overviews. Both share the same foundation — quality content, authority, and clear structure.</p>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <div className={styles.ctaTitle}>IS YOUR SITE AI-READY?</div>
            <p>Our audit checks for the exact signals that get you cited by ChatGPT, Perplexity, and Google AI Overviews — alongside your traditional SEO health.</p>
            <Link href="/" className={styles.ctaBtn}>RUN FREE AUDIT →</Link>
          </div>

        </div>
      </article>
    </>
  )
}
