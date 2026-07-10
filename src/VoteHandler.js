class Entry {
    /** @type {number} */
    #id;
    /** @type {string} */
    value;

    /**
     * @param {number} id 
     * @param {string} value 
     */
    constructor(id, value) {
        this.#id = id;
        this.value = value;
    }

    #value() {
        return encodeURIComponent(this.value);
    }

    toString() {
        return `entry.${this.#id}=${this.#value()}`;
    }
}

class VoteHandler {
    #base_url = "https://docs.google.com/forms/d/e/1FAIpQLSfxnKS0xr2vS1-ZWh8OLGl1LhWyc5josoYOrk7IwVYZRw8J-Q/viewform?usp=pp_url";

    #primeiro_lugar = new Entry(1639798086, "");
    #segundo_lugar = new Entry(2021505044, "");
    #terceiro_lugar = new Entry(1992557461, "");

    set_primeiro(equipe) {
        this.#primeiro_lugar.value = equipe;
    }

    set_segundo(equipe) {
        this.#segundo_lugar.value = equipe;
    }

    set_terceiro(equipe) {
        this.#terceiro_lugar.value = equipe;
    }

    get_url() {
        const entries = [this.#primeiro_lugar, this.#segundo_lugar, this.#terceiro_lugar].join("&");

        return `${this.#base_url}&${entries}`;
    }
}

export const vote = new VoteHandler();
