# json do

  json.pokemon do
    json.extract!(@pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type)
  end



  json.items do
    json.array!(@pokemon.items)
    #this bottom one overwrites each item with the next
    # @pokemon.items.each do |item|
    #   json.extract!(item, :id, :name, :pokemon_id, :price, :happiness, :image_url)
    # end
  end
# end
