"use client";
import { useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/appointments", {
  method: "POST",
  body: JSON.stringify({ name, contact, date, time }),
  });

  const data = await res.json();

  if (!res.ok) {
  alert(data.error);
  return;
  }

setSuccess(true);
};

    if (success) {
    return (
      <main>
        <h1>Randevu Alındı</h1>
      </main>
    );
  }
    return (
    <main>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={contact} onChange={(e) => setContact(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">Saat seç</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
         </select>

        <button type="submit">Randevu Al</button>
      </form>
    </main>
  );
}
