import { Menu } from '../shared/Menu/Menu';
import './Home.css';
import { History } from '../History/History';
import { Discography } from '../Discography/Discography';
export function Home() {
  return (
    <>
      <Menu></Menu>
      <section className="banner"></section>
      <section>
        <History></History>
      </section>
      <section>
        <Discography></Discography>
      </section>
    </>
  );
}
