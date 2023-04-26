import initialData from "./superheroes.json" assert { type: "json" };
import { createSuperhero } from "./superhero.js";
import { createUser } from "./user.js";
const loadInitalData = async () => {
  for (let i = 0; i < initialData.length; i++) {
    const superhero = initialData[i];
    try {
      console.log(`creating superhero ${superhero.name}`);
      const newSuperhero = await createSuperhero(superhero);
      console.log("newSuperhero", newSuperhero);
      console.log(
        `created superhero ${newSuperhero.name} with id ${newSuperhero._id}`
      );
    } catch (err) {
      console.log(`error creating superhero ${superhero.name}`);
      console.log(err.message);
    }
  }
  const user = await createUser({
    username: "admin",
    password: "admin",
  });
  console.log("created user", user);
  console.log("finished loading initial data");
};
loadInitalData();
