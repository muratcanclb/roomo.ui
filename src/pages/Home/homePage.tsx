import { useNavigate } from "react-router-dom";
const homePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Ana Sayfa</h1>
      </div>
      <div>
        <button onClick={() => navigate('room-page')}>ODA SAYFASI</button>
      </div>
    </>
  );
};

export default homePage;
