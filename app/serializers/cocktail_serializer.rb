class CocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions, :rating, :ingredients, :image
end
