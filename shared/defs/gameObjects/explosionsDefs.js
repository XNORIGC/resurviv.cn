export const ExplosionDefs = {
    explosion_frag: {
        type: "explosion",
        damage: 125,
        obstacleDamage: 1.1,
        rad: { min: 5, max: 12 },
        shrapnelCount: 12,
        shrapnelType: "shrapnel_frag",
        explosionEffectType: "frag",
        decalType: "decal_frag_explosion"
    },
    explosion_smoke: {
        type: "explosion",
        damage: 0,
        obstacleDamage: 1,
        rad: { min: 5, max: 12 },
        shrapnelCount: 0,
        shrapnelType: "shrapnel_frag",
        explosionEffectType: "smoke",
        decalType: "decal_smoke_explosion"
    },
    explosion_strobe: {
        type: "explosion",
        damage: 1,
        obstacleDamage: 5,
        rad: { min: 1.5, max: 2.5 },
        shrapnelCount: 3,
        shrapnelType: "shrapnel_strobe",
        explosionEffectType: "strobe",
        decalType: "decal_smoke_explosion"
    },
    explosion_barrel: {
        type: "explosion",
        damage: 125,
        obstacleDamage: 1,
        rad: { min: 5, max: 12 },
        shrapnelCount: 12,
        shrapnelType: "shrapnel_barrel",
        explosionEffectType: "barrel",
        decalType: "decal_barrel_explosion"
    },
    explosion_stove: {
        type: "explosion",
        damage: 125,
        obstacleDamage: 2,
        rad: { min: 5, max: 12 },
        shrapnelCount: 16,
        shrapnelType: "shrapnel_stove",
        explosionEffectType: "barrel",
        decalType: "decal_barrel_explosion"
    },
    explosion_usas: {
        type: "explosion",
        damage: 42,
        obstacleDamage: 4,
        rad: { min: 3.5, max: 6.5 },
        shrapnelCount: 9,
        shrapnelType: "shrapnel_usas",
        explosionEffectType: "usas",
        decalType: "decal_frag_small_explosion"
    },
    explosion_rounds: {
        type: "explosion",
        damage: 3,
        obstacleDamage: 15,
        rad: { min: 0.75, max: 1 },
        shrapnelCount: 0,
        shrapnelType: "shrapnel_usas",
        explosionEffectType: "rounds",
        decalType: "decal_rounds_explosion"
    },
    explosion_rounds_sg: {
        type: "explosion",
        damage: 3,
        obstacleDamage: 15,
        rad: { min: 0.75, max: 1 },
        shrapnelCount: 0,
        shrapnelType: "shrapnel_usas",
        explosionEffectType: "rounds_sg",
        decalType: "decal_rounds_explosion"
    },
    explosion_mirv: {
        type: "explosion",
        damage: 125,
        obstacleDamage: 1.1,
        rad: { min: 5, max: 12 },
        shrapnelCount: 12,
        shrapnelType: "shrapnel_frag",
        explosionEffectType: "mirv",
        decalType: "decal_frag_explosion"
    },
    explosion_mirv_mini: {
        type: "explosion",
        damage: 75,
        obstacleDamage: 1.1,
        rad: { min: 4, max: 8 },
        shrapnelCount: 7,
        shrapnelType: "shrapnel_mirv_mini",
        explosionEffectType: "mirv_mini",
        decalType: "decal_frag_small_explosion"
    },
    explosion_martyr_nade: {
        type: "explosion",
        damage: 80,
        obstacleDamage: 1.1,
        rad: { min: 4.5, max: 9 },
        shrapnelCount: 8,
        shrapnelType: "shrapnel_mirv_mini",
        explosionEffectType: "martyr_nade",
        decalType: "decal_frag_small_explosion"
    },
    explosion_snowball: {
        type: "explosion",
        damage: 2,
        obstacleDamage: 1,
        rad: { min: 1.24, max: 1.25 },
        shrapnelCount: 0,
        shrapnelType: "",
        explosionEffectType: "snowball",
        decalType: "decal_snowball_explosion"
    },
    explosion_snowball_heavy: {
        type: "explosion",
        damage: 5,
        obstacleDamage: 1,
        rad: { min: 1.24, max: 1.25 },
        shrapnelCount: 0,
        shrapnelType: "",
        explosionEffectType: "snowball_heavy",
        decalType: "decal_snowball_explosion"
    },
    explosion_potato: {
        type: "explosion",
        damage: 2,
        obstacleDamage: 1,
        teamDamage: false,
        rad: { min: 1.24, max: 1.25 },
        shrapnelCount: 0,
        shrapnelType: "",
        explosionEffectType: "potato",
        decalType: "decal_potato_explosion"
    },
    explosion_potato_heavy: {
        type: "explosion",
        damage: 5,
        obstacleDamage: 1,
        teamDamage: false,
        rad: { min: 1.24, max: 1.25 },
        shrapnelCount: 0,
        shrapnelType: "",
        explosionEffectType: "potato_heavy",
        decalType: "decal_potato_explosion"
    },
    explosion_potato_cannonball: {
        type: "explosion",
        damage: 95,
        obstacleDamage: 1.3,
        teamDamage: false,
        rad: { min: 3.5, max: 6.5 },
        shrapnelCount: 0,
        shrapnelType: "",
        explosionEffectType: "potato_cannonball",
        decalType: "decal_frag_small_explosion"
    },
    explosion_potato_smgshot: {
        type: "explosion",
        damage: 13,
        obstacleDamage: 1.25,
        teamDamage: false,
        rad: { min: 1.25, max: 1.75 },
        shrapnelCount: 0,
        shrapnelType: "",
        explosionEffectType: "potato_smgshot",
        decalType: ""
    },
    explosion_bomb_iron: {
        type: "explosion",
        damage: 40,
        obstacleDamage: 2,
        rad: { min: 5, max: 14 },
        shrapnelCount: 2,
        shrapnelType: "shrapnel_bomb_iron",
        explosionEffectType: "bomb_iron",
        decalType: "decal_bomb_iron_explosion"
    }
};
