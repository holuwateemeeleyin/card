import "./styles.css";
import NFT from "./Assets/nft.svg";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={NFT} alt={NFT} />
        <div className="card-details">
          <div className="card-title">
            <p>Nyonk Pinter</p>
            <p className="nft-price">2.02 ETH</p>
          </div>
          <div className="nft-desc">
            <p>@Maqirat</p>
            <p>12m 31sec left</p>
          </div>
          <div className="button">Place a bid</div>
        </div>
      </div>
    </div>
  );
}
