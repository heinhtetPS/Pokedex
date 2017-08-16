
@pokemons.each do |poke|

  json.set!(poke.id) do
    json.extract!(poke, :id, :name )
    # attack, defense, poke_type, moves, image_url)
    json.image_url asset_path(poke.image_url)
  end


end
