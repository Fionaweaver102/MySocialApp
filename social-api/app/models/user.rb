class User < ApplicationRecord
  has_secure_password
  has_many :posts

  def self.arr_to_json
    self.all.map do |p|
      p.instance_to_json
    end 
  end 

  def instance_to_json
    {
      id: self.id,
      firstName: self.firstName,
      lastName: self.lastName,
      birthday: self.birthday,
      gender: self.gender,
      phone: self.phone,
      username: self.username,
      password: self.password,
      posts: self.posts,
    }
  end 

end
