class User < ApplicationRecord
  has_secure_password
  has_many :posts

  # validates: :username, :password,  presence: true, uniqueness: true 
  # validates: :firstName, :lastName, :phone, :birthday, :gender, :email, presence: true 

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
      password: self.password
    }
  end 

end
