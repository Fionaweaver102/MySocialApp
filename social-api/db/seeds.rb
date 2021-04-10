# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(firstName: 'Fiona', lastName: 'Weaver', gender: 'female', email: 'fiona.l.weaver@gmail.com', phone: 9295228177, username: 'fionaweaver', password: 'fionaweaver')
Post.create(description: 'description1', img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80', user_id: 1)
Post.create(description: 'description2', img: 'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=', user_id: 1)
Tag.create(name: "tag1", post_id: 1)
Tag.create(name: "tag2", post_id: 1)