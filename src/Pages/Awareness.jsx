import React, { useState } from 'react';
import './Awareness.css';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Awareness = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { feedback, email });
    setFeedback('');
    setEmail('');
  };

  const data = {
    labels: ['Awareness', 'Participation', 'Impact'],
    datasets: [
      {
        label: 'User Engagement',
        backgroundColor: 'rgba(80,205,205,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [55, 59, 71]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className='awareness-container'>
      <div className='message-card'>
        <h1>Join Our Campaign for Food Awareness!</h1>
        <h2 className='message-heading'>Our Message</h2>
        <p>
          Our mission is to create awareness about the importance of sustainable food practices. By exploring our app, you’re taking a step towards understanding and promoting better food choices.
        </p>
        <div className='chart-container'>
          <Bar data={data} options={options} />
        </div>
        <p>
          Support us in our campaign to make a positive impact. Share your experience with our web app and let us know how we can improve!
        </p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="feedback">Your Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <p>
          "The greatest threat to our planet is the belief that someone else will save it." - Robert Swan
        </p>
        <p>
          Together, we can make a difference. Every small action counts, and your support can lead to significant change.
        </p>
        <p>
          “Food is the ingredient that binds us together.” Embrace sustainable practices and inspire others to do the same.
        </p>
        <p>
          Join our community and become part of a movement towards more responsible and thoughtful food consumption.
        </p>
        <p>
          “What we eat affects more than just our bodies; it impacts our world.” Make informed choices and help raise awareness about the importance of sustainability.
        </p>
        <p>
          Your feedback is valuable. Tell us about your experience with our app and share your thoughts on how we can better serve you.
        </p>
        <p>
          Reach out to us at: <a href="mailto:xyz@gmail.com" className='contact-link'>xyz@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Awareness;
