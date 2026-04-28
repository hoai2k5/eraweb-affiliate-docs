import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ backgroundColor: '#1e293b', padding: '100px 0' }}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ color: '#fff', fontSize: '3rem' }}>
          Tài Liệu Vận Hành Affiliate
        </Heading>
        <p className="hero__subtitle" style={{ color: '#cbd5e1', marginBottom: '40px' }}>
          Hướng dẫn toàn diện dành cho Quản trị viên và Cộng tác viên hệ thống Eraweb
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tong-quan"
            style={{ borderRadius: '30px', padding: '15px 30px', fontWeight: 'bold' }}>
            Xem Tài Liệu Ngay 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Trang chủ | ${siteConfig.title}`}
      description="Tài liệu hướng dẫn sử dụng Affiliate">
      <HomepageHeader />
      <main style={{ padding: '50px 0', textAlign: 'center', color: '#64748b' }}>
        <h2>Chào mừng đến với Trung tâm tài liệu Eraweb</h2>
        <p>Vui lòng bấm nút phía trên hoặc chọn menu "Tài Liệu Hướng Dẫn" để bắt đầu.</p>
      </main>
    </Layout>
  );
}