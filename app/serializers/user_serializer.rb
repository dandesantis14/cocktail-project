class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :birthdate
end
