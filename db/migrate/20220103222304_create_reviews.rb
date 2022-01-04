class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment
      t.integer :rating
      t.integer :user_id
      t.integer :cocktail_id

      t.timestamps
    end
  end
end
