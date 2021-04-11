class Post < ApplicationRecord
  belongs_to :user 
  has_many :tags 

  def self.arr_to_json 
    self.all.map do |p|
      p.instance_to_json
    end 
  end 

  def instance_to_json
    {
      id: self.id, 
      description: self.description,
      img: self.img,
      user_id: self.user_id,
      tags: self.tags 
    }
  end 
end
