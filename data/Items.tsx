export const ITEM_TYPE_CONSUMABLE = 'Consumable';
export const ITEM_TYPE_USABLE = 'Usable';

export const ITEM_TIER_ONE = 1;
export const ITEM_TIER_TWO = 2;
export const ITEM_TIER_THREE = 3;
export const ITEM_TIER_FOUR = 4;
export const ITEM_TIER_FIVE = 5;

export type ItemType = {
    type: string,
    tier: number,
    name: string,
    description: string,
    healthRegenerationUp: number,
    healthRegenerationDown: number,
    damageEnemy: number,
    damageSelf: number,
}

// todo: Make items, classes?
export class Items{
    itemsList : ItemType[] = [
        {
            "type": ITEM_TYPE_CONSUMABLE,
            "tier": ITEM_TIER_ONE,
            "name": "Moldy croissant",
            "description": "Tasty!",
            "healthRegenerationUp": 25,
            "healthRegenerationDown": 0,
            "damageEnemy": 5,
            "damageSelf": 0
        },
        {
            "type": ITEM_TYPE_USABLE,
            "tier": ITEM_TIER_ONE,
            "name": "Rusty throwable knife",
            "description": "Looks like it can fall apart at any time",
            "healthRegenerationUp": 0,
            "healthRegenerationDown": 0,
            "damageEnemy": 5,
            "damageSelf": 0
        },
        {
            "type": ITEM_TYPE_USABLE,
            "tier": ITEM_TIER_ONE,
            "name": "Broken wooden spear",
            "description": "It might be broken, but the point is still sharp",
            "healthRegenerationUp": 0,
            "healthRegenerationDown": 0,
            "damageEnemy": 5,
            "damageSelf": 0
        }
    ];

    getItems(): ItemType[]
    {
        return this.itemsList;
    }
}