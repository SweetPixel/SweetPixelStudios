class ContactController < ApplicationController
  def feedback
  	@new_contact = Contact.new
  	@new_contact.name  = params[:name]
  	@new_contact.email = params[:email]
  	@new_contact.message = params[:message]

  	if @new_contact.save
  		render json: true
  	else
  		render json: false 
  	end
  end
end
