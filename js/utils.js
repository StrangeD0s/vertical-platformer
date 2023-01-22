function collision({ object1, object2 }) {
  return (
    object1.position.y + object1.height >= object2.position.y &&
    object1.position.y <= object2.position.y + object2.height &&
    object1.position.x <= object2.position.x + object2.width &&
    object1.position.x + object1.width >= object2.position.x
  );
}

function platformCollision({ object1, object2 }) {
  return (
    object1.position.y + object1.height >= object2.position.y &&
    object1.position.y + object1.height <=
      object2.position.y + object2.height &&
    object1.position.x <= object2.position.x + object2.width &&
    object1.position.x + object1.width >= object2.position.x
  );
}

// * Renderfunktion für DevInfos
function renderDevInfos() {
  const lineHeight = 25;

  const player_x = player.position.x;
  const player_y = player.position.y;
  const player_velocity_x = player.velocity.x;
  const player_velocity_y = player.velocity.y;
  const player_width = player.width;
  const camerabox_x = player.camerabox.position.x;
  const camerabox_y = player.camerabox.position.y;
  const camerabox_width = player.camerabox.width;
  const camerabox_height = player.camerabox.height;

  c.font = "20px Arial";
  c.textAlign = "left";
  c.fillStyle = "hotpink";
  c.fillText("player_x: " + player_x.toFixed(2), 50, lineHeight * 2);
  c.fillText("player_y: " + player_y.toFixed(2), 50, lineHeight * 3);
  c.fillStyle = "papayawhip";
  c.fillText("player_velocity_x: " + player_velocity_x, 50, lineHeight * 4);
  c.fillText(
    "player_velocity_y: " + player_velocity_y.toFixed(2),
    50,
    lineHeight * 5
  );

  c.fillText("camerabox_x: " + camerabox_x.toFixed(2), 50, lineHeight * 6);
  c.fillText("camerabox_y: " + camerabox_y.toFixed(2), 50, lineHeight * 7);

  c.fillText("camerabox_width: " + camerabox_width, 50, lineHeight * 8);
  c.fillText("camerabox_height: " + camerabox_height, 50, lineHeight * 9);
  c.fillText("player_width: " + player_width, 50, lineHeight * 10);
}
