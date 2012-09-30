class CreateTeamMembers < ActiveRecord::Migration
  def change
    create_table :team_members do |t|
      t.string :Name
      t.text :Bio
      t.string :twitter
      t.string :URL

      t.timestamps
    end
  end
end
