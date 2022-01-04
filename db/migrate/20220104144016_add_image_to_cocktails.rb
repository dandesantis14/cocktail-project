class AddImageToCocktails < ActiveRecord::Migration[6.1]
  def change
    add_column :cocktails, :image, :string
  end
end
