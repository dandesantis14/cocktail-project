class UsersController < ApplicationController

    # rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def show
        user = User.find_by(id:params[:id])
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id  
            render json: user, status: :created
        end
    end

private

    def user_params
        params.permit(:name, :password, :age)
    end

    # def render_unprocessable_entity(invalid)
    #     render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    # end

end
