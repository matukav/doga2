/*
* File: app.js
* Author: Viola Máté
* Copyright: 2024, Viola Máté
* Group: I/2/N
* Date: 2024-05-08
* Github: https://github.com/matukav
* Licenc: GNU GPL
*/

const doc = {
    compBody: document.querySelector("#compBody")
}

const state = {
    host: "http://localhost:8000",
    endpoint: "panaszok"
}

getComplaints()

async function getComplaints(){
    const url = state.host + '/' + state.endpoint
    let response = await fetch(url)
    let result = await response.json()
    renderComplaints(result)
}

function renderComplaints(compList){
    compList.forEach(comp => {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${comp.id}</td>
            <td>${comp.description}</td>
            <td>${comp.complainant}</td>
            <td>${comp.product}</td>
            <td>${comp.type}</td>
        `
        doc.compBody.appendChild(tr)
    })
}