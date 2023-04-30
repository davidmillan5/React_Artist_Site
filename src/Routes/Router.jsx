import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Menu } from '../shared/Menu/Menu';
import { Discography } from '../Discography/Discography';
import { Footer } from '../shared/Footer/Footer';
import { Concerts } from '../Concerts/Concerts';
import { History } from '../History/History';
import { Shop } from '../Shop/Shop';
import { Featuring } from '../Featuring/Featuring';
import { Fanzone } from '../Fanzone/Fanzone';
import { Registration } from '../Registration/Registration';
import { DiscographyBar } from '../DiscographyBar/DiscographyBar';

export function Router() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discography" element={<DiscographyBar />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/bio" element={<History />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/featuring" element={<Featuring />}></Route>
        <Route path="/fanzone" element={<Fanzone />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
      <Footer />
    </>
  );
}
