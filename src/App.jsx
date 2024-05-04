import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { data } from "./data.js";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div>
        <h1>Lista</h1>
        <form action="">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Busca un nombre..."
          />
        </form>
        <table>
          <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Telefono</th>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                const fullName =
                  `${item.first_name} ${item.last_name} ${item.email} ${item.phone}`.toLowerCase();
                const searchLowerCase = search.toLowerCase();
                return (
                  searchLowerCase === "" || fullName.includes(searchLowerCase)
                );
              })
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })}
          </tbody>
          <tbody></tbody>
        </table>
      </div>
    </>
  );
}

export default App;
