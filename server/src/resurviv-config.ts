import { GameConfig } from "../../shared/gameConfig";
import type { ConfigType, DeepPartial } from "./config";

const BACKPACK_LEVEL = 3;

// change this to the region of the server
export const THIS_REGION: "na" | "eu" | "local" = "local";

const serverDataConfig = {
    local: {
        gameServer: {
            apiServerUrl: "http://r.camvan.xyz",
        },
        regions: {
            hk: {
                https: false,
                address: "r.camvan.xyz:8201",
                l10n: "index-hong-kong",
            },
        },
        thisRegion: "hk",
    },
    na: {
        gameServer: {
            apiServerUrl: "http://resurviv.biz",
        },
        regions: {
            na: {
                https: false,
                address: "resurviv.biz:8001",
                l10n: "index-north-america",
            },
            eu: {
                https: false,
                address: "217.160.224.171:8001",
                l10n: "index-europe",
            },
        },
        thisRegion: "na",
    },
    eu: {
        gameServer: {
            apiServerUrl: "http://217.160.224.171",
        },
        regions: {
            eu: {
                https: false,
                address: "217.160.224.171:8001",
                l10n: "index-europe",
            },
        },
        thisRegion: "eu",
    },
};

export const CustomConfig: DeepPartial<ConfigType> = {
    ...serverDataConfig[THIS_REGION],
    client: {
        theme: "snow",
    },
    modes: [
        {
            mapName: "snow",
            teamMode: 1,
            enabled: true,
        },
        {
            mapName: "desert",
            teamMode: 2,
            enabled: true,
        },
        {
            mapName: "faction",
            teamMode: 4,
            enabled: true,
        },
    ],
    gameConfig: {
        disableKnocking: true,
        disableGroupSpectate: true,
        gas: {
            damageTickRate: 1,
        },
        player: {
            baseSwitchDelay: 0.05,
            defaultItems: {
                backpack: "backpack03",
                helmet: "helmet03",
                chest: "chest03",
                scope: "4xscope",
                perks: [
                    {
                        type: "endless_ammo",
                        droppable: false,
                    },
                    {
                        type: "takedown",
                        droppable: false,
                    },
                ],

                inventory: {
                    snowball: 10,
                    frag: 3,
                    smoke: 1,
                    mirv: 1,
                    bandage: GameConfig.bagSizes["bandage"][BACKPACK_LEVEL],
                    healthkit: GameConfig.bagSizes["healthkit"][BACKPACK_LEVEL],
                    soda: GameConfig.bagSizes["soda"][BACKPACK_LEVEL],
                    painkiller: GameConfig.bagSizes["painkiller"][BACKPACK_LEVEL],
                    "1xscope": 1,
                    "2xscope": 1,
                    "4xscope": 1,
                },
            },
        },
    },
};
