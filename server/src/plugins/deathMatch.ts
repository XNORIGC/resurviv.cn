import { GameObjectDefs } from "../../../shared/defs/gameObjectDefs";
import type { GunDef } from "../../../shared/defs/gameObjects/gunDefs";
import { WeaponSlot } from "../../../shared/gameConfig";
import { ObjectType } from "../../../shared/net/objectSerializeFns";
import { GamePlugin } from "../game/pluginManager";

export default class DeathMatchPlugin extends GamePlugin {
    protected override initListeners(): void {
        this.on("gameCreated", (_data) => {});

        this.on("playerJoin", (data) => {
            data.scope = "4xscope";
            data.boost = 100;
            data.weaponManager.setCurWeapIndex(WeaponSlot.Primary);

            if (data.outfit === "outfitDarkGloves") {
                data.chest = "";
                data.helmet = "";
            }
        });

        this.on("playerKill", (data) => {
            // this.game.playerBarn.emotes.push(
            //     new Emote(0, data.player.pos, "ping_death", true)
            // );

            // clear inventory to prevent loot from dropping;
            data.player.inventory = {};
            data.player.backpack = "backpack00";
            data.player.scope = "1xscope";
            data.player.helmet = "";
            data.player.chest = "";
            data.player.outfit = "outfitBase";

            data.player.weaponManager.setCurWeapIndex(WeaponSlot.Melee);

            {
                const primary = data.player.weapons[WeaponSlot.Primary];
                if (primary.type !== "sv98") {
                    primary.type = "";
                    primary.ammo = 0;
                    primary.cooldown = 0;
                }

                const secondary = data.player.weapons[WeaponSlot.Secondary];
                if (secondary.type !== "sv98") {
                    secondary.type = "";
                    secondary.ammo = 0;
                    secondary.cooldown = 0;
                }
            }

            // give the killer nades and gun ammo and inventory ammo
            if (data.source?.__type === ObjectType.Player) {
                const killer = data.source;
                killer.inventory["frag"] += 3;
                killer.inventory["mirv"] += 1;
                killer.inventoryDirty = true;
                killer.weapsDirty = true;

                function loadAmmo(slot: WeaponSlot) {
                    const weapon = killer.weapons[slot];
                    if (weapon.type) {
                        const gunDef = GameObjectDefs[weapon.type] as GunDef;
                        killer.weapons[slot] = {
                            ...weapon,
                            ammo: calculateAmmoToGive(weapon.ammo, gunDef.maxClip),
                        };
                    }
                }

                loadAmmo(WeaponSlot.Primary);
                loadAmmo(WeaponSlot.Secondary);
            }
        });
    }
}

function calculateAmmoToGive(currAmmo: number, maxClip: number, amount = 50): number {
    return Math.min(currAmmo + (maxClip * amount) / 100, maxClip);
}
