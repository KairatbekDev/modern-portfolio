import React, { useState } from 'react';

// 1. Описываем тип данных для нашего товара
interface IItem {
  id: number;
  name: string;
  price: number;
  emoji: string;
}

export default function App() {
  // 2. СОСТОЯНИЕ (State): Баланс игрока
  const [balance, setBalance] = useState<number>(500);

  // 3. ДАННЫЕ: Список доступных семян
  const shopItems: IItem[] = [
    { id: 1, name: "Семена Арбуза", price: 80, emoji: "🍉" },
    { id: 2, name: "Семена Томата", price: 40, emoji: "🍅" },
    { id: 3, name: "Золотой корень", price: 250, emoji: "🥕" },
  ];

  // 4. ЛОГИКА: Функция покупки
  const handleBuy = (item: IItem) => {
    if (balance >= item.price) {
      setBalance(balance - item.price);
      alert(`Вы купили ${item.name}!`);
    } else {
      alert("Не хватает золотишка! 🪙");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f4f0",
        minHeight: "100vh",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#2e7d32" }}>Фермерский Рынок 🚜</h1>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          Ваш кошелек: <span style={{ color: "#fbc02d" }}>{balance} 💰</span>
        </div>
      </header>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {shopItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "2px solid #2e7d32",
              borderRadius: "15px",
              padding: "20px",
              width: "180px",
              textAlign: "center",
              backgroundColor: "white",
            }}
          >
            <div style={{ fontSize: "50px" }}>{item.emoji}</div>
            <h3>{item.name}</h3>
            <p>Цена: {item.price} золотых</p>
            <button
              onClick={() => handleBuy(item)}
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}