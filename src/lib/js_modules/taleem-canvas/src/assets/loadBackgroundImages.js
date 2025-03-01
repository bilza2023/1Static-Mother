

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

// Store all background images in a Map (No Async Needed)
export default function loadBackgroundImages() {
    return new Map([
        ["paper01", paper01],
        ["drywall", drywall],
        ["black_board", black_board],
        ["black_board_mat", black_board_mat],
        ["wood", wood],
        ["tinted", tinted],
        ["black_mat", black_mat],
        ["white_mat", white_mat],
        ["granite", granite],
        ["gray_marble", gray_marble],
        ["brown_stone", brown_stone],
        ["gray_stone", gray_stone],
        ["design_old", design_old],
        ["blue_waves", blue_waves],
        ["wall", wall]
    ]);
}
