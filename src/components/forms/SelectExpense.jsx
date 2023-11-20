import React, { useState } from 'react';

const ExpenseCategories = ({ setShow, setActiveSelection }) => {
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
    setActiveSelection(category);
    console.log(category)
    setShow(false);
  };

  return (
    <div className="expense-categories">
      <h2>Select your first expenses category.</h2>
      <div className="category-list">
        {/* "Bills & Utilities" */}
        <div
          key="Bills"
          className={`category-square ${isCategorySelected("Bills & Utilities")}`}
          style={{ backgroundColor: "#DADFF7" }}
          onClick={() => {
            handleCategoryToggle("Bills");
            handleCategoryClick("Bills");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/YnkYjkb.png" alt="Bills_&_Utilities" />
            <br/>
            <span>Bills & Utilities</span>
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
          style={{ backgroundColor: "#DEEFE8" }}
          onClick={() => {
            handleCategoryToggle("Housing");
            handleCategoryClick("Housing");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/FO0Thjc.png" alt="Housing" />
            <br/>
            <span>Housing</span>
          </div>
        </div> 
        {/* "Food" */}
        <div
          key="Food"
          className={`category-square ${isCategorySelected("Food")}`}
          style={{ backgroundColor: "#FBEDC5" }}
          onClick={() => {
            handleCategoryToggle("Food");
            handleCategoryClick("Food");
          }}
        >
          <div className="category-image">
            <img src="https://imgur.com/UZqm54M.png" alt="Food" />
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
      </div>
    </div>
  );
};

export default ExpenseCategories;



