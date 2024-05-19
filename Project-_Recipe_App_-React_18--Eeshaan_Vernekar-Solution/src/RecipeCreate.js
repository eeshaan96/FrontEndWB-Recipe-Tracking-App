import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData); // Log formData
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared. - Done
  // TODO: Add the required input and textarea form elements. - Done
  // TODO: Add the required submit and change handlers. - Done
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={formData.name}
            />
            </td>
            <td>
            <input
              id="cuisine"
              type="text"
              name="cuisine"
              placeholder="Cuisine"
              onChange={handleChange}
              value={formData.cuisine}
            />
            </td>
            <td>
            <input
              id="url"
              type="url"
              name="photo"
              placeholder="Photo URL"
              onChange={handleChange}
              value={formData.photo}
            />
            </td>
            <td>
            <textarea
              id="Ingredients"
              type="text"
              name="ingredients"
              placeholder="Ingredients"
              onChange={handleChange}
              value={formData.ingredients}
            />
            </td>
            <td>
             <textarea
              id="Preparations"
              type="text"
              name="preparation"
              placeholder="Preparations"
              onChange={handleChange}
              value={formData.preparation}
            />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;


