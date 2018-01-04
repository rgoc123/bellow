class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.integer :rating
      t.integer :price, null: false
      t.string :neighborhood, null: false
      t.string :address, null: false
      t.string :phone_number, null: false

      t.timestamps
    end

    
  end
end
