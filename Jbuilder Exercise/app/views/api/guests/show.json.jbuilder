
#this we can name whatever we want
json.guest do

  #this stuff has to match controller and schema

  json.partial!('api/guests/guest.json.jbuilder', guest: @guest)

  #alternate below also works
  # json.name @guest.name
  # json.age @guest.age
  # json.favorite_color @guest.favorite_color

end
