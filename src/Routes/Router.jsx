import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Menu } from '../shared/Menu/Menu';
import { Discography } from '../Discography/Discography';
import { Footer } from '../shared/Footer/Footer';
import { Concerts } from '../Concerts/Concerts';
import { History } from '../History/History';

export function Router() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discography" element={<Discography />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/bio" element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}
