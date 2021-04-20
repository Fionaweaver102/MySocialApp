# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

BASE_URL = 'https://dummyapi.io/data/api'
API_ID = '6071f265e875902aa3eb1e5a'

def get_users
  resp = Faraday.new("#{BASE_URL}/user", headers: {
    'app-id' => API_ID
  }).get

  user_data = JSON.parse(resp.body)

  user_data['data'].each do |user|
    User.create!(
      firstName: user["firstName"],
      lastName: user["lastName"],
      email: user["email"],
      gender: user["gender"],
      phone: user["phone"],
      birthday: user["dateOfBirth"],
      picture: user["picture"]
    )
  end 
end 

def get_posts
  resp = Faraday.new("#{BASE_URL}/post", headers: {
    'app-id' => API_ID
  }).get

  post_data = JSON.parse(resp.body)

  post_data['data'].each do |post|
    Post.create!(
      description: post['text'],
      img: post['image'],
      tags: post['tags']
    )
  end 

end 

get_users
get_posts 





