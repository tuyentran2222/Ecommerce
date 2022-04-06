const renderFooter = (footerData) => {
    let footerContent = '';
    footerData.forEach(element => {
        footerContent += `
        <div class="footer__content">
            <h3 class="footer__title">${element.title}</h3>
            <ul class="footer-links">
                ${element.links.map(e => {
                    return `<li><a href="${e.link}" class="footer__link">${e.title}</a></li>`;
                }).join('')}
            </ul>
        </div>
        `
    });
    return`
    <div class="footer__container container grid">
        <div class="footer__content">
            <a href="#" class="footer__logo">
                <i class='bx bxs-shopping-bags footer__logo-icon'></i> e-shopper
            </a>
            <p class="footer__description">Enjoy the biggest sale <br> of your life.</p>
            <ul class="footer__social">
                <a href="#" class="footer__social-link"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__social-link"><i class='bx bxl-instagram'></i></a>
                <a href="#" class="footer__social-link"><i class='bx bxl-twitter'></i></a>
            </ul>
        </div>
        ${footerContent}
    </div>
    <span class="footer__copy">&#169 Code by TuyenTV. All rights reserved</span>
    `;
}

export default renderFooter;