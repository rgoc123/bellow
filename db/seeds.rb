# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
bobby = User.create!(email: "bobby", password: "password", first_name: "Bobby", last_name: "O'Connor", image: File.open('./app/assets/images/bobby.png'))
carib = User.create!(email: "Carib", password: "password", first_name: "Carib", last_name: "Guerra")
mom = User.create!(email: "annmo900@gmail.com", password: "password", first_name: "Ann", last_name: "O'Connor")
beth = User.create!(email: "Bethoconnor123@gmail.com", password: "password", first_name: "Beth", last_name: "O'Connor")
tommy = User.create!(email: "tlav123@gmail.com", password: "password", first_name: "Tom", last_name: "Lavander", image: File.open('./app/assets/images/tommy.png'))
rao = User.create!(email: "jonrao314@gmail.com", password: "password", first_name: "Jonathan", last_name: "Rao", image: File.open('./app/assets/images/rao.png'))
rao2 = User.create!(email: "jr4119@stern.nyu.edu", password: "password", first_name: "Jon", last_name: "Rao")
jes = User.create!(email: "jndunten@gmail.com", password: "password", first_name: "J", last_name: "Dawg", image: File.open('./app/assets/images/jes.jpg'))
marco = User.create!(email: "marco.carranza1@gmail.com", password: "password", first_name: "Marco", last_name: "Carranza", image: File.open('./app/assets/images/marco.png'))

Business.destroy_all
biz1 = Business.create!(name: "Earl's Beer and Cheese", rating: 5, price: 2, neighborhood: "Harlem", address: "1259 Park Ave, New York, NY 10029", phone_number: "(212) 289-1581", lat: 40.787318, long: -73.951556, main_image: File.open('./app/assets/images/earls_profile.png'))
biz2 = Business.create!(name: "JG Melon's", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "1234 3rd Ave, New York, NY 10075", phone_number: "(212) 646-1234", lat: 40.771086, long: -73.959327, main_image: File.open('./app/assets/images/jg_burg.png'))
biz3 = Business.create!(name: "Bar Coastal", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "5678 1st Ave, New York, NY 10075", phone_number: "(212) 646-5678", lat: 40.772061, long: -73.953422, main_image: File.open('./app/assets/images/bar_coastal_profile.jpg'))
biz4 = Business.create!(name: "Calexico", rating: 4, price: 2, neighborhood: "Lenox Hill", address: "9012 2nd Ave, New York, NY 10075", phone_number: "(212) 646-9012", lat: 40.772643, long: -73.955910, main_image: File.open('./app/assets/images/calexico_prof.jpg'))
biz5 = Business.create!(name: "Sables", rating: 3, price: 1, neighborhood: "Lenox Hill", address: "1489 2nd Ave, New York, NY 10075", phone_number: "(212) 249-6177", lat: 40.772590, long: -73.956045, main_image: File.open('./app/assets/images/sables_prof.jpg'))
biz6 = Business.create!(name: "Red Farm", rating: 3, price: 3, neighborhood: "Upper West Side", address: "2170 Broadway, New York, NY 10024", phone_number: "(212) 249-6177", lat: 40.782177, long: -73.980642, main_image: File.open('./app/assets/images/redfarm_prof.jpg'))
biz7 = Business.create!(name: "Red Farm", rating: 3, price: 3, neighborhood: "West Village", address: "529 Hudson St, New York, NY 10014", phone_number: "(212) 249-6177", lat: 40.734205, long: -74.006460, main_image: File.open('./app/assets/images/redfarm_prof2.jpg'))
biz8 = Business.create!(name: "Joe's Pizza", rating: 5, price: 1, neighborhood: "West Village", address: "7 Carmine St, New York, NY 10014", phone_number: "(212) 249-6177", lat: 40.730600, long: -74.002140, main_image: File.open('./app/assets/images/joes_prof.jpg'))
biz9 = Business.create!(name: "The Horsebox", rating: 5, price: 1, neighborhood: "East Village", address: "218 Avenue A, New York, NY 10009", phone_number: "(212) 249-6177", lat: 40.730022, long: -73.980445, main_image: File.open('./app/assets/images/horsebox_prof.jpg'))
biz10 = Business.create!(name: "Lois", rating: 5, price: 2, neighborhood: "East Village", address: "98 Avenue C, New York, NY 10009", phone_number: "(212) 249-6177", lat: 40.723706, long: -73.978878, main_image: File.open('./app/assets/images/lois_prof.jpg'))
biz11 = Business.create!(name: "Zum Schneider", rating: 4, price: 2, neighborhood: "East Village", address: "107 Avenue C, New York, NY 10009", phone_number: "(212) 249-6177", lat: 40.724272, long: -73.978814, main_image: File.open('./app/assets/images/zum_prof.jpg'))
biz12 = Business.create!(name: "Daniel", rating: 5, price: 4, neighborhood: "Upper East Side", address: "60 E 65th St, New York, NY 10065", phone_number: "(212) 249-6177", lat: 40.766788, long: -73.967601, main_image: File.open('./app/assets/images/daniel_prof.jpg'))
biz13 = Business.create!(name: "Dovetail", rating: 4, price: 4, neighborhood: "Upper West Side", address: "103 W 77th St, New York, NY 10024", phone_number: "(212) 249-6177", lat: 40.780869, long: -73.976670, main_image: File.open('./app/assets/images/dovetail_prof.jpg'))
biz14 = Business.create!(name: "Sushi Nakazawa", rating: 4, price: 4, neighborhood: "West Village", address: "23 Commerce St, New York, NY 10009", phone_number: "(212) 249-6177", lat: 40.731815, long: -74.00491, main_image: File.open('./app/assets/images/sushi_nakazawa_prof.jpg'))
biz15 = Business.create!(name: "Shuko", rating: 4, price: 4, neighborhood: "Union Square", address: "47 E 12th St, New York, NY 10003", phone_number: "(212) 249-6177", lat: 40.733648, long: -73.991613, main_image: File.open('./app/assets/images/shuko_prof.jpg'))
biz16 = Business.create!(name: "Paseo", rating: 5, price: 2, neighborhood: "Fremont", address: "4225 Fremont Ave N, Seattle, WA 98103", phone_number: "(206) 545-7440", lat: 47.658561, long: -122.350309, main_image: File.open('./app/assets/images/paseo_prof.jpg'))

Review.destroy_all
Review.create!(user_id: bobby.id, business_id: biz2.id, body: "The best burgers in the city", rating: 5)
Review.create!(user_id: jes.id, business_id: biz2.id, body: "Amazing burgers, but late night service can be iffy", rating: 4)
Review.create!(user_id: rao.id, business_id: biz2.id, body: "I like burgers", rating: 5)
Review.create!(user_id: bobby.id, business_id: biz4.id, body: "Clutch texican food, great margaritas", rating: 4)
Review.create!(user_id: jes.id, business_id: biz4.id, body: "Never been here, but Rob is making me comment on this", rating: 4)
Review.create!(user_id: rao.id, business_id: biz4.id, body: "I like chimichangas", rating: 4)


Photo.destroy_all
Photo.create!(business_id: biz2.id, image: File.open('./app/assets/images/jg_1.jpg'))
Photo.create!(business_id: biz2.id, image: File.open('./app/assets/images/jg_2.jpg'))
