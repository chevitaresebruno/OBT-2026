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
        let value = this.value.toLocaleString("pt-BR");
        return encodeURIComponent(value);
    }

    toString() {
        return `entry.${this.#id}=${this.#value()}`;
    }
}

class VoteHandler {
    #base_url = "https://docs.google.com/forms/d/e/1FAIpQLSc7oKkZhkIOLX6ekifyFsWL6-QlXutd4pcy9BzwETbhsHwEBw/viewform?usp=pp_url";

    #aladins = new Entry(486799737, "");
    #aquiferas = new Entry(959829553, "");
    #as_winx = new Entry(1557819432, "");
    #atenas_tech = new Entry(1927467080, "");
    #beta_squad = new Entry(160985367, "");
    #compilando_ideias = new Entry(356070851, "");
    #jangss = new Entry(2003941280, "");
    #jovens_titas = new Entry(715193828, "");
    #kairos_tech = new Entry(182368643, "");
    #loucos_e_sonhadores = new Entry(1836674338, "");
    #mecatech = new Entry(824047970, "");
    #nirvana = new Entry(1024093789, "");
    #ss_resenhudos = new Entry(154603573, "");
    #ss_six_sevens = new Entry(568787959, "");
    #pitufos = new Entry(1162367285, "");
    #rest = new Entry(1396037405, "");
    #sapiens = new Entry(25954919, "");
    #tech_tronicos = new Entry(1760157416, "");
    #technova = new Entry(156545926, "");

    get aladins() {
        return this.#aladins.value;
    }

    get aquiferas() {
        return this.#aquiferas.value;
    }

    get as_winx() {
        return this.#as_winx.value;
    }

    get atenas_tech() {
        return this.#atenas_tech.value;
    }

    get beta_squad() {
        return this.#beta_squad.value;
    }

    get compilando_ideias() {
        return this.#compilando_ideias.value;
    }

    get jangss() {
        return this.#jangss.value;
    }

    get jovens_titas() {
        return this.#jovens_titas.value;
    }

    get kairos_tech() {
        return this.#kairos_tech.value;
    }

    get loucos_e_sonhadores() {
        return this.#loucos_e_sonhadores.value;
    }

    get mecatech() {
        return this.#mecatech.value;
    }

    get nirvana() {
        return this.#nirvana.value;
    }

    get ss_resenhudos() {
        return this.#ss_resenhudos.value;
    }

    get ss_six_sevens() {
        return this.#ss_six_sevens.value;
    }

    get pitufos() {
        return this.#pitufos.value;
    }

    get rest() {
        return this.#rest.value;
    }

    get sapiens() {
        return this.#sapiens.value;
    }

    get tech_tronicos() {
        return this.#tech_tronicos.value;
    }

    get technova() {
        return this.#technova.value;
    }

    get betasquad() {
        return this.beta_squad;
    }

    get loucos_e_sonhadores_3() {
        return this.loucos_e_sonhadores;
    }

    get os_resenhudos() {
        return this.ss_resenhudos;
    }

    get os_six_sevens() {
        return this.ss_six_sevens;
    }


    /**
     *
     * @param {string} value
     */
    set aladins(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#aladins.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set aquiferas(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#aquiferas.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set as_winx(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#as_winx.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set atenas_tech(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#atenas_tech.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set beta_squad(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#beta_squad.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set compilando_ideias(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#compilando_ideias.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set jangss(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#jangss.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set jovens_titas(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#jovens_titas.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set kairos_tech(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#kairos_tech.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set loucos_e_sonhadores(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#loucos_e_sonhadores.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set mecatech(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#mecatech.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set nirvana(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#nirvana.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set ss_resenhudos(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#ss_resenhudos.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set ss_six_sevens(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#ss_six_sevens.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set pitufos(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#pitufos.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set rest(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#rest.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set sapiens(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#sapiens.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set tech_tronicos(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#tech_tronicos.value = value_to_set;
        }
    }
    /**
     *
     * @param {string} value
     */
    set technova(value) {
        const value_as_num = Number(value);
        if(value_as_num !== NaN) {
            let value_to_set = value_as_num;
            if(value_to_set < 1) {
                value_to_set = 1;
            } else if(value_to_set > 5) {
                value_to_set = 5;
            }

            this.#technova.value = value_to_set;
        }
    }

    set betasquad(value) {
        this.beta_squad = value;
    }

    set loucos_e_sonhadores_3(value) {
        this.loucos_e_sonhadores = value;
    }

    set os_resenhudos(value) {
        this.ss_resenhudos = value;
    }

    set os_six_sevens(value) {
        this.ss_six_sevens = value;
    }

    /**
     *
     * @param {string} equipe_id
     */
    get_value(equipe_id) {
        if (typeof equipe_id !== "string" || !(equipe_id in this)) {
            return "";
        }

        return this[equipe_id];
    }

    /**
     *
     * @param {string} equipe_id
     * @param {string} value
     */
    set_value(equipe_id, value) {
        if (typeof equipe_id !== "string" || !(equipe_id in this)) {
            return;
        }

        const value_as_num = Number(String(value).replace(",", "."));
        if (!Number.isFinite(value_as_num)) {
            return;
        }

        let value_to_set = value_as_num;
        if (value_to_set < 1) {
            value_to_set = 1;
        } else if (value_to_set > 5) {
            value_to_set = 5;
        }

        this[equipe_id] = value_to_set;
    }

    get_entries() {
        return [
            this.#aladins,
            this.#aquiferas,
            this.#as_winx,
            this.#atenas_tech,
            this.#beta_squad,
            this.#compilando_ideias,
            this.#jangss,
            this.#jovens_titas,
            this.#kairos_tech,
            this.#loucos_e_sonhadores,
            this.#mecatech,
            this.#nirvana,
            this.#ss_resenhudos,
            this.#ss_six_sevens,
            this.#pitufos,
            this.#rest,
            this.#sapiens,
            this.#tech_tronicos,
            this.#technova,
        ]
    }

    get_url() {
        const entries = this.get_entries().join("&");

        return `${this.#base_url}&${entries}`;
    }
}

export const vote = new VoteHandler();
