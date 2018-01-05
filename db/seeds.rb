# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
bobby = User.create!(email: "bobby", password: "password", first_name: "Bobby", last_name: "O'Connor")
carib = User.create!(email: "Carib", password: "password", first_name: "Carib", last_name: "Guerra")
mom = User.create!(email: "annmo900@gmail.com", password: "password", first_name: "Ann", last_name: "O'Connor")
beth = User.create!(email: "Bethoconnor123@gmail.com", password: "password", first_name: "Beth", last_name: "O'Connor")
tommy = User.create!(email: "tlav123@gmail.com", password: "password", first_name: "Tom", last_name: "Lavander")
rao = User.create!(email: "jonrao314@gmail.com", password: "password", first_name: "Jonathan", last_name: "Rao")
rao2 = User.create!(email: "jr4119@stern.nyu.edu", password: "password", first_name: "Jon", last_name: "Rao")
jes = User.create!(email: "jndunten@gmail.com", password: "password", first_name: "J", last_name: "Dawg")

Business.destroy_all
biz1 = Business.create!(name: "JG Melon's", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "1234 3rd Ave, New York, NY 10075", phone_number: "212-646-1234")
biz2 = Business.create!(name: "Bar Coastal", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "5678 1st Ave, New York, NY 10075", phone_number: "212-646-5678")
biz3 = Business.create!(name: "Calexico", rating: 4, price: 2, neighborhood: "Lenox Hill", address: "9012 2nd Ave, New York, NY 10075", phone_number: "212-646-9012")

Review.destroy_all
Review.create!(user_id: bobby.id, business_id: biz1.id, body: "The best burgers in the city", rating: 5)
Review.create!(user_id: jes.id, business_id: biz1.id, body: "Amazing burgers, but late night service can be iffy", rating: 4)
Review.create!(user_id: rao.id, business_id: biz1.id, body: "I like burgers", rating: 5)
Review.create!(user_id: bobby.id, business_id: biz3.id, body: "Clutch texican food, great margaritas", rating: 4)
Review.create!(user_id: jes.id, business_id: biz3.id, body: "Never been here, but Rob is making me comment on this", rating: 4)
Review.create!(user_id: rao.id, business_id: biz3.id, body: "I like chimichangas", rating: 4)
