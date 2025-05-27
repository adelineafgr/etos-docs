import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Kenali Produk Kami',
    img: '/img/about-us.jpg',
    description: (
      <>
        Sistem ETOS memiliki beberapa aplikasi terintegrasi yang dirancang untuk mendukung operasional proyek lapangan hingga manajemen kantor. Setiap aplikasi memiliki dokumentasi lengkap untuk memudahkan pengguna.
      </>
    ),
  },
  {
    title: 'Akses Cepat ke Modul',
    img: '/img/akses-cepat.jpg',
    description: (
      <>
        Mulai dari ETL Mobile untuk operator lapangan hingga ERP-V2 untuk pengelolaan data proyek secara menyeluruh—akses semua panduan di sini.
      </>
    ),
  },
  {
    title: 'Bekerja Lebih Mudah Bersama Tim',
    img: '/img/kerjasama.jpg',
    description: (
      <>
        Dokumentasi ini dibuat untuk mendukung pemahaman tim IT, engineering, hingga manajemen dalam menjalankan sistem dengan lancar dan efisien
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
     <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureImg} alt={title} />
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
