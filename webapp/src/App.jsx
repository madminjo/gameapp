import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) return; // если открыто не в Telegram, просто ничего не делаем

    tg.expand(); // разворачиваем WebApp на максимум

    const userData = tg.initDataUnsafe?.user;
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        fontFamily: "system-ui, sans-serif",
        background: "#020617",
        color: "#e5e7eb",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "700" }}>🎮 GameApp</h1>

      {user ? (
        <p>
          Привет,&nbsp;
          <b>
            {user.first_name} {user.last_name || ""}
          </b>{" "}
          (@{user.username})
        </p>
      ) : (
        <p>Открой меня через Telegram, чтобы я показал твой профиль 😉</p>
      )}

      <div
        style={{
          marginTop: "16px",
          padding: "16px",
          borderRadius: "16px",
          background: "#0f172a",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "8px" }}>
          Что можно сделать дальше?
        </h2>
        <ul style={{ paddingLeft: "18px", lineHeight: "1.7" }}>
          <li>Сделать меню игр / уровней</li>
          <li>Добавить прогресс игрока</li>
          <li>Отправлять данные боту (результаты, выбор и т.д.)</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
