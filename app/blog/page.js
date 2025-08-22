// app/blog/page.js
import Navbar from '../../components/Navbar';
import styles from '../../styles/Blog.module.css';
import '../../styles/globals.css';

// In a real app, this data would come from a CMS or database
const posts = [
  { slug: '5-signs-you-need-a-website-redesign', title: '5 Signs Your Business Needs a Website Redesign', excerpt: 'Is your website holding you back? Here are 5 key indicators that it\'s time for an upgrade.', date: 'August 22, 2025' },
  { slug: 'top-10-seo-tips-for-small-business', title: 'Our Top 10 SEO Tips for Small Businesses', excerpt: 'Boost your visibility and attract more customers with these foundational SEO strategies.', date: 'August 15, 2025' }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className={styles.blogPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Insights & Articles</h1>
          <p className={styles.subtitle}>Our thoughts on technology, design, and growing your business.</p>
          <div className={styles.postList}>
            {posts.map(post => (
              <a key={post.slug} href={`/blog/${post.slug}`} className={styles.postCard}>
                <span className={styles.postDate}>{post.date}</span>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>Read More →</span>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}