const renderSteps = (steps) => {
    return `
    <div class="steps__bg">
        <h2 class="section__title">How to order products <br> from e-shopper </h2>
        <div class="steps__container grid">
            ${steps.map(step => {
                return `
                    <div class="steps__card">
                        <div class="steps__card-number">${step.index}</div>
                        <h3 class="steps__card-title">Choose Products ${step.title}</h3>
                        <p class="steps__card-description">${step.description}
                            We have several varieties products you can choose from.
                        </p>
                    </div>
                `
            }).join('')}
        </div>
    </div>
    `;
}

export default renderSteps;