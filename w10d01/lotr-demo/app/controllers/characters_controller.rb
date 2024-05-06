class CharactersController < ApplicationController
  def index
    # /locations/:location_id/characters
    location_id = params[:location_id] # req.params.location_id

    # find the location based on the url parameter
    @location = Location.find(location_id)

    # find only the characters associated with that location
    @characters = @location.characters

    # send the data back as JSON (instead of rendering HTML)
    render json: {
      location: @location,
      characters: @characters
    }
  end
end
