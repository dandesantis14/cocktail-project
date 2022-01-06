class CocktailsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    #!------MUST BE REMOVED BEFORE FINISH-------->
    skip_before_action :authenticate_user
    #!------MUST BE REMOVED BEFORE FINISH-------->

    def index
        render json: Cocktail.all
    end

    def show
        cocktail = find_cocktail
        render json: cocktail
    end

    def create
        cocktail = Cocktail.create!(cocktail_params)
        render json: cocktail, status: :created
    end

    def update
        cocktail = find_cocktail
        cocktail.update(cocktail_params)
        render json: cocktail
    end

    def destroy
        # byebug
        cocktail = find_cocktail
        cocktail.destroy
        head :no_content
    end

private

    def find_cocktail
        Cocktail.find(params[:id])
    end

    def cocktail_params
        params.permit(:name, :instructions, :ingredients, :image)
    end
    
    def render_not_found_response
        render json: { error: "Cocktail not found"}, status: :not_found
    end

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
