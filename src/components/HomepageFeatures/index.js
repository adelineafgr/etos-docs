import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kenali Produk Kami',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Sistem ETOS memiliki beberapa aplikasi terintegrasi yang dirancang untuk mendukung operasional proyek lapangan hingga manajemen kantor. Setiap aplikasi memiliki dokumentasi lengkap untuk memudahkan pengguna.
      </>
    ),
  },
  {
    title: 'Akses Cepat ke Modul',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mulai dari ETL Mobile untuk operator lapangan hingga ERP-V2 untuk pengelolaan data proyek secara menyeluruh—akses semua panduan di sini.
      </>
    ),
  },
  {
    title: 'Bekerja Lebih Mudah Bersama Tim',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dokumentasi ini dibuat untuk mendukung pemahaman tim IT, engineering, hingga manajemen dalam menjalankan sistem dengan lancar dan efisien
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
