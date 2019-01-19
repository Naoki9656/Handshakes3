class CreateLikeCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :like_categories do |t|
      t.integer :user_id
      t.string :category1
      t.string :category2
      t.string :category3
      t.string :category4
      t.string :category5
      t.string :category6
      t.string :category7
      t.string :category8
      t.string :category9
      t.string :category10

      t.timestamps
    end
  end
end
