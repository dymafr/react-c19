import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
export default App;
