import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../post.module.css'

export const metadata: Metadata = {
  title: 'How to Rank on ChatGPT: Get Your Business Cited by AI Search',
  description: "400 million people use ChatGPT weekly. Here's the exact step-by-step guide to getting your business cited by ChatGPT, Perplexity, and Google AI Overviews.",
  alternates: { canonical: 'https://defacedworld.com/blog/how-to-rank-on-chatgpt' },
  openGraph: {
    title: 'How to Rank on ChatGPT: Get Your Business Cited by AI Search',
    description: "The step-by-step guide to getting your business cited by ChatGPT, Perplexity, and Google AI Overviews.",
    url: 'https://defacedworld.com/blog/how-to-rank-on-chatgpt',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Rank on ChatGPT: Get Your Business Cited by AI Search',
  description: "ChatGPT, Perplexity, and Google AI Overviews are how millions find businesses now. Here's the exact step-by-step guide.",
  author: { '@type': 'Person', name: 'Spencer Wilkinson', url: 'https://defacedworld.com/about' },
  publisher: { '@type': 'Organization', name: 'DEFACEDWORLD', url: 'https://defacedworld.com' },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  mainEntityOfPage: 'https://defacedworld.com/blog/how-to-rank-on-chatgpt',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can you actually rank on ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: "Not in the traditional sense — ChatGPT doesn't have a ranking algorithm like Google. But you can get your business cited in ChatGPT responses by optimising for the signals these AI systems use: authoritative content, structured data, third-party citations, and clear entity signals across the web." } },
    { '@type': 'Question', name: 'How does ChatGPT decide which businesses to recommend?', acceptedAnswer: { '@type': 'Answer', text: "ChatGPT pulls from its training data and, for real-time queries, from web search. Businesses that appear frequently in authoritative sources — with consistent information — are more likely to be cited." } },
    { '@type': 'Question', name: 'Is GEO different from SEO?', acceptedAnswer: { '@type': 'Answer', text: "GEO (Generative Engine Optimization) is the practice of optimising for AI search systems rather than traditional search engines. Most GEO fixes overlap with SEO but GEO adds specific signals like FAQ schema, answer-first formatting, and AI crawler permissions." } },
    { '@type': 'Question', name: 'How long does it take to get cited by ChatGPT?', acceptedAnswer: { '@type': 'Answer', text: "For real-time queries, you can appear within days of publishing well-optimised content. For queries answered from training data, third-party mentions and citations build over months." } },
    { '@type': 'Question', name: 'Does being on ChatGPT drive actual business leads?', acceptedAnswer: { '@type': 'Answer', text: "Yes. AI-referred website traffic grew 527% in 2025. Users who find businesses through AI search tend to be highly qualified — they've already had their question answered and are in decision mode." } },
  ],
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href="/blog" className={styles.back}>← ALL POSTS</Link>
          <div className={styles.meta}><span className={styles.tag}>AI SEARCH · GEO</span><span className={styles.readTime}>11 MIN READ</span></div>
          <h1 className={styles.h1}>HOW TO RANK<br /><span className={styles.red}>ON CHATGPT</span></h1>
          <p className={styles.intro}>400 million people use ChatGPT weekly. Perplexity handles 100 million queries a month. Google AI Overviews appear above the regular search results. These systems are how a growing share of your potential customers find businesses — and almost no one is optimising for them yet.</p>
        </div>
        <div className={styles.body}>
          <h2>What ranking on ChatGPT actually means</h2>
          <p>You cannot rank on ChatGPT the way you rank on Google — there is no keyword position, no page one. But you can get cited. When someone asks ChatGPT "what is the best SEO agency in Greenville SC?" — that system pulls from the web to construct an answer. The businesses that appear have done the work to make themselves visible. This field is called GEO: Generative Engine Optimization. It is newer than SEO, less understood, and therefore less competitive.</p>

          <h2>How AI systems decide what to cite</h2>
          <p>ChatGPT, Perplexity, and Google AI Overviews all work differently under the hood, but they share the same core question: which sources can I trust? They weight sources based on authority signals (how many credible sites mention your business), content clarity (does your site directly answer the questions people ask), structured data (have you told these systems what your business does), consistency (does your information appear the same way across every platform), and crawlability (have you explicitly allowed AI systems to access your site).</p>

          <h2>Step 1: Allow AI crawlers in your robots.txt</h2>
          <p>Check your robots.txt — are you accidentally blocking AI systems? Many websites block all non-Google crawlers by default. Your robots.txt should explicitly allow GPTBot (ChatGPT), PerplexityBot (Perplexity), ClaudeBot (Claude), Google-Extended (Google AI training), and OAI-SearchBot (ChatGPT search). If these bots cannot crawl your site, you cannot be cited. This is the fastest GEO fix available and fewer than 5% of websites have done it.</p>

          <h2>Step 2: Add an llms.txt file</h2>
          <p>llms.txt is an emerging standard — similar to robots.txt but designed specifically for AI systems. It is a plain text file at the root of your domain that tells AI crawlers exactly what your business is, what you do, who you serve, and where your key content lives. Think of it as a briefing document for AI systems — everything they need to accurately represent your business when someone asks about it.</p>

          <h2>Step 3: Write answer-first content</h2>
          <p>AI systems favour content that directly answers questions. They pull from pages that state the answer in the first sentence, then provide supporting context — not pages that build up through five paragraphs of preamble. The rewrite is simple: take any content that buries the answer and restructure it. "What is an SEO audit?" should start with "An SEO audit is a complete analysis of why your website is not ranking on Google" — not with a history of search engines.</p>

          <h2>Step 4: Add FAQ schema to every page</h2>
          <p>FAQ schema is the single most impactful GEO optimisation for most business websites. It marks up your Q&A content in a format AI systems can parse and cite directly. Every service page, blog post, and your homepage should have at least 3–5 FAQs with complete, helpful answers. The questions should match what real people search — not "What is your refund policy?" but "How much does a plumber cost in [city]?"</p>

          <h2>Step 5: Build your entity across the web</h2>
          <p>AI systems build a picture of your business from every mention across the web. The more consistent and authoritative those mentions, the more confident the system is in recommending you. The most impactful places: Google Business Profile (complete every field), industry directories (Yelp, Angi, Avvo, Healthgrades — wherever your category has a listing), local directories (Chamber of Commerce, city business listings), review platforms, and PR mentions. Consistency matters — your name, address, and phone should be identical across every listing.</p>

          <h2>Step 6: Write comprehensive content</h2>
          <p>AI systems favour sources that cover a topic comprehensively. A 1,500-word guide to a specific topic outperforms a 200-word overview every time. For each core topic related to your business, aim to be the most complete resource available. Answer every related question. Cover the subtopics. Explain the concepts someone new to your industry needs to make a good decision.</p>

          <h2>Step 7: Get cited by other websites</h2>
          <p>Backlinks remain the backbone of authority for both traditional SEO and AI search. The fastest ways for a small business to build citations: guest posts on industry blogs, HARO (answer journalist queries and get cited in articles), partnerships with complementary businesses, sponsoring local events (always comes with a link), and being interviewed on podcasts.</p>

          <h2>Step 8: Track your AI visibility</h2>
          <p>There is no official tool that shows when AI systems cite your business — but you can track it manually. Ask ChatGPT, Perplexity, and Claude directly: "Who are the best [your service] in [your city]?" Monitor your referral traffic for sources like perplexity.ai and chatgpt.com. Watch Google Search Console for AI Overview appearances. Do this monthly. Note which competitors are appearing and what content they have that you do not.</p>

          <h2>The window is open — for now</h2>
          <p>Most businesses are still focused entirely on Google. AI search is growing at 527% year-over-year, and the field is wide open. The businesses that optimise now will own their categories in AI search by the time their competitors figure out this game exists.</p>
          <p>To see exactly where your site stands on AI visibility right now, run the free audit at <Link href="/">defacedworld.com</Link>. It scores your GEO alongside your SEO and shows your top priority fixes in under 60 seconds.</p>

          <h2>Frequently asked questions</h2>
          <div className={styles.faq}>
            <div className={styles.faqItem}><h3>Can you actually rank on ChatGPT?</h3><p>Not in the traditional sense — ChatGPT does not have a ranking algorithm like Google. But you can get your business cited in ChatGPT responses by optimising for the signals these AI systems use: authoritative content, structured data, third-party citations, and clear entity signals across the web.</p></div>
            <div className={styles.faqItem}><h3>How does ChatGPT decide which businesses to recommend?</h3><p>ChatGPT pulls from its training data and, for real-time queries, from web search. Businesses that appear frequently in authoritative sources — with consistent information — are more likely to be cited.</p></div>
            <div className={styles.faqItem}><h3>Is GEO different from SEO?</h3><p>GEO (Generative Engine Optimization) is the practice of optimising for AI search systems. Most GEO fixes overlap with SEO but GEO adds specific signals like FAQ schema, answer-first formatting, and AI crawler permissions.</p></div>
            <div className={styles.faqItem}><h3>How long does it take to get cited by ChatGPT?</h3><p>For real-time queries, you can appear within days of publishing well-optimised content. For queries from training data, third-party mentions and citations build over months.</p></div>
            <div className={styles.faqItem}><h3>Does being on ChatGPT drive actual business leads?</h3><p>Yes. AI-referred website traffic grew 527% in 2025. Users who find businesses through AI search tend to be highly qualified — they have already had their question answered and are in decision mode.</p></div>
          </div>
        </div>
      </article>
    </>
  )
}
