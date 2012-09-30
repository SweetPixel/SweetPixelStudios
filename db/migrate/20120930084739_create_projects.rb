class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :Name
      t.text :Description
      t.string :URL

      t.timestamps
    end
  end
end
