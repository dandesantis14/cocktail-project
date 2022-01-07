class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :cocktail_id, :username, :cocktailName
end
