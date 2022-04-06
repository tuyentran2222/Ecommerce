const renderCart = (cart) => {
    return `
        <i class='bx bx-x cart__close' id="cart__close"></i>
        <h2 class="cart__title-center">My Cart</h2>
        <div class="cart__container">
            ${cart.map(product => {
                return `
                <article class="cart__card">
                    <div class="cart__box">
                        <img src="${product.src}" alt="" class="cart__img">
                    </div>

                    <div class="cart__details">
                        <h3 class="cart__title">${product.title}</h3>
                        <span class="cart__price">$${product.price}</span>
                        <div class="cart__amount">
                            <div class="cart__amount-content">
                                <span class="cart__amount-box">
                                    <i class='bx bx-minus' ></i>
                                </span>
                                <span class="cart__amount-number">${product.count}</span>
                                <span class="cart__amount-box">
                                    <i class='bx bx-plus' ></i>
                                </span>
                                <i class='bx bxs-trash box__amount-trash'></i>
                            </div>
                        </div>
                    </div>
                </article>
                `
            }).join('')};
        </div>

        <div class="cart__prices">
            <span class="cart__prices-item">
                3 items
            </span>
            <span class="cart__prices-total">
                28$
            </span>
    </div>
    `;
};
export default renderCart;