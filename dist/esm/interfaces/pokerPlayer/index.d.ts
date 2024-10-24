import { CardInterface } from "../card";
/**
 * @interface `PokerPlayerConfig`
 * Represents a PokerPlayer Config.
 */
interface PokerPlayerConfig {
    /**
     * @property {string | undefined} id
     * The maximum number of players that can be seated at the PokerTable[2-14].
     */
    id: string | undefined;
    /**
     * @property {string | undefined} name
     * The maximum number of players that can be seated at the PokerTable[2-14].
     */
    name: string | undefined;
    /**
     * @property {number} chips
     * @private
     * The number of chips the player currently has.
     */
    chips: number;
    /**
     * @property {CardInterface[]} hand
     * @private
     * The player's hole cards (the two cards dealt to the player at the start of the game).
     */
    hand: CardInterface[];
    /**
     * @property {boolean} isFolded
     * @private
     * Indicates whether the player is still active in the current round or has folded.
     */
    isFolded: boolean;
}
/**
 * @interface `PokerPlayerInterface`
 * Represents a player seated at the PokerTable.
 * The player can place bets, fold, and manage their chip stack during the game.
 *
 * @extends NodeJS.EventEmitter
 */
interface PokerPlayerInterface extends NodeJS.EventEmitter {
    /******************* GETTERS *******************/
    /**
     * @method `getId`
     * @public
     * Returns the poker table's `id`.
     * @returns {string} The poker table's `id`.
     *
     * @example
     * const rank = card.getRank();
     * console.log(rank); // "A"
     */
    getId(): string;
    /**
     * @method `getName`
     * @public
     * Returns the poker table's `id`.
     * @returns {string} The poker table's `id`.
     *
     * @example
     * const rank = card.getRank();
     * console.log(rank); // "A"
     */
    getName(): string;
    /**
     * @method `getChips`
     * @public
     * Returns the poker table's `id`.
     * @returns {number} The poker table's `id`.
     *
     * @example
     * const rank = card.getRank();
     * console.log(rank); // "A"
     */
    getChips(): number;
    /**
     * @method `getHand`
     * @public
     * Returns the poker table's `id`.
     * @returns {CardInterface[]} The poker table's `id`.
     *
     * @example
     * const rank = card.getRank();
     * console.log(rank); // "A"
     */
    getHand(): CardInterface[];
    /**
     * @method `isFolded`
     * @public
     * Returns the poker table's `id`.
     * @returns {boolean} The poker table's `id`.
     *
     * @example
     * const rank = card.getRank();
     * console.log(rank); // "A"
     */
    isFolded(): boolean;
    /**
     * @method `setHand`
     * @private
     * Returns the poker table's `id`.
     * @returns {number} The poker table's `id`.
     *
     * @example
     * const rank = card.getRank();
     * console.log(rank); // "A"
     */
    bet(amount: number): boolean;
    addToHand(hand: CardInterface): boolean;
    setIsFolded(bool: boolean): boolean;
}
export { PokerPlayerConfig, PokerPlayerInterface };
