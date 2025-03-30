import{onMounted,nextTick}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";export default{setup(){return onMounted(()=>{function a(e){e.preventDefault();e=e.target.getAttribute("href"),e=document.querySelector(e).offsetTop;window.scroll({top:e-60,behavior:"smooth"})}document.querySelectorAll(".sidenav a[href^='#']").forEach(e=>{e.addEventListener("click",a)}),nextTick(()=>{var e=document.querySelectorAll(".sidenav");M.Sidenav.init(e,{})})}),{}},template:`

  <ul id="slide-out" class="sidenav">
    <li class="mb-24">
      <div class="user-view">
        <img src="src/img/logo-sesi-vida.webp" alt="logo-sesi-vida" style="max-width: 120px;"/>
        <p class=" blue-deep-text">Segurança e saúde no trabalho</p>
        <h2 class="sidenav__specific-title">
        A importância da NR 7 para a saúde e segurança do trabalhador
        </h2>
        <div class="progress-box">
          <div class="progress">
            <div class="determinate"></div>
          </div> 
          <h3>
            <span class="progress-box__number">1%</span> concluído
          </h3>
        </div>
      </div>
    </li>

    <li>
      <a href="#hero">01: Início</a>
    </li>
    <li>
      <a href="#introducao">02: Introdução</a>
    </li>
    <li>
      <a href="#nr7">03: O que é a NR7?</a>
    </li>
    <li>
      <a href="#evolucao">04: Evolução da NR7</a>
    </li>
    <li>
      <a href="#PCMSO">05: PCMSO & gestão	de saúde</a>
    </li>
    <li>
      <a href="#controle">06: Controle médico</a>
    </li>
    <li>
      <a href="#atestado">07: Atestado de saúde ocupacional</a>
    </li>
    <li>
      <a href="#concluir">08: Conclusão</a>
    </li>
  </ul>
  `};