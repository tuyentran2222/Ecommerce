const renderHeader = (headerData) => {
    let liItems = '';
    headerData.forEach(element => {
        liItems += `<li class="nav__item">
                        <a href="${element.link}" class="nav__link">${element.title}</a>
                    </li>`
    });
    return `
        <nav class="nav container">
            <a href="index.html" class="nav__logo">
                <i class='bx bxs-shopping-bag-alt nav__logo-icon'></i> E-shopper
            </a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    ${liItems}
                </ul>
                <div class="nav__close" id="nav-close">
                    <i class="bx bx-x"></i>
                </div>
            </div>

            <div class="nav__btns">
                <div class="login__toggle" id="login-button">
                    <i class='bx bx-user'></i>
                </div>

                <div class="nav__shop" id="cart-shop">
                    <i class='bx bx-shopping-bag'></i>
                </div>
                <div class="nav__toggle" id="nav-toggle">
                    <i class="bx bx-grid-alt"></i>
                </div>
            </div>
        </nav>
    `;
}

export default renderHeader;
