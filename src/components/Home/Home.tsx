import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.main}>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <button>View Now</button>
    </div>
  );
};

export default Home;
