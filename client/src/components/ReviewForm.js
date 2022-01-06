import React, { useState } from "react";

function ReviewForm({reviewFormData, handleChange, handleSubmit}) {
        
    // const [reviewFormData, setReviewFormData] = useState({
    //     comment: "",
    //     rating: "",
    //     user_id: "",
    //     cocktail_id: cocktailId,
    // });

    // const handleChange = (e) => {
    //     setReviewFormData({ ...reviewFormData, [e.target.id]: e.target.value });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const configObj = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(reviewFormData),
    //     };

    //     fetch("/reviews", configObj).then((resp) => {
    //         if (resp.ok) {
    //             resp.json().then((review) => {
    //                 setReviewsList([...reviewsList, review]);
    //             });
    //         } else {
    //             resp.json().then((errors) => {
    //                 console.error(errors);
    //             });
    //         }
    //     });
    // };

    return (
        <div className="form-container">
            <form className="review-form" onSubmit={handleSubmit}>
                <div className="field comment">
                    <div className="input-area">
                        <input type="text" id="comment" value={reviewFormData.comment} onChange={(e) => handleChange(e)} placeholder="Enter review here" />
                    </div>
                </div>
                <div className="field rating">
                    <div className="input-area">
                        <input type="number" min="1" max="5" id="rating" value={reviewFormData.rating} onChange={(e) => handleChange(e)} placeholder="Rating 1-5" />
                    </div>
                </div>
                <div className="field rating">
                    <div className="input-area">
                        <input type="number" id="user_id" value={reviewFormData.user_id} onChange={(e) => handleChange(e)} placeholder="test" />
                    </div>
                </div>
                <input type="submit" className="submit" value="Submit Review" />
            </form>
        </div>
    );
}

export default ReviewForm;