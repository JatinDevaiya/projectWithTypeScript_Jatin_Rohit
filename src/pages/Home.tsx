import Coin from "../redux/Coin";
import Counter from "../redux/Counter";
import UsersPage from "./Userspage";

const Home = () => {
  return (
    <>
      <div>
        <div style={{ textAlign: "center" }}>
          <Coin />
          <Counter />
        </div>
        <hr/>
        <div>
          <UsersPage />
        </div>
      </div>
    </>
  );
};

export default Home;
    