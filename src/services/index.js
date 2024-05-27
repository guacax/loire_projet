import axios from "axios";

const url = "https://api.atontour.org/v3/sujets/loire/?key=736204";

export async function chateauxAll() {
    const response = await axios.get(url);
    return response.data.records;
}

export async function chateauOne(id) {
    const response = await axios.get(`https://api.atontour.org/v3/sujets/loire/${id}?key=736204`);
    return response.data.records;
}

export async function info() {
    const response = await axios.get(url);
    return response.data.informations.meta;
}