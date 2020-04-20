class AddEmailAndPasswordDigestToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :email, :string, index: { unique: true }
    change_column_null :users, :email, false

    add_column :users, :password_digest, :string
    change_column_null :users, :password_digest, false
  end
end
