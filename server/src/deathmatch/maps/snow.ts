import type { MapDef } from "../../../../shared/defs/mapDefs";
import { Main } from "../../../../shared/defs/maps/baseDefs";
import { GameConfig } from "../../../../shared/gameConfig";
import { util } from "../../../../shared/utils/util";
import { v2 } from "../../../../shared/utils/v2";
import { THIS_REGION } from "../../resurviv-config";

const switchToSmallMap = THIS_REGION === "eu";

const config = {
    mapSize: switchToSmallMap ? "small" : "large",
    places: 3,
    mapWidth: { large: 270, small: 230 },
    spawnDensity: { large: 37, small: 27 },
} as const;

const mapDef = {
    assets: {
        audio: [
            { name: "snowball_01", channel: "sfx" },
            { name: "snowball_02", channel: "sfx" },
            { name: "plane_02", channel: "sfx" },
            { name: "bells_01", channel: "ui" },
            { name: "snowball_pickup_01", channel: "ui" },
        ],
        atlases: ["gradient", "loadout", "shared", "snow"],
    },
    biome: {
        colors: {
            background: 603705,
            water: 806225,
            waterRipple: 11792639,
            beach: 13480795,
            riverbank: 9461284,
            grass: 12434877,
            underground: 1772803,
            playerSubmerge: 2854052,
        },
        particles: { camera: "falling_snow_fast" },
        airdrop: {
            planeImg: "map-plane-01x.img",
            planeSound: "plane_02",
            airdropImg: "map-chute-01x.img",
        },
        frozenSprites: ["player-snow-01.img", "player-snow-02.img", "player-snow-03.img"],
    },
    gameMode: { maxPlayers: 80, woodsMode: true },
    gameConfig: {
        /* STRIP_FROM_PROD_CLIENT:START */
        planes: {
            timings: [
                {
                    circleIdx: 1,
                    wait: 10,
                    options: { type: GameConfig.Plane.Airdrop },
                },
                {
                    circleIdx: 3,
                    wait: 2,
                    options: { type: GameConfig.Plane.Airdrop },
                },
            ],
            crates: [
                { name: "airdrop_crate_01", weight: 10 },
                { name: "airdrop_crate_02", weight: 1 },
            ],
        },
        /* STRIP_FROM_PROD_CLIENT:END */
        bagSizes: {
            frag: [6, 12, 15, 18],
            smoke: [6, 12, 15, 18],
        },
    },
    /* STRIP_FROM_PROD_CLIENT:START */
    lootTable: {
        tier_mansion_floor: [{ name: "outfitCasanova", count: 1, weight: 1 }],
        tier_vault_floor: [{ name: "outfitJester", count: 1, weight: 1 }],
        tier_police_floor: [{ name: "outfitPrisoner", count: 1, weight: 1 }],
        tier_chrys_01: [{ name: "outfitImperial", count: 1, weight: 1 }],
        tier_chrys_02: [{ name: "katana", count: 1, weight: 1 }],
        tier_chrys_case: [
            // { name: "tier_katanas", count: 1, weight: 3 },
            { name: "naginata", count: 1, weight: 1 },
        ],
        tier_police: [
            { name: "saiga", count: 1, weight: 1 },
            // { name: "flare_gun", count: 1, weight: 0.1 }
        ],
        tier_eye_02: [{ name: "stonehammer", count: 1, weight: 1 }],
        tier_eye_block: [
            { name: "m9", count: 1, weight: 1 },
            { name: "ots38_dual", count: 1, weight: 1 },
            { name: "flare_gun", count: 1, weight: 1 },
            { name: "colt45", count: 1, weight: 1 },
            { name: "45acp", count: 1, weight: 1 },
            { name: "painkiller", count: 1, weight: 1 },
            { name: "m4a1", count: 1, weight: 1 },
            { name: "m249", count: 1, weight: 1 },
            { name: "awc", count: 1, weight: 1 },
            { name: "pkp", count: 1, weight: 1 },
        ],
        tier_sledgehammer: [{ name: "sledgehammer", count: 1, weight: 1 }],
        tier_chest_04: [
            { name: "p30l", count: 1, weight: 40 },
            { name: "p30l_dual", count: 1, weight: 1 },
        ],
        tier_woodaxe: [{ name: "woodaxe", count: 1, weight: 1 }],
        tier_club_melee: [{ name: "machete_taiga", count: 1, weight: 1 }],
        tier_pirate_melee: [{ name: "hook", count: 1, weight: 1 }],
        tier_hatchet_melee: [
            { name: "fireaxe", count: 1, weight: 5 },
            { name: "tier_katanas", count: 1, weight: 3 },
            { name: "stonehammer", count: 1, weight: 1 },
        ],
        tier_airdrop_uncommon: [
            { name: "sv98", count: 1, weight: 1 },
            { name: "outfitGhillie", count: 1, weight: 1 },
        ],
        tier_airdrop_rare: [
            { name: "sv98", count: 1, weight: 1 },
            { name: "outfitGhillie", count: 1, weight: 1 },
        ],
        tier_throwables: [
            { name: "frag", count: 2, weight: 1 },
            { name: "smoke", count: 1, weight: 1 },
            { name: "mirv", count: 2, weight: 0.05 },
        ],
        tier_hatchet: [
            { name: "pan", count: 1, weight: 1 },
            { name: "pkp", count: 1, weight: 1 },
            { name: "usas", count: 1, weight: 1 },
        ],
    },
    mapGen: {
        map: {
            baseWidth: config.mapWidth[config.mapSize],
            baseHeight: config.mapWidth[config.mapSize],
            shoreInset: 40,
            rivers: {
                weights: [],
            },
        },
        places: Main.mapGen
            ? Array(config.places)
                  .fill(false)
                  .map(() => {
                      return Main.mapGen?.places[
                          Math.floor(Math.random() * Main.mapGen.places.length)
                      ];
                  })
            : {},
        densitySpawns: Main.mapGen
            ? Main.mapGen.densitySpawns.reduce(
                  (array, item) => {
                      let object: Record<string, number> = {};
                      for (const [key, value] of Object.entries(item)) {
                          object[key] =
                              (value * config.spawnDensity[config.mapSize]) / 100;
                      }
                      array.push(object);
                      return array;
                  },
                  [] as Record<string, number>[],
              )
            : {},
        
        randomSpawns: [
            {
                spawns: [
                    "mansion_structure_01",
                    // "warehouse_complex_01",
                    "police_01x",
                    "bank_01x",
                ],
                choose: config.mapSize === "large" ? 2 : 1,
            },
        ],
        spawnReplacements: [
            
            {
                barn_01: "barn_01x",
                bridge_lg_01: "bridge_lg_01x",
                cabin_01: "cabin_01x",
                container_01: "container_01x",
                greenhouse_01: "greenhouse_02",
                house_red_01: "house_red_01x",
                house_red_02: "house_red_02x",
                hut_01: "hut_01x",
                hut_02: "hut_02x",
                outhouse_01: "outhouse_01x",
                shack_01: "shack_01x",
                shack_02: "shack_02x",
                shack_03a: "shack_03x",
                warehouse_01: "warehouse_01x",
                warehouse_02: "warehouse_02x",
                bush_01: "bush_01x",
                bush_07: "bush_07x",
                chest_03: "chest_03x",
                crate_01: "crate_01x",
                crate_02: "crate_02x",
                stone_01: "stone_01x",
                stone_03: "stone_03x",
                table_01: "table_01x",
                table_02: "table_02x",
                table_03: "table_03x",
                tree_01: "tree_10",
                mil_crate_02: "mil_crate_03",
            },
            
        ],
    },
    /* STRIP_FROM_PROD_CLIENT:END */
};
export const DeatchmatchSnow = util.mergeDeep({}, Main, mapDef) as MapDef;