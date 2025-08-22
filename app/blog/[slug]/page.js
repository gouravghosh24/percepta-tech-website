import Navbar from '../../../components/Navbar';
import styles from '../../../styles/Blog.post.module.css';
import '../../../styles/globals.css';

// In a real app, you would fetch post content based on the `slug` param
export default function BlogPost({ params }) {
  return (
    <>
      <Navbar />
      <main className={styles.blogPost}>
        <div className={styles.container}>
          <h1 className={styles.postTitle}>Post Title for: {params.slug}</h1>
          <p className={styles.postDate}>August 22, 2025</p>
          <div className={styles.postContent}>
            <p>This is where the full content of your blog post would go. In a real application, you would fetch this content from a Headless CMS like Sanity, Strapi, or Contentful based on the "slug" from the URL.</p>
            <p>The slug for this page is: <strong>{params.slug}</strong></p>
            <p>You can write your content here using standard HTML tags, or ideally, render it from Markdown for easy writing.</p>
          </div>
        </div>
      </main>
    </>
  );
}