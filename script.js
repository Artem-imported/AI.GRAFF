function redirectToMainSite() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
  }
  
  
  function showHome() {
    document.getElementById('content').innerHTML = `
    <div class="container-home-2">
  
  <div class="button-container">
    <button class="custom-button btn-light" onclick="openTab(event, 'basics')"><span>Основна</span></button>
    <button class="custom-button btn-light" onclick="openTab(event, 'period1')"><span>1920-1950</span></button>
    <button class="custom-button btn-light" onclick="openTab(event, 'period2')"><span>1950-1980</span></button>
    <button class="custom-button btn-light" onclick="openTab(event, 'period3')"><span>1980-2000</span></button>
    <button class="custom-button btn-light" onclick="openTab(event, 'period4')"><span>2000-2024</span></button>
  </div>
  
  <section id="basics" class="content active">
    <h2 class="title">Основи вуличного мистецтва</h2>
      <div class="section-content">
        <p>Вітаємо на сторінці, де ви зможете дізнатися про основи вуличного мистецтва. Тут ми розглянемо, що таке вуличне мистецтво, його види, історію та вплив на сучасність.</p>
        <p>Вуличне мистецтво – це форма мистецтва, яка виникла в публічних просторах, таких як вулиці, майданчики, стіни будівель тощо. Воно включає в себе різноманітні форми виразу, такі як графіті, муралі, скульптури, інсталяції, стріт-арт тощо.</p>
        <p>Тут ви дізнаєтеся про:</p>
        <ul>
          <li><a class="li1-a" href="#streetart" onclick="showStreetArt('StreetArt')">Види вуличного мистецтва</a>.</li>
          <li>Історію розвитку вуличного мистецтва</li>
          <li>Техніки та матеріали, які використовуються у вуличному мистецтві</li>
          <li>Вплив вуличного мистецтва на культуру та суспільство</li>
        </ul>
      </div>
      <div id="main-info" class="section-content">
        <h2 class="section-title">Основна інформація</h2>
        <p>Тут основна інформація про вуличне мистецтво.</p>
      </div>
    </section>
  
  <section id="period1" class="content">
  <h2>Графіті в 1920-1950 роках</h2>
  <p>Графіті періоду з 1920 по 1950 роки може бути представлене різноманітними стилями та темами:</p>
  <div class="home-period1-div"></div>
  <ul class="home-period1-ul">
      <li>Політичне графіті, яке часто використовувалося для вираження протесту або підтримки політичних рухів того часу.</li>
      <li>Соціальне графіті, яке відображало питання соціальної справедливості, нерівності та інших соціальних проблем.</li>
      <li>Культурне графіті, яке може бути пов'язане з мистецтвом, музикою, літературою та іншими аспектами культури того періоду.</li>
      <li>Експериментальне графіті, яке відображало новаторські та експериментальні підходи до мистецтва та вираження ідей.</li>
  </ul>
    </section>
  
  <section id="period2" class="content">
  <h2>Графіті в 1950-1980 роках</h2>
  <div class="home-period2-div">
  
  </div>
  <p class="home-period2-p">У період з 1950 по 1980 рік графіті набуло популярності як форма вуличного мистецтва, особливо в містах США. Цей період відзначається появою перших графіті-тегів, які часто були асоційовані з підлітковими бандами та маргінальними групами. Водночас, графіті також ставали важливим каналом самовираження для молоді, особливо з бідних районів.</p>
  <p class="home-period2-p">У цей період графіті в основному складалося з простих написів та тегів, які були зроблені фарбою або маркерами на стінах будівель, поєднаних із символами та абстрактними малюнками. Часто графіті містили політичні, соціальні або культурні послання, відображаючи проблеми того часу.</p>
  <p class="home-period2-p">Також у цей період з'явилися перші графіті-художники, які розвивали графіті як мистецьку форму, а не лише як засіб самовираження. Вони почали використовувати більш складні техніки та створювати більш естетично приємні роботи, що стали популярні серед молоді та шанувальників мистецтва.</p>
  
  </section>
  
  <section id="period3" class="content">
  <h2>Графіті в 1980-2000 роках</h2>
  <p>В період з 1980 по 2000 роки графіті стало не лише формою вуличного мистецтва, а й важливим елементом субкультурної та молодіжної культури. У цей період графіті отримало широкий розповсюдження у багатьох містах світу, стаючи символом протесту, самовираження та індивідуальності.</p>
  <p>Відзначилися такі художники як Banksy, який здобув визнання за свої соціально-політичні та гумористичні графіті. Також в цей період почали виникати нові стилі та техніки графіті, такі як теги, бомбінг, стенсілі та інші.</p>
  <p>Графіті стало складовою частиною глобальної культури, впливаючи на музику, моду, медіа та інші сфери суспільства.</p>
  </section>
  
  <section id="period4" class="content">
  <h2>Графіті та нейромережі (2000-2024)</h2>
  <div class="home-period4-div"></div>
  <p class="home-period4-p">Протягом періоду з 2000 по 2024 рік графіті продовжували залишати свій слід у містах по всьому світу. Це форма вуличного мистецтва, що здатна відображати соціальні, культурні та політичні тенденції епохи.</p>
  <p class="home-period4-p">У той же час, з появою нейромереж та штучного інтелекту в другій половині 20-го століття, виникли нові можливості для створення мистецтва. Нейромережі здатні генерувати унікальні зображення на основі аналізу великих обсягів даних.</p>
  <p class="home-period4-p">Протягом цього періоду вуличні художники та технології штучного інтелекту почали взаємодіяти, використовуючи нейромережі для створення унікальних графіті та муралів, що поєднують традиційні методи з сучасними технологіями.</p>
  
  </section>
    </div>`;
  }
  
  function showArtists() {
    document.getElementById('content').innerHTML = `
  <h1>Художники</h1>
  
  <div class="custom-tab-links-container">
    <span class="custom-tab-link active" onclick="openCustomTab(event, 'custom-artist1')">Художник 1</span>
    <span class="custom-tab-link" onclick="openCustomTab(event, 'custom-artist2')">Художник 2</span>
    <span class="custom-tab-link" onclick="openCustomTab(event, 'custom-artist3')">Художник 3</span>
  </div>
  
  <div id="custom-artist1" class="custom-tab active">
    <h2>Художник 1</h2>
    <p>Тут буде опис Художник 1.</p>
  </div>
  
  <div id="custom-artist2" class="custom-tab">
    <h2>Художник 2</h2>
    <p>Тут буде опис Художник 2.</p>
  </div>
  
  <div id="custom-artist3" class="custom-tab">
    <h2>Художник 3</h2>
    <p>Тут буде опис Художник 3.</p>
  </div>
    `;
  }
  
  function showStreetArt() {
    document.getElementById('content').innerHTML = `
      <h2>Мистецтво на вулиці</h2>
      <div class="список-вкладок">
          <div class="вкладка активна" onclick="відкритиВкладку(event, 'вкладка1')">Графіті</div>
          <div class="вкладка" onclick="відкритиВкладку(event, 'вкладка2')">Муралі</div>
          <div class="вкладка" onclick="відкритиВкладку(event, 'вкладка3')">Інсталяції</div>
      </div>
  
      <div id="вкладка1" class="зміст активний">
          <h2>Графіті</h2>
          <p>Графіті - це форма вуличного мистецтва, що використовує фарби або спреї для створення зображень та написів на стінах.</p>
      </div>
  
      <div id="вкладка2" class="зміст">
          <h2>Муралі</h2>
          <p>Муралі - це великі картини або фрески, які наносять на стіни будівель чи спеціально призначені поверхні.</p>
      </div>
  
      <div id="вкладка3" class="зміст">
          <h2>Інсталяції</h2>
          <p>Інсталяції - це мистецькі об'єкти, створені для конкретного простору та сприйняття глядача.</p>
      </div>
    `;
  }
  
  function showGalery() {
    document.getElementById('content').innerHTML = `
      <h2>Галерея</h2>
      <p>Тут буде інформація про картини художників вуличного мистецтва.</p>
      <!-- Ваш вміст для розділу "Художники" -->
    `;
  }
  
  function showContacts() {
    document.getElementById('content').innerHTML = `
      <h2>О нас</h2>
      <p>Тут буде інформація про нашу творчість.</p>
    `;
  }
  
  function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    
    tabContent = document.getElementsByClassName("tab");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  function openCustomTab(evt, tabName) {
    let i, content, buttons;
    content = document.getElementsByClassName("custom-tab");
    for (i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
    }
    buttons = document.getElementsByClassName("custom-tab-link");
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  
  function відкритиВкладку(evt, назваВкладки) {
    let i, зміст, вкладкаСписок;
    зміст = document.getElementsByClassName("зміст");
    for (i = 0; i < зміст.length; i++) {
        зміст[i].classList.remove("активний");
    }
    вкладкаСписок = document.getElementsByClassName("вкладка");
    for (i = 0; i < вкладкаСписок.length; i++) {
        вкладкаСписок[i].classList.remove("активна");
    }
    document.getElementById(назваВкладки).classList.add("активний");
    evt.currentTarget.classList.add("активна");
  }
  
          function openTab(evt, tabName) {
            let i, content, buttons;
            content = document.getElementsByClassName("content");
            for (i = 0; i < content.length; i++) {
                content[i].classList.remove("active");
            }
            buttons = document.getElementsByClassName("custom-button");
            for (i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active-button");
            }
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active-button");
        }