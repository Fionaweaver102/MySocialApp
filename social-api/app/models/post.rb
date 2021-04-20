class Post < ApplicationRecord
  belongs_to :user 
  serialize :tags

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
      tags: self.tags,
      user_id: self.user_id
    }
  end 
end
