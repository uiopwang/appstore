import { useModel } from 'umi';
import styles from './index.less';

export default function IndexPage(props: any) {
  const masterProps = useModel('@@qiankunStateFromMaster');
  const { masterState } = masterProps;
  const { token, user, config } = masterState;
  const { testProp2 } = masterProps;

  return (
    <div>
      <h1 className={styles.title}>乾坤子应用</h1>
      <h2 className={styles.title}>Token</h2>
      <h3 className={styles.title}>{JSON.stringify(token)}</h3>
      <h2 className={styles.title}>User</h2>
      <h3 className={styles.title}>{JSON.stringify(user)}</h3>
      <h2 className={styles.title}>Config</h2>
      <h3 className={styles.title}>{JSON.stringify(config)}</h3>
      <h2 className={styles.title}>Props</h2>
      <h3 className={styles.title}>{testProp2}</h3>
    </div>
  );
}