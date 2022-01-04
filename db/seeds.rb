# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(name:'David', password:'password', age:28)

c1 = Cocktail.create(name:'Gin and Tonic', instructions:'Muddle one lime wedge in bottom of glass. Add gin and tonic, stir and garnish with lime wedge', rating:4.5, ingredients:'2 oz gin, 4 oz tonic water, 2 lime wedge')

r1 = Review.create(comment:'I liked it.', rating: 5, user_id: u1.id, cocktail_id: c1.id)
