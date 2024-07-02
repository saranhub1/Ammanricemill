import React from 'react';

const ReviewForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const reviewData = {
      name: formData.get('name'),
      location: formData.get('location'),
      review: formData.get('review'),
    };
    onSubmit(reviewData);
  };

  return (
    <div className="review-form">
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" required />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea id="review" name="review" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
