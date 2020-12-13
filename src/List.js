import React from "react";

const List = ({ people, setPeople }) => {
  const remove = (id) => {
    const newPeople = people.filter((people) => people.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((people) => {
        const { id, name, age, image } = people;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
              <button onClick={() => remove(id)}>Remove it</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
