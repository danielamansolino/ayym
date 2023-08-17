// import React, { useState } from 'react';
// import './SpendingCategories.css'


// const categories = [
//   "Bills & Utilities",
//   "Savings",
//   "Charity",
//   "Personal",
//   "Transport",
//   "Housing",
//   "Insurance",
//   "Lifestyle",
//   "Food",
//   "Other",
//   "Health",
//   "Future Purchase"
// ];

// const ExpenseCategories = () => {
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const handleCategoryToggle = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter(cat => cat !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const isCategorySelected = (category) => {
//     return selectedCategories.includes(category) ? 'selected' : '';
//   };

//   return (
//     <div className="expense-categories">
//       <h2>Select your expenses</h2>
//       <p>Pick at least two categories.</p>
//       <div className="category-list">
//         {categories.map(category => (
//           <div
//             key={category}
//             className={`category-square ${isCategorySelected(category)}`}
//             onClick={() => handleCategoryToggle(category)}
//           >
//             {category}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExpenseCategories;


import React, { useState } from 'react';
import './SpendingCategories.css'

const ExpenseCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category) ? 'selected' : '';
  };

  const handleCategoryClick = (category) => {
    // Handle the category click logic here
    console.log(`Clicked category: ${category}`);
  };

  return (
    <div className="expense-categories">
      <h2>Select your expenses</h2>
      <p>Pick at least two categories.</p>
      <div className="category-list">
        {/* "Bills & Utilities" */}
        <div
          key="Bills & Utilities"
          className={`category-square ${isCategorySelected("Bills & Utilities")}`}
          style={{ backgroundColor: "#DADFF7" }}
          onClick={() => {
            handleCategoryToggle("Bills & Utilities");
            handleCategoryClick("Bills & Utilities");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/YnkYjkb.png" alt="Bills & Utilities" />
            <br/>
            <span>Bills & Utilities</span>
          </div>
        </div>
        {/* "Savings" */}
        <div
          key="Savings"
          className={`category-square ${isCategorySelected("Savings")}`}
          style={{ backgroundColor: "#DEEFE8" }}
          onClick={() => {
            handleCategoryToggle("Savings");
            handleCategoryClick("Savings");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/x6IQ1Ig.png" alt="Savings" />
            <br/>
            <span>Savings</span>
          </div>
        </div>

        {/* "Charity" */}
        <div
          key="Charity"
          className={`category-square ${isCategorySelected("Charity")}`}
          style={{ backgroundColor: "#FBEDC5" }}
          onClick={() => {
            handleCategoryToggle("Charity");
            handleCategoryClick("Charity");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/jHrtkzm.png" alt="Charity" />
            <br/>
            <span>Charity</span>
          </div>
        </div>
        {/* "Personal" */}
        <div
          key="Personal"
          className={`category-square ${isCategorySelected("Personal")}`}
          style={{ backgroundColor: "#DEEFE8" }}
          onClick={() => {
            handleCategoryToggle("Personal");
            handleCategoryClick("Personal");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/hbfzKv2.png" alt="Personal" />
            <br />
            <span>Personal</span>
          </div>
        </div>
        {/* "Transport" */}
        <div
          key="Transport"
          className={`category-square ${isCategorySelected("Transport")}`}
          style={{ backgroundColor: "#FBEDC5" }}
          onClick={() => {
            handleCategoryToggle("Transport");
            handleCategoryClick("Transport");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/66UeV0x.png" alt="Transport" />
            <br/>
            <span>Transport</span>
          </div>
        </div>

        {/* "Housing" */}
        <div
          key="Housing"
          className={`category-square ${isCategorySelected("Housing")}`}
          style={{ backgroundColor: "#DADFF7" }}
          onClick={() => {
            handleCategoryToggle("Housing");
            handleCategoryClick("Housing");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/XIajom7.png" alt="Housing" />
            <br/>
            <span>Housing</span>
          </div>
        </div>
        {/* "Insurances" */}
        <div
          key="Insurance"
          className={`category-square ${isCategorySelected("Insurance")}`}
          style={{ backgroundColor: "#FBEDC5" }}
          onClick={() => {
            handleCategoryToggle("Insurance");
            handleCategoryClick("Insurance");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/SQ9o1w8.png" alt="Insurance" />
            <br/>
            <span>Insurance</span>
          </div>
        </div>
        {/* "Lifestyle" */}
        <div
          key="Lifestyle"
          className={`category-square ${isCategorySelected("Lifestyle")}`}
          style={{ backgroundColor: "#DADFF7" }}
          onClick={() => {
            handleCategoryToggle("Lifestyle");
            handleCategoryClick("Lifestyle");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/dQamyEs.png" alt="Lifestyles" />
            <br/>
            <span>Lifestyle</span>
          </div>
        </div>

        {/* "Food" */}
        <div
          key="Food"
          className={`category-square ${isCategorySelected("Food")}`}
          style={{ backgroundColor: "#DEEFE8" }}
          onClick={() => {
            handleCategoryToggle("Food");
            handleCategoryClick("Food");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/iaDyJBe.png" alt="Food" />
            <br/>
            <span>Food</span>
          </div>
        </div>

        {/* "Other" */}
        <div
          key="Other"
          className={`category-square ${isCategorySelected("Other")}`}
          style={{ backgroundColor: "#DADFF7" }}
          onClick={() => {
            handleCategoryToggle("Other");
            handleCategoryClick("Other");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/YDPbaJU.png" alt="Other" />
            <br/>
            <span>Other</span>
          </div>
        </div>
        {/* "Health" */}
        <div
          key="Health"
          className={`category-square ${isCategorySelected("Health")}`}
          style={{ backgroundColor: "#DEEFE8" }}
          onClick={() => {
            handleCategoryToggle("Health");
            handleCategoryClick("Health");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/a5jGNMw.png" alt="Health" />
            <br/>
            <span>Health</span>
          </div>
        </div>

        {/* "Future Purchase" */}
        <div
          key="Future Purchase"
          className={`category-square ${isCategorySelected("Future Purchase")}`}
          style={{ backgroundColor: "#FBEDC5" }}
          onClick={() => {
            handleCategoryToggle("Future Purchase");
            handleCategoryClick("Future Purchase");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/9GBfu1D.png" alt="Future Purchase" />
            <br/>
            <span>Future Purchase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCategories;

