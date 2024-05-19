import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided. - Done
  // TODO: Create at least one additional component that is used by this component. - Done
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked. - Done
  // Function to handle post deletion
  const handleDelete = (index) => {
    deleteRecipe(index); 
  };
  
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>          
          {recipes.map((recipe, index) => (
          <tr key={index}>
          <Recipe recipe={recipe} onDelete={() => handleDelete(index)} />
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Recipe({ recipe, onDelete }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  return (
    <>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo} alt="Posted Image" width="20" height="15" /></td>
      <td>{ingredients}</td>
      <td>{preparation}</td>
      <td><button onClick={onDelete} name="delete">delete</button></td>
     </>
  );
}

export default RecipeList;
