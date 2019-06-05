function genBuildings(buildings=2, floors=3, roomsPerFloor=10) {
  let allBuildings = [];
  for(let i = 1; i <= buildings; i++) {
    allBuildings.push({building_id: i, rooms: []});
  }
  let usedKeys = {};
  allBuildings.forEach(building => {
    for(let floor = 1; floor <= floors; floor++) {
      for(let room = 1; room <= roomsPerFloor; room++) {
        let key = Math.floor(Math.random()*((roomsPerFloor * floors)*buildings));
        while(key in usedKeys) {
          key = Math.floor(Math.random()*((roomsPerFloor * floors)*buildings));
        }
        building.rooms.push({building_num: building.building_id, room_num: floor*100+room, key: key});
        usedKeys[key] = null
      }
    }
  });
  let allKeys = allBuildings.map(building => building.rooms).flat();
  allKeys.sort(keySort);
  // console.log(allKeys.filter((room, index) => 'hey'));
  return allKeys;
}

function keySort(a, b) {
  if(a.key > b.key) return 1;
  if(b.key > a.key) return -1;

  return 0;
}

export default genBuildings;