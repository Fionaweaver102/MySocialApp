class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :gender
      t.string :username
      t.string :password_digest
      t.string :email
      t.integer :phone
      t.date :birthday

      t.timestamps
    end
  end
end
