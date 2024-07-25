import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/recipes');
  }

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to RecipeApp</h1>
        <p>Your one-stop solution for delicious recipes!</p>
      </header>
      
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipes-list">
          <div className="recipe-card">
            <img src={image1} alt="Delicious Bread Pastry" />
            <h3>Delicious Bread Pastry</h3>
            <div className='points'>
              <ul>
                <li>Fluffy and golden brown</li>
                <li>Isn't it looking delicious?</li>
                <li>Find more varieties in our collection</li>
              </ul>
            </div>
          </div>
          <div className="recipe-card">
            <img src={image2} alt="Recipe 2" />
            <h3>Recipe 2</h3>
            <div className='points'>
              <ul>
                <li>Fluffy and golden brown</li>
                <li>Isn't it looking delicious?</li>
                <li>Find more varieties in our collection</li>
              </ul>
            </div>
          </div>
          <div className="recipe-card">
            <img src={image3} alt="Recipe 3" />
            <h3>Recipe 3</h3>
            <div className='points'>
              <ul>
                <li>Rich and flavorful</li>
                <li>Perfect for a hearty meal</li>
                <li>Discover the recipe today</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Get Started</h2>
        <p>Explore our collection of recipes and find your next favorite meal.</p>
        <button className="explore-button" onClick={handleClick}>Explore Recipes</button>
      </section>
    </div>
  );
};

export default Home;
