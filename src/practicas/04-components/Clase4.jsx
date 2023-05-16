import Card from './Components/Card';
import './styles.css';

export default function Clase4() {
  return (
    <section>
      <Card>
        <p>Primera card children</p>
      </Card>
      <Card title={'card title'}>
        <p>Segunda card children</p>
      </Card>
      <Card footer={'card footer'}>
        <p>Tercera card children</p>
      </Card>
      <Card title={'title and footer'} footer={'title and footer'}>
        <p>Cuarta card children</p>
      </Card>
    </section>
  );
}
