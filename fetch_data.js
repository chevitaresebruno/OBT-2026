function current_url_clean() {
    const root_url = window.location.origin;
    const first_subpath = window.location.pathname.split('/').filter(Boolean)[0] ?? "0";
    let url;
    if(root_url.endsWith("/")) {
        url = `${root_url}${first_subpath}`;
    } else {
        url = `${root_url}/${first_subpath}`;
    }

    if(url.endsWith("/")) {
        return url;
    }

    return url + "/";
}

export function fetch_local_data(wanted_object_name) {
    const wanted_url = `${current_url_clean()}${wanted_object_name}`;

    return fetch(wanted_url);
}



export async function fetch_data_json() {
    const result = await fetch_local_data('data.json');
    if(!result.ok) {
        throw new Error('Falha ao carregar "data.json"');
    }

    const data = await result.json();
    const clean_url = current_url_clean();

    for(const equipe_data of data) {
        equipe_data.url_imagem_equipe = `${clean_url}${equipe_data.url_imagem_equipe}`;
        equipe_data.url_imagem_logo = `${clean_url}${equipe_data.url_imagem_logo}`;

        for(const membro_equipe of equipe_data.membros_equipe) {
            membro_equipe.imagem = `${clean_url}${membro_equipe.imagem}`; 
        }
    }

    return data;
}
