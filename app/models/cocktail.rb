class Cocktail < ApplicationRecord
    has_many :review
    has_many :users, through: :reviews
end
