class Review < ApplicationRecord
    belongs_to :user
    belongs_to :cocktail

    validates :comment, presence: true
    validates :rating, presence: true

    def username
        self.user.username
    end

    def cocktailName
        self.cocktail.name
    end
end
