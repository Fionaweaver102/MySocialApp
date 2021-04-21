class UserSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :firstName, :lastName, :email, :username, :phone, :birthday, :gender, :posts
end 
