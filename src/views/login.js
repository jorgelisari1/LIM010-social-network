export const loginPage = `
  <figure>
      <img class="main-img" src="src/img/poetik-logo.png" alt="Poetik">
  </figure>
  <div class="flex-column flex">
    <h1> poetik </h1>

        <span id="error"></span>
      
    <form class="margin">
      
      <input class="inputs block" type="email" id="email" autocomplete="email" placeholder="Email" />
      <input class="inputs block" autocomplete="" type="password" id="password" placeholder="Password" />
      <div>
        <input type="submit" value="Log in" class="font-size buttons block color2 text-color" id="button-login" >
      </div>
      <span class="margin text-color">O bien ingresa con...</span>
      <div class="login-icons">        
        <a id="fb" href= "#/home"><img class="social-media-img" src='/src/img/fb.svg'></img></a>
        <a id="google" href= "#/home"><img class="social-media-img" src='/src/img/google.svg'></img></a>
      </div>
      <div class="">
        <p class="">¿No tienes una cuenta? 
          <a class="" href="#/register" id="registrate">Registrate</a>
        </p>
      </div>
    </form>
  </div>
`;
