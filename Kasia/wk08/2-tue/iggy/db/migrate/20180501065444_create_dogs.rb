class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.text :name
      t.text :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
