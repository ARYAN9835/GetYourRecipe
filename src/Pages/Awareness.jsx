import React, { useState } from 'react';
import './Awareness.css';
import Quiz1 from '../Component/quiz1';
import Quiz2 from '../Component/quiz2';
import Quiz3 from '../Component/quiz3';

const Awareness = () => {
  const [currTopic, setCurrTopic] = useState('');

  const handleClick = (topic) => {
    setCurrTopic(topic);
  };

  return (
    <div className='awareness-container'>
      <header>
        <h1>Welcome to the Awareness Section!</h1>
        <p>
          In this section of my website, I've planned some interesting quizzes for you. By participating, you can test your knowledge on various topics such as Nutrition, Healthy Eating Habits, and Avoiding Food Crisis. 
          Engage with these quizzes to learn more and challenge yourself! 
          Not only will you expand your understanding of essential topics, but you'll also be inspired to adopt healthier habits and make informed choices in your daily life.
          Let's embark on this journey of learning and growth together!
        </p>
      </header>
      <section>
        <div className='topic-section'>
          <h2>Topic 1 - Nutrition</h2>
          <p>
            Nutrition is the cornerstone of a healthy life. Understanding the nutrients your body needs and how they work together can empower you to make choices that support your overall well-being. 
            This topic covers essential nutrients, their sources, and how they contribute to bodily functions such as muscle repair, immune support, and energy production. 
            Dive in to learn how proper nutrition can help you achieve a balanced and energized lifestyle.
          </p>
          <button onClick={() => handleClick('1')} aria-label="Start Nutrition Quiz">Start Quiz</button>
          {currTopic === '1' && <Quiz1 />}
        </div>

        <div className='topic-section'>
          <h2>Topic 2 - Healthy Eating Habits</h2>
          <p>
            Developing healthy eating habits is key to maintaining long-term health and wellness. 
            This topic explores the importance of balanced meals, portion control, and mindful eating practices. 
            Learn about the benefits of starting your day with a nutritious breakfast, staying hydrated, and making informed food choices that align with your body's needs. 
            Embrace these habits to support your physical health and overall well-being.
          </p>
          <button onClick={() => handleClick('2')} aria-label="Start Healthy Eating Habits Quiz">Start Quiz</button>
          {currTopic === '2' && <Quiz2 />}
        </div>

        <div className='topic-section'>
          <h2>Topic 3 - Avoiding Food Crisis</h2>
          <p>
            The global food crisis is a pressing issue that requires collective action and awareness. 
            This topic delves into the causes of food crises, such as climate change and food waste, and highlights the importance of sustainable practices in agriculture and consumption. 
            By understanding the impact of our food choices on the environment and communities, you can contribute to a more sustainable future and help prevent food shortages.
          </p>
          <button onClick={() => handleClick('3')} aria-label="Start Avoiding Food Crisis Quiz">Start Quiz</button>
          {currTopic === '3' && <Quiz3 />}
        </div>
      </section>
    </div>
  );
}

export default Awareness;
