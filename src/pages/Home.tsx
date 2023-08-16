import Coin from "../redux/Coin";
import Counter from "../redux/Counter";
import UsersPage from "./Userspage";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Coin />
      <Counter />
      <UsersPage />
    </>
  );
};

export default Home;
