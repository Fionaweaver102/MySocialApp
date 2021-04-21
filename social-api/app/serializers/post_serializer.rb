class PostSerializer 
  include FastJsonapi::ObjectSericalizer
  attributes :description, :img, :tags 
end 