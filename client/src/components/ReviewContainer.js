import React, { useEffect, useState } from 'react'
import Review from './Review'
import ReviewForm from './ReviewForm'

function ReviewContainer({id, currentUser}) {

    const[reviewsList ,setReviewsList] = useState([])

    const[reviewFormData, setReviewFormData] = useState({
        comment: "",
        rating: "",
        cocktail_id: id,
    });

    const handleChange = (e) => {
        setReviewFormData({ ...reviewFormData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewFormData),
        };
        
        fetch("/reviews", configObj).then((resp) => {
            if (resp.ok) {
                resp.json().then((review) => {
                    setReviewsList([...reviewsList, review]);
                });
            } else {
                resp.json().then((errors) => {
                    console.error(errors);
                });
            }
        });
        setReviewFormData({
            comment: "",
            rating: "",
            cocktail_id: id})
    };

    useEffect(()=> {
        fetch(`/reviews/cocktails/${id}`)
        .then(resp => resp.json())
        .then(data => setReviewsList(data))
        },[])
    
        function handleDeleteReview(reviewToDeleteId) {
            const updatedReviews= reviewsList.filter((review) => review.id !== reviewToDeleteId);
            setReviewsList(updatedReviews);
        }

        const reviewsToDisplay = reviewsList.map((review)=>{
            return( <Review 
                key={review.id}
                id={review.id}
                comment={review.comment}
                rating={review.rating}
                user={review.username}
                handleDeleteReview={handleDeleteReview}
                reviewFormData={reviewFormData}
                handleSubmit={handleSubmit}
                reviewsList={reviewsList}
                currentUser={currentUser}
                setReviewsList={setReviewsList}
            />)
        })

    return (
        <div>
            {reviewsToDisplay}
            <ReviewForm
                cocktailId={id}
                reviewsList={reviewsList}
                setReviewsList={setReviewsList}
                reviewFormData={reviewFormData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default ReviewContainer