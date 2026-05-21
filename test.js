
const URL = "https://linkedin-or-interpol.com/api";

async function request(url, options) {

    const response = await fetch(url, options);

    if (!response.ok) {

        throw new Error(`HTTP error ${response.status}`);

    }

    return response.json();

}

export async function random_person() {

    return await request(`${URL}/random-person`, {

        headers: { Accept: "application/json" },

    });

}

export async function check_answer(personId, userChoice) {
    
    return await request(`${URL}/check-answer`, {

        method: "POST",

        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify({ personId: personId, userChoice: userChoice })

    });

}
