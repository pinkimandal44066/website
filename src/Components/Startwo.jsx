import React from 'react';


const reviews = [
  {
    image: "https://via.placeholder.com/150",
    name: "Jena Karlis",
    title: "Store Owner",
    review: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis nostrud aute amet eram fore quis sint minim.",
    rating: 5
  },
  {
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    title: "Developer",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    rating: 4
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Sara Smith",
    title: "Designer",
    review: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    rating: 5
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Michael Brown",
    title: "Manager",
    review: "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
    rating: 4
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Emily Davis",
    title: "Entrepreneur",
    review: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
    rating: 5
  }
];

const CustomerReviews = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center space-y-8">
      {reviews.map((review, index) => (
        <CustomerReview
          key={index}
          image={review.image}
          name={review.name}
          title={review.title}
          review={review.review}
          rating={review.rating}
        />
      ))}
    </div>
  );
};

export default CustomerReviews;
