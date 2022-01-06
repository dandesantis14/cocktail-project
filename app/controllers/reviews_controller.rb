class ReviewsController < ApplicationController

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    #!------MUST BE REMOVED BEFORE FINISH-------->
    skip_before_action :authenticate_user
    #!------MUST BE REMOVED BEFORE FINISH-------->

    def user_show
        reviews = Review.find_by(user_id:params[:id])
        render json: reviews
    end

    def cocktail_show
        # byebug
        reviews = Cocktail.find(params[:id]).reviews
        render json: reviews
    end

    def update
        if current_user
            review = Review.find(params[:id])
            review.update(review_params)
            render json: review
        else
            render json: "This review does not belong to you!", status: :unauthorized
        end
    end

    def create
        #? --------------------------user_id:current_user.id
        review = Review.create!(review_params)
        render json: review, status: :created
    end

    def destroy
        if current_user
            review = Review.find(params[:id])
            review.destroy
            head :no_content
        else
            render json: "This review does not belong to you!", status: :unauthorized
        end
    end

    private

    def review_params
        params.permit(:comment, :rating, :user_id, :cocktail_id)
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
