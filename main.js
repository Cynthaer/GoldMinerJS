var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  update: 0.0,
};

function mineGold() {
  gameData.gold += gameData.goldPerClick;
  document.getElementById(
    'goldMined'
  ).innerHTML = `Gold Mined: ${gameData.gold}`;
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost;
    gameData.goldPerClick += 1;
    gameData.goldPerClickCost *= 2;

    document.getElementById(
      'goldMined'
    ).innerHTML = `Gold Mined: ${gameData.gold}`;

    document.getElementById(
      'perClickUpgrade'
    ).innerHTML = `Upgrade Pickaxe (Current Level: ${gameData.goldPerClick}) Cost: ${gameData.goldPerClickCost} Gold`;
  }
}

var mainGameLoop = window.setInterval(() => mineGold(), 1000);

var saveGameLoop = window.setInterval(
  () => localStorage.setItem('goldMinerSave', JSON.stringify(gameData)),
  1000
);

var savegame = JSON.parse(localStorage.getItem('goldMMinerSave'));
if (savegame) {
  gameData = { ...gameData, ...savegame };
}
