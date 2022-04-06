const renderLogin = () => {
    return`
        <i class='bx bx-x login__close' id="login-close"></i>
        <h2 class="login__title-center">Login</h2>
        <form action="" class="login__form grid">
            <div class="login__content">
                <label for="" class="login__label">Email</label>
                <input type="email" name="email" id="email" class="login__input">
            </div>
            <div class="login__content">
                <label for="" class="login__label">Password</label>
                <input type="password" name="password" id="password" class="login__input">
            </div>

            <div>
                <a href="#" class="button" id="login-button">Sign in</a>
            </div>

            <div>
                <p class="signup">Not a member? <a href="registration.html">Sign up now</a> </p>
            </div>
        </form>
    `;
}

export default renderLogin;