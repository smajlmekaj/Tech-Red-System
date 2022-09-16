import { Container } from '@mui/material';
import Home from '../components/home';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <Navbar />
        <Home />
      </div>
    </Container>
  );
}
