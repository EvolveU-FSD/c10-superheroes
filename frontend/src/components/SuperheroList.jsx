import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SuperheroList() {
  const [superheroList, setSuperheroList] = useState([]);
  useEffect(() => {
    async function getSuperheroes() {
      const response = await fetch("/api/superhero");
      const superheroData = await response.json();
      setSuperheroList(superheroData);
    }
    getSuperheroes();
  }, []);

  return (
    <section>
      <ul>
        {superheroList.map((superhero) => {
          return (
            <li key={superhero.name}>
              <Link
                style={{
                  color: "darkred",
                  fontWeight: "900",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                to={`/detail/${superhero._id}`}
              >
                {superhero.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
