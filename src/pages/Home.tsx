import Container from '../components/container/Container';
import Statistics from '../components/statistics/Statistics';
import Table from '../components/table/Table';
import Layout from '../layouts/Layout';

const Home = () => {
  return (
    <Layout>
      <Container>
        <Statistics />
        <Table />
      </Container>
    </Layout>
  );
};

export default Home;
