class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :cocktail_id, :username, :cocktailName

  #! Need to specify info return to contain a username and cocktail, not just their id's
  
end
