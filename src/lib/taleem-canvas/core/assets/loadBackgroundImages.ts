// Define the type for background image data
// type BackgroundImage = string; // Assuming each image is a base64 string

// Import background images
import paper01 from "./bgImages/paper01.js";
import drywall from "./bgImages/drywall.js";
import black_board from "./bgImages/black_board.js";
import black_board_mat from "./bgImages/black_board_mat.js";
import wood from "./bgImages/wood.js";
import tinted from "./bgImages/tinted.js";
import black_mat from "./bgImages/black_mat.js";
import white_mat from "./bgImages/white_mat.js";
import granite from "./bgImages/granite.js";
import gray_marble from "./bgImages/gray_marble.js";
import brown_stone from "./bgImages/brown_stone.js";
import gray_stone from "./bgImages/gray_stone.js";
import design_old from "./bgImages/design_old.js";
import blue_waves from "./bgImages/blue_waves.js";
import wall from "./bgImages/wall.js";

// Define an enum for background image names
export enum BackgroundImageName {
  paper01 = "paper01",
  drywall = "drywall",
  black_board = "black_board",
  black_board_mat = "black_board_mat",
  wood = "wood",
  tinted = "tinted",
  black_mat = "black_mat",
  white_mat = "white_mat",
  granite = "granite",
  gray_marble = "gray_marble",
  brown_stone = "brown_stone",
  gray_stone = "gray_stone",
  design_old = "design_old",
  blue_waves = "blue_waves",
  wall = "wall",
}

/**
 * Loads all background images and returns them in a Map,
 * typed with the BackgroundImageName enum.
 * @returns A Map containing all background images with their names as keys.
 */
export default function loadBackgroundImages(): Map<BackgroundImageName, string> {
  return new Map<BackgroundImageName, string>([
    [BackgroundImageName.paper01, paper01],
    [BackgroundImageName.drywall, drywall],
    [BackgroundImageName.black_board, black_board],
    [BackgroundImageName.black_board_mat, black_board_mat],
    [BackgroundImageName.wood, wood],
    [BackgroundImageName.tinted, tinted],
    [BackgroundImageName.black_mat, black_mat],
    [BackgroundImageName.white_mat, white_mat],
    [BackgroundImageName.granite, granite],
    [BackgroundImageName.gray_marble, gray_marble],
    [BackgroundImageName.brown_stone, brown_stone],
    [BackgroundImageName.gray_stone, gray_stone],
    [BackgroundImageName.design_old, design_old],
    [BackgroundImageName.blue_waves, blue_waves],
    [BackgroundImageName.wall, wall],
  ]);
}