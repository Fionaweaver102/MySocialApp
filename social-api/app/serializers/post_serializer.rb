class PostSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :description, :img, :tags, :user
end 