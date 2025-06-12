import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
      <div className={styles.buttonWrapper}>
        <Link className="button button--secondary button--lg" to="/pm/timeline">
          Project Management
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Link className="button button--secondary button--lg" to="/tech/overview">
          IT Technical Guides
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Link className="button button--secondary button--lg" to="/user/overview">
          Panduan Pengguna
        </Link>
      </div>
    </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ETOS Documentation User Guide">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
