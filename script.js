function createCard(sample) {
    // Získáme data podle konfigurace (používáme klíče definované v CONFIG.fields)
    const id = sample[CONFIG.fields.id] || '';
    const name = sample[CONFIG.fields.name] || 'Neznámý vzorek';
    const location = sample[CONFIG.fields.location] || 'Neznámá lokalita';
    const photoUrl = sample[CONFIG.fields.photo];
    
    // Sestavíme popis a výsledky z více polí
    const description = `Rozpouštědlo: ${sample[CONFIG.fields.solvent] || '-'}<br>
                         Doba: ${sample[CONFIG.fields.time] || '-'}`;
                         
    const commentary = `<strong>pH:</strong> ${sample[CONFIG.fields.ph] || '-'}<br>
                        <strong>Papírek:</strong> ${sample[CONFIG.fields.strips] || '-'}<br>
                        <strong>Extrakt:</strong> ${sample[CONFIG.fields.extractColor] || '-'}`;
    
    // Zpracování fotografie
    let imageHtml;
    if (photoUrl && photoUrl.trim() !== '') {
        imageHtml = `<img src="${photoUrl}" alt="${name}" class="card-image" loading="lazy">`;
    } else {
        const initial = name.charAt(0).toUpperCase();
        imageHtml = `
            <div class="image-placeholder">
                <span>${CONFIG.noPhotoText} ${initial}</span>
            </div>
        `;
    }
    
    // Vracíme HTML strukturu
    return `
        <article class="sample-card" data-id="${id}">
            <div class="card-image-container">
                ${imageHtml}
            </div>
            <div class="card-content">
                <h2 class="card-title">${name}</h2>
                <p class="card-location">📍 ${location}</p>
                <p class="card-description">${description}</p>
                <div class="result-box">
                    <div class="result-label">Výsledky analýzy</div>
                    <div class="result-text">${commentary}</div>
                </div>
            </div>
        </article>
    `;
}
