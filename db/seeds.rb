# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(email: "bobby", password: "password", first_name: "Bobby", last_name: "O'Connor")
User.create!(email: "Carib", password: "password", first_name: "Carib", last_name: "Guerra")
User.create!(email: "annmo900@gmail.com", password: "password", first_name: "Ann", last_name: "O'Connor")

Business.destroy_all
Business.create!(name: "JG Melon's", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "1234 3rd Ave, New York, NY 10075", phone_number: "212-646-1234")
Business.create!(name: "Bar Coastal", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "5678 1st Ave, New York, NY 10075", phone_number: "212-646-5678")
Business.create!(name: "Calexico", rating: 4, price: 2, neighborhood: "Lenox Hill", address: "9012 2nd Ave, New York, NY 10075", phone_number: "212-646-9012")
