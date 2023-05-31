import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "mango", color: "blue" },
    {
      id: 2,
      name: "tangerine",
      color: "orange",
    },
    { id: 3, name: "sanguine", color: "blood-red" },
    { id: 4, name: "pinnaple", color: "purple" },
    {
      id: 5,
      name: "tomato",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((dict) => (
        <Card key={dict.id} name={dict.name} />
      ))}
    </div>
  );
}
