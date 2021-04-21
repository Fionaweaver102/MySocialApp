class UserSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :firstName, :lastName, :picture, :email, :username, :phone, :birthday, :gender, :posts
end 
