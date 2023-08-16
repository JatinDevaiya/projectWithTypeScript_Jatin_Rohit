import {useSelector} from 'react-redux';
const Coin = () => {
  const {coin} = useSelector((state:any)=>state.counter);
  return (
    <div style={{paddingTop: '200px'}}>
      <b><big className="value">Coins: {coin}</big></b>
    </div>
  );
};

export default Coin;