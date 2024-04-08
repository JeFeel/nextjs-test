import { useState } from "react";

export default function Lottery() {
  const [token, setToken] = useState("00000"); // 랜덤값 토큰
  const [draw, setDraw] = useState(false);
  const [refresh, setRefresh] = useState(true); // 초기화 상태

  let randomInt = Math.floor(Math.random() * 100000);
  // 뽑기 기능
  const getToken = () => {
    setToken(String(randomInt));
    setDraw(true);
    setRefresh(false);
  };

  // 뽑기 후 초기화 기능
  const resetToken = () => {
    setToken("00000");
    setDraw(false);
    setRefresh(true);
  };

  return (
    <>
      {token}
      <button onClick={getToken} disabled={draw}>
        Draw!
      </button>
      <button onClick={resetToken} disabled={refresh}>
        Refresh
      </button>
    </>
  );
}
