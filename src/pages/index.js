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
        <Link className="button button--secondary button--lg" to="/etl-mobile/overview">
          ETL Mobile 📱
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Link className="button button--secondary button--lg" to="/etl-standby/overview">
          ETL Standby 🕒
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Link className="button button--secondary button--lg" to="/etos-stars/overview">
          ETOS STARS 🌟
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Link className="button button--secondary button--lg" to="/erp-v1/overview">
          ERP-V1 📊
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <Link className="button button--secondary button--lg" to="/erp-v2/overview">
          ERP-V2 📈
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
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
