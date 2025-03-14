"use client";

export default function Dado({ valor }) {
  const imagens = {
    1: "/dado 1.jpg",
    2: "/dado 2.jpg",
    3: "/dado 3.jpg",
    4: "/dado 4.jpg",
    5: "/dado 5.jpg",
    6: "/dado 6.jpg",
  };

  return (
    <div>
      <img
        src={imagens[valor] || imagens[1]} 
        alt={`Dado com valor ${valor}`}
        width={100}
        height={100}
      />
    </div>
    
  );
}

