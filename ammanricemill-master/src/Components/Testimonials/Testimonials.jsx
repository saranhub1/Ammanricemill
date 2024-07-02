import React, { useRef, useState, useEffect } from 'react';
import '../Testimonials/Testimonials.css';
import arrow from '../../assets/arrow.png';
import back from '../../assets/back.png';
import profile from '../../assets/profile.jpg';

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Ram Moorthy",
      location: "Erode",
      text: "As a dedicated patron of Sri Amman Rice Mill for over a decade, I can attest to the exceptional quality and service they provide. From their diverse range of top-notch rice varieties to their competitive pricing and reliable delivery, Sri Amman Rice Mill consistently exceeds my expectations. Their professionalism, commitment to quality, and community engagement make them my go-to choice for all my rice needs, and I wholeheartedly recommend them to anyone seeking premium rice products."
    },
    {
      name: "Naveen",
      location: "Perundurai, Erode",
      text: "As a discerning retailer, I've chosen Sri Amman Rice Mill as my trusted supplier for its consistent provision of high-quality rice varieties. Sri Amman's diverse range, including organic and gluten-free options, allows me to meet the varied needs of my health-conscious customers. Their unwavering commitment to quality ensures that I can confidently stock my shelves with products that exceed customer expectations."
    },
    {
      name: "Suresh",
      location: "Thindal, Erode",
      text: "From their efficient delivery service to their commitment to transparent processing and packaging, Sri Amman Rice Mill exceeds my expectations at every turn. As a retailer focused on customer satisfaction, I value their consistency and attention to detail. In essence, Sri Amman Rice Mill isn't just a supplier; they're a trusted partner in my business, providing me with the assurance I need to serve my customers with confidence."
    },
    {
      name: "Thilak",
      location: "Bhavani",
      text: "As a seasoned retailer, Sri Amman Rice Mill has been my trusted supplier for generations, consistently delivering top-notch quality and upholding our shared values of tradition and excellence. From the fragrant Basmati to the hearty Sona Masoori, each grain they provide reflects the premium standards my customers have come to expect. Sri Amman isn't just a supplier; they're an indispensable partner in my business, ensuring that I can always offer my customers the finest rice varieties available."
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const slider = useRef();
  let tx = 0;

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('https://ricemillbackend.onrender.com/api/getTestimonials');
      const data = await response.json();
      setReviews([...reviews, ...data]);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newReview = {
      name: formData.get('name'),
      location: formData.get('location'),
      text: formData.get('text')
    };

    // Perform validation to check if the review contains negative words
    if (!containsNegativeWords(newReview.text)) {
      try {
        const response = await fetch('https://ricemillbackend.onrender.com/api/submitTestimonial', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newReview)
        });

        if (!response.ok) {
          throw new Error('Failed to submit testimonial');
        }

        setReviews([...reviews, newReview]);
        setShowForm(false); // Hide the form after submission
        event.target.reset();
      } catch (error) {
        console.error('Error submitting testimonial:', error);
      }
    } else {
      alert("Please provide a review without negative words."); // Show an alert for negative review
    }
  };

  // Function to check if the review contains negative words
  const containsNegativeWords = (reviewText) => {
    // List of negative keywords
    const negativeKeywords = ["bad", "poor", "disappointing", "terrible", "awful", "not", "don't", "doesn't", "didn't" ,"blame", "stress","disappointment","betrayal"];
    // Convert review text to lowercase for case-insensitive comparison
    reviewText = reviewText.toLowerCase();
    // Check if the review text contains any negative keywords
    return negativeKeywords.some(keyword => reviewText.includes(keyword));
  };

  return (
    <div className='testimonials' id="testimonials">
      <img src={arrow} alt="" className='next-btn' onClick={slideForward} />
      <img src={back} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={profile} alt="" />
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.location}</span>
                  </div>
                </div>
                <p>{review.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {!showForm && <button onClick={() => setShowForm(true)} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}>Add your review</button>}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
          
          <label htmlFor="location">Your Location:</label>
          <input type="text" id="location" name="location" placeholder="Your Location" required />
          
          <label htmlFor="text">Your Review:</label>
          <textarea id="text" name="text" placeholder="Your Review" required></textarea>
          
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Testimonials;
