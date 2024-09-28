"use client";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((item) => (
            <li key={item.recipe.uri}>
              <h3>{item.recipe.label}</h3>
              <img
                src={item.recipe.image}
                alt={item.recipe.label}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <div>
                <h4>Malzemeler:</h4>
                <ul>
                  {item.recipe.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))
        ) : (
          <li>Henüz tarif bulunamadı.</li>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
