# json do

json.poke do
  json.extract!(@pokemon, :id, :name, :attack, :defense, :moves, :poke_type)
  json.image_url asset_path(@pokemon.image_url)
  json.item_ids @pokemon.items.pluck(:id)
end

json.items do
  json.array!(@pokemon.items)
end



# end
