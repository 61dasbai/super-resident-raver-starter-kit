ig.module( 'game.levels.0' )
.requires( 'impact.image','game.entities.door','game.entities.weapon-pickup','game.entities.exit-sign','game.entities.elevator','game.entities.zombie-c','game.entities.health-pickup','game.entities.void','game.entities.zombie-d','game.entities.player','game.entities.zombie-b','game.entities.zombie-a' )
.defines(function(){
Level0=/*JSON[*/{"entities":[{"type":"EntityDoor","x":720,"y":480,"settings":{"target":{"1":"doorA"},"name":"doorB"}},{"type":"EntityDoor","x":640,"y":880,"settings":{"name":"doorA","target":{"1":"doorB"}}},{"type":"EntityDoor","x":2160,"y":960,"settings":{"target":{"1":"exit"}}},{"type":"EntityWeaponPickup","x":1212,"y":989,"settings":{"delayTime":-1,"weaponId":2}},{"type":"EntityDoor","x":1120,"y":880},{"type":"EntityWeaponPickup","x":1456,"y":1313,"settings":{"delayTime":-1,"weaponId":3}},{"type":"EntityExitSign","x":2160,"y":896,"settings":{"name":"exit"}},{"type":"EntityWeaponPickup","x":648,"y":593,"settings":{"weaponId":1}},{"type":"EntityElevator","x":880,"y":1,"settings":{"target":{"1":"floor3","2":"floor2","3":"floor1"}}},{"type":"EntityZombieC","x":1630,"y":1289},{"type":"EntityHealthPickup","x":1784,"y":1314},{"type":"EntityVoid","x":880,"y":470,"settings":{"size":{"x":160,"y":170},"name":"floor3"}},{"type":"EntityZombieD","x":1818,"y":1049,"settings":{"flip":"true"}},{"type":"EntityPlayer","x":936,"y":97},{"type":"EntityVoid","x":880,"y":870,"settings":{"size":{"x":160,"y":170},"name":"floor2"}},{"type":"EntityZombieB","x":1182,"y":1289},{"type":"EntityVoid","x":880,"y":1190,"settings":{"size":{"x":160,"y":170},"name":"floor1"}},{"type":"EntityZombieA","x":1066,"y":977},{"type":"EntityZombieD","x":1942,"y":1049},{"type":"EntityZombieA","x":742,"y":973,"settings":{"flip":"true"}},{"type":"EntityZombieA","x":578,"y":969}],"layer":[{"name":"main","width":"30","height":"20","linkWithCollision":false,"visible":1,"tilesetName":"media/sprites/dorm-tiles-red.png","repeat":false,"preRender":true,"distance":"1","tilesize":80,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,2,2,2,2,2,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,2,4,2,4,2,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,13,14,15,14,16,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,17,21,21,21,8,9,10,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,2,2,2,2,2,2,9,10,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,2,2,2,2,2,2,9,10,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,2,4,2,4,2,2,9,10,2,4,2,1,1,1,1,1,1,1,1,2,2,2,2,2,1],[1,1,1,1,1,13,14,15,14,15,16,9,10,13,14,16,1,1,1,1,1,1,1,1,2,4,2,4,2,1],[1,1,1,1,1,17,21,21,21,21,18,9,10,17,21,21,1,1,2,2,2,13,15,15,15,14,15,14,16,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,1,1,1,1,2,2,2,2,7,21,21,21,21,21,21,21,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,2,2,2,2,2,2,37,2,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,13,15,15,16,36,13,15,15,15,16,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,9,10,27,21,21,18,1,27,21,21,21,28,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"collision","width":"30","height":"20","linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":80,"foreground":false,"data":[[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"details","width":30,"height":20,"linkWithCollision":false,"visible":1,"tilesetName":"media/sprites/dorm-tiles-details.png","repeat":false,"preRender":true,"distance":"1","tilesize":80,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,3,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,22,0,13,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,33,30,0,9,0,7,0,0,28,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,39,40,32,19,20,20,0,0,39,39,40,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,0,0,27,0,0,1,0,2,0,0,0,0,0,0,0,0,20,20,20,20,10,0],[0,0,0,0,0,15,0,16,0,0,7,0,0,11,0,12,0,0,0,0,0,0,0,0,1,0,2,0,30,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,11,0,12,0,30,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,28,19,20,20,20,40,0,24,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,1,0,14,22,26,25,13,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
Level0Resources=[new ig.Image('media/sprites/dorm-tiles-red.png'), new ig.Image('media/sprites/dorm-tiles-details.png')];
});