class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :cocktails, through: :reviews

    validates :age, numericality: {greater_than_or_equal_to: 18}
end
