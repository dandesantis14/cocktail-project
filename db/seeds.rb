# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data"

u1 = User.create(username:'David', password:'password0', age:28)
u2  = User.create(username:'Daniel', password:'password1', age:28)
u3 = User.create(username:'Michael', password:'password2', age:28)
u4 = User.create(username:'Ollie', password:'password3', age:28)
u5 = User.create(username:'Steve', password:'password4', age:28)

c1 = Cocktail.create(name:'Gin and Tonic', instructions:'Muddle one lime wedge in bottom of glass. Add gin and tonic, stir and garnish with lime wedge', rating:4.5, ingredients:'2 oz gin, 4 oz tonic water, 2 lime wedge')
c2 = Cocktail.create(name:'Rum and Coke', instructions:'Muddle one lime wedge in bottom of glass. Add gin and tonic, stir and garnish with lime wedge', rating:4.5, ingredients:'2 oz gin, 4 oz tonic water, 2 lime wedge')
c3 = Cocktail.create(name:'Rum and Pineapple', instructions:'Muddle one lime wedge in bottom of glass. Add gin and tonic, stir and garnish with lime wedge', rating:4.5, ingredients:'2 oz gin, 4 oz tonic water, 2 lime wedge')
c4 = Cocktail.create(name:'Vodka and Soda', instructions:'Muddle one lime wedge in bottom of glass. Add gin and tonic, stir and garnish with lime wedge', rating:4.5, ingredients:'2 oz gin, 4 oz tonic water, 2 lime wedge')
c5 = Cocktail.create(name:'Martini', instructions:'Muddle one lime wedge in bottom of glass. Add gin and tonic, stir and garnish with lime wedge', rating:4.5, ingredients:'2 oz gin, 4 oz tonic water, 2 lime wedge')

r1 = Review.create(comment:'I liked it.', rating: 4, user_id: u1.id, cocktail_id: c1.id)
r2 = Review.create(comment:"I didn't like it.", rating: 1, user_id: u1.id, cocktail_id: c2.id)
r3 = Review.create(comment:'I sorta liked it.', rating: 2, user_id: u2.id, cocktail_id: c1.id)
r4 = Review.create(comment:'I liked it.', rating: 3, user_id: u3.id, cocktail_id: c3.id)
r5 = Review.create(comment:'I liked it a lot.', rating: 5, user_id: u4.id, cocktail_id: c5.id)

puts "Seeding Complete 🪴"