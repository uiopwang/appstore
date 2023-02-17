import { Layout } from 'antd';
import style from './style.less';

const { Content } = Layout;

export default ({ children }:any) => (
  <Layout className={style.layout}>
    <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {children}
    </Content>
  </Layout>
);
