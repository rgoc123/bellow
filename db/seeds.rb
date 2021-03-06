# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# bobby = User.create!(email: "bobby", password: "password", first_name: "Bobby", last_name: "O'Connor", image: File.open('./app/assets/images/bobby.png'))
# dan = User.create!(email: "Daniel.e.oneill@gmail.com", password: "password", first_name: "Daniel", last_name: "O'Neill", image: File.open('./app/assets/images/bobby.png'))
# mom = User.create!(email: "annmo900@gmail.com", password: "password", first_name: "Ann", last_name: "O'Connor")
# beth = User.create!(email: "Bethoconnor123@gmail.com", password: "password", first_name: "Beth", last_name: "O'Connor")
# tommy = User.create!(email: "tlav123@gmail.com", password: "password", first_name: "Tom", last_name: "Lavander", image: File.open('./app/assets/images/tommy.png'))
# rao = User.create!(email: "jonrao314@gmail.com", password: "password", first_name: "Jonathan", last_name: "Rao", image: File.open('./app/assets/images/rao.png'))
# rao2 = User.create!(email: "jr4119@stern.nyu.edu", password: "password", first_name: "Jon", last_name: "Rao")
# jes = User.create!(email: "jndunten@gmail.com", password: "password", first_name: "J", last_name: "Dawg", image: File.open('./app/assets/images/jes.jpg'))
# marco = User.create!(email: "marco.carranza1@gmail.com", password: "password", first_name: "Marco", last_name: "Carranza", image: File.open('./app/assets/images/marco.png'))
# guest = User.create!(email: "guest@bellow.com", password: "password", first_name: "Guest", last_name: "Guest", image: File.open('./app/assets/images/bobby.png'))

# Business.destroy_all
# biz1 = Business.create!(name: "Earl's Beer and Cheese", rating: 5, price: 2, neighborhood: "Harlem", address: "1259 Park Ave", city: "New York, NY 10029", phone_number: "(212) 289-1581", website: "http://www.earlsny.com/", lat: 40.787318, long: -73.951556, main_image: File.open('./app/assets/images/earls_profile.png'), cuisines: "American")
# biz2 = Business.create!(name: "JG Melon's", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "1234 3rd Ave", city: "New York, NY 10075", phone_number: "(212) 646-1234", website: "https://jgmelon-nyc.com/welcome/", lat: 40.771086, long: -73.959327, main_image: File.open('./app/assets/images/jg_burg.png'), cuisines: "Burgers")
# biz3 = Business.create!(name: "Bar Coastal", rating: 5, price: 2, neighborhood: "Lenox Hill", address: "5678 1st Ave", city: "New York, NY 10075", phone_number: "(212) 646-5678", website: "http://www.barcoastal.com/", lat: 40.772061, long: -73.953422, main_image: File.open('./app/assets/images/bar_coastal_profile.jpg'), cuisines: "Wings")
# biz4 = Business.create!(name: "Calexico", rating: 4, price: 2, neighborhood: "Lenox Hill", address: "9012 2nd Ave", city: "New York, NY 10075", phone_number: "(212) 646-9012", website: "https://www.calexico.com/", lat: 40.772643, long: -73.955910, main_image: File.open('./app/assets/images/calexico_prof.jpg'), cuisines: "Mexican")
# biz5 = Business.create!(name: "Sables", rating: 3, price: 1, neighborhood: "Lenox Hill", address: "1489 2nd Ave", city: "New York, NY 10075", phone_number: "(212) 249-6177", website: "http://sablesnyc.com/", lat: 40.772590, long: -73.956045, main_image: File.open('./app/assets/images/sables_prof.jpg'), cuisines: "Bagels")
# biz6 = Business.create!(name: "Red Farm", rating: 3, price: 3, neighborhood: "Upper West Side", address: "2170 Broadway", city: "New York, NY 10024", phone_number: "(212) 249-6177", website: "https://www.redfarmnyc.com/", lat: 40.782177, long: -73.980642, main_image: File.open('./app/assets/images/redfarm_prof.jpg'), cuisines: "Chinese")
# biz7 = Business.create!(name: "Red Farm", rating: 3, price: 3, neighborhood: "West Village", address: "529 Hudson St", city: "New York, NY 10014", phone_number: "(212) 249-6177", website: "https://www.redfarmnyc.com/", lat: 40.734205, long: -74.006460, main_image: File.open('./app/assets/images/redfarm_prof2.jpg'), cuisines: "Chinese")
# biz8 = Business.create!(name: "Joe's Pizza", rating: 5, price: 1, neighborhood: "West Village", address: "7 Carmine St", city: "New York, NY 10014", phone_number: "(212) 249-6177", website: "http://www.joespizzanyc.com/", lat: 40.730600, long: -74.002140, main_image: File.open('./app/assets/images/joes_prof.jpg'), cuisines: "Pizza")
# biz9 = Business.create!(name: "The Horsebox", rating: 5, price: 1, neighborhood: "East Village", address: "218 Avenue A", city: "New York, NY 10009", phone_number: "(212) 249-6177", website: "https://www.yelp.com/biz/the-horse-box-new-york", lat: 40.730022, long: -73.980445, main_image: File.open('./app/assets/images/horsebox_prof.jpg'), cuisines: "Bar")
# biz10 = Business.create!(name: "Lois", rating: 5, price: 2, neighborhood: "East Village", address: "98 Avenue C", city: "New York, NY 10009", phone_number: "(212) 249-6177", website: "http://www.loisbarnyc.com/", lat: 40.723706, long: -73.978878, main_image: File.open('./app/assets/images/lois_prof.jpg'), cuisines: "Wine")
# biz11 = Business.create!(name: "Zum Schneider", rating: 4, price: 2, neighborhood: "East Village", address: "107 Avenue C", city: "New York, NY 10009", phone_number: "(212) 249-6177", website: "https://www.zumschneider.com/", lat: 40.724272, long: -73.978814, main_image: File.open('./app/assets/images/zum_prof.jpg'), cuisines: "German")
# biz12 = Business.create!(name: "Daniel", rating: 5, price: 4, neighborhood: "Upper East Side", address: "60 E 65th St", city: "New York, NY 10065", phone_number: "(212) 249-6177", website: "https://www.danielnyc.com/", lat: 40.766788, long: -73.967601, main_image: File.open('./app/assets/images/daniel_prof.jpg'), cuisines: "French")
# biz13 = Business.create!(name: "Dovetail", rating: 4, price: 4, neighborhood: "Upper West Side", address: "103 W 77th St", city: "New York, NY 10024", phone_number: "(212) 249-6177", website: "http://www.dovetailnyc.com/", lat: 40.780869, long: -73.976670, main_image: File.open('./app/assets/images/dovetail_prof.jpg'), cuisines: "French")
# biz14 = Business.create!(name: "Sushi Nakazawa", rating: 4, price: 4, neighborhood: "West Village", address: "23 Commerce St", city: "New York, NY 10009", phone_number: "(212) 249-6177", website: "http://sushinakazawa.com/", lat: 40.731815, long: -74.00491, main_image: File.open('./app/assets/images/sushi_nakazawa_prof.jpg'), cuisines: "Sushi")
# biz15 = Business.create!(name: "Shuko", rating: 4, price: 4, neighborhood: "Union Square", address: "47 E 12th St", city: "New York, NY 10003", phone_number: "(212) 249-6177", website: "https://www.shukonyc.com/", lat: 40.733648, long: -73.991613, main_image: File.open('./app/assets/images/shuko_prof.jpg'), cuisines: "Sushi")
# biz16 = Business.create!(name: "Paseo", rating: 5, price: 2, neighborhood: "Fremont", address: "4225 Fremont Ave N", city: "Seattle, WA 98103", phone_number: "(206) 545-7440", website: "http://www.paseorestaurants.com/", lat: 47.658561, long: -122.350309, main_image: File.open('./app/assets/images/paseo_prof.jpg'), cuisines: "Cuban")
# biz17 = Business.create!(name: "Corner Bistro", rating: 5, price: 2, neighborhood: "West Village", address: "123 Sp123 Spring String St", city: "New York", phone_number: "(212) 249-6177", website: "http://cornerbistrony.com/", lat: 40.7380487, long: -74.0039281, main_image: File.open('./app/assets/images/cbistro_prof.jpg'), cuisines: "Burgers") # corner bistro
# biz18 = Business.create!(name: "Dutch Fred's", rating: 5, price: 3, neighborhood: "Theater District", address: "123 Spring St", city: "New York", phone_number: "(212) 249-6177", website: "https://www.dutchfreds.com/", lat: 40.7607843, long: -73.9880036, main_image: File.open('./app/assets/images/dfreds_prof.jpg'), cuisines: "American") # dutch fred's
# biz19 = Business.create!(name: "Shorty's", rating: 5, price: 2, neighborhood: "Upper East Side", address: "123 Spring St", city: "New York", phone_number: "(212) 249-6177", website: "http://www.shortysnyc.com/", lat: 40.777880, long: -73.9485456, main_image: File.open('./app/assets/images/shortys_prof.jpg'), cuisines: "Wings") # shorty's
# biz20 = Business.create!(name: "H&H Midtown Bagels Eagles", rating: 4, price: 2, neighborhood: "Lenox Hill", address: "123 Spring St", city: "New York", phone_number: "(212) 249-6177", website: "https://www.hhmidtownbagelseast.com/", lat: 40.7744243, long: -73.9546259, main_image: File.open('./app/assets/images/hh_prof.jpg'), cuisines: "Bagels") # hh
# biz21 = Business.create!(name: "John's of Bleecker Street", rating: 5, price: 2, neighborhood: "West Village", address: "123 Spring St", city: "New York", phone_number: "(212) 249-6177", website: "http://www.johnsbrickovenpizza.com/", lat: 40.731631, long: -74.0035777, main_image: File.open('./app/assets/images/johns_prof.jpg'), cuisines: "Pizza") # johns
# biz22 = Business.create!(name: "Loreley Beer Garden", rating: 4, price: 2, neighborhood: "Lower East Side", address: "123 Spring St", city: "New York", phone_number: "(212) 249-6177", website: "http://www.loreleynyc.com/", lat: 40.721118, long: -73.9934438, main_image: File.open('./app/assets/images/loreley_prof.jpg'), cuisines: "German") # loreley
# biz23 = Business.create!(name: "Mimi Cheng's", rating: 4, price: 2, neighborhood: "East Village", address: "123 Spring St", city: "New York", phone_number: "(212) 249-6177", website: "http://www.mimichengs.com/", lat: 40.7306734, long: -73.9866583, main_image: File.open('./app/assets/images/mimis_prof.jpg'), cuisines: "Chinese") # mimi chengs
# biz24 = Business.create!(name: "Santa Fe", rating: 5, price: 3, neighborhood: "Upper West Side", address: "123 Spring St", city: "New York", phone_number: "(212) 249-6177", website: "http://santafe71.com/", lat: 40.7766731, long: -73.979088, main_image: File.open('./app/assets/images/sf_prof.jpg'), cuisines: "Mexican") # santa fe

# Review.destroy_all
# Review.create!(user_id: bobby.id, business_id: biz2.id, body: "The best burgers in the city", rating: 5)
# Review.create!(user_id: jes.id, business_id: biz2.id, body: "Amazing burgers, but late night service can be iffy", rating: 4)
# Review.create!(user_id: rao.id, business_id: biz2.id, body: "I like burgers", rating: 5)
# Review.create!(user_id: bobby.id, business_id: biz4.id, body: "Clutch texican food, great margaritas", rating: 4)
# Review.create!(user_id: jes.id, business_id: biz4.id, body: "Never been here, but I've heard good things", rating: 4)
# Review.create!(user_id: rao.id, business_id: biz4.id, body: "I like chimichangas", rating: 4)


# Photo.destroy_all
# Photo.create!(business_id: biz1.id, image: File.open('./app/assets/images/earls1.jpg'))
# Photo.create!(business_id: biz1.id, image: File.open('./app/assets/images/earls2.jpg'))
# Photo.create!(business_id: biz2.id, image: File.open('./app/assets/images/jg_1.jpg'))
# Photo.create!(business_id: biz2.id, image: File.open('./app/assets/images/jg_2.jpg'))
# Photo.create!(business_id: biz3.id, image: File.open('./app/assets/images/barcoastal1.jpg'))
# Photo.create!(business_id: biz3.id, image: File.open('./app/assets/images/barcoastal2.jpg'))
# Photo.create!(business_id: biz4.id, image: File.open('./app/assets/images/calexico1.jpg'))
# Photo.create!(business_id: biz4.id, image: File.open('./app/assets/images/calexico2.jpg'))
# Photo.create!(business_id: biz5.id, image: File.open('./app/assets/images/sables1.jpg'))
# Photo.create!(business_id: biz5.id, image: File.open('./app/assets/images/sables2.jpg'))
# Photo.create!(business_id: biz6.id, image: File.open('./app/assets/images/redfarm0.jpg'))
# Photo.create!(business_id: biz6.id, image: File.open('./app/assets/images/redfarm1.jpg'))
# Photo.create!(business_id: biz7.id, image: File.open('./app/assets/images/redfarm2.jpg'))
# Photo.create!(business_id: biz7.id, image: File.open('./app/assets/images/redfarm3.jpg'))
# Photo.create!(business_id: biz8.id, image: File.open('./app/assets/images/joes1.jpg'))
# Photo.create!(business_id: biz8.id, image: File.open('./app/assets/images/joes2.jpg'))
# Photo.create!(business_id: biz9.id, image: File.open('./app/assets/images/hbox1.jpg'))
# Photo.create!(business_id: biz9.id, image: File.open('./app/assets/images/hbox2.jpg'))
# Photo.create!(business_id: biz10.id, image: File.open('./app/assets/images/lois1.jpg'))
# Photo.create!(business_id: biz10.id, image: File.open('./app/assets/images/lois2.jpg'))
# Photo.create!(business_id: biz11.id, image: File.open('./app/assets/images/zum1.jpg'))
# Photo.create!(business_id: biz11.id, image: File.open('./app/assets/images/zum2.jpg'))
# Photo.create!(business_id: biz12.id, image: File.open('./app/assets/images/daniel1.jpg'))
# Photo.create!(business_id: biz12.id, image: File.open('./app/assets/images/daniel2.jpg'))
# Photo.create!(business_id: biz13.id, image: File.open('./app/assets/images/dove1.jpg'))
# Photo.create!(business_id: biz13.id, image: File.open('./app/assets/images/dove2.jpg'))
# Photo.create!(business_id: biz14.id, image: File.open('./app/assets/images/sushi1.jpg'))
# Photo.create!(business_id: biz14.id, image: File.open('./app/assets/images/sushi2.jpg'))
# Photo.create!(business_id: biz15.id, image: File.open('./app/assets/images/shuko1.jpg'))
# Photo.create!(business_id: biz15.id, image: File.open('./app/assets/images/shuko2.jpg'))
# Photo.create!(business_id: biz16.id, image: File.open('./app/assets/images/paseo1.jpg'))
# Photo.create!(business_id: biz16.id, image: File.open('./app/assets/images/paseo2.jpg'))
# Photo.create!(business_id: biz17.id, image: File.open('./app/assets/images/cbistro1.jpg'))
# Photo.create!(business_id: biz17.id, image: File.open('./app/assets/images/cbistro2.jpg'))
# Photo.create!(business_id: biz18.id, image: File.open('./app/assets/images/dfreds1.jpg'))
# Photo.create!(business_id: biz18.id, image: File.open('./app/assets/images/dfreds2.jpg'))
# Photo.create!(business_id: biz19.id, image: File.open('./app/assets/images/shortys1.jpg'))
# Photo.create!(business_id: biz19.id, image: File.open('./app/assets/images/shortys2.jpg'))
# Photo.create!(business_id: biz20.id, image: File.open('./app/assets/images/hh1.jpg'))
# Photo.create!(business_id: biz20.id, image: File.open('./app/assets/images/hh2.jpg'))
# Photo.create!(business_id: biz21.id, image: File.open('./app/assets/images/johns1.jpg'))
# Photo.create!(business_id: biz21.id, image: File.open('./app/assets/images/johns2.jpg'))
# Photo.create!(business_id: biz22.id, image: File.open('./app/assets/images/loreley1.jpg'))
# Photo.create!(business_id: biz22.id, image: File.open('./app/assets/images/loreley2.jpg'))
# Photo.create!(business_id: biz23.id, image: File.open('./app/assets/images/mimis1.jpg'))
# Photo.create!(business_id: biz23.id, image: File.open('./app/assets/images/mimis2.jpg'))
# Photo.create!(business_id: biz24.id, image: File.open('./app/assets/images/sf1.jpg'))
# Photo.create!(business_id: biz24.id, image: File.open('./app/assets/images/sf2.jpg'))
