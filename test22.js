


// alert('loaded');

const loadScript = src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = resolve
    script.onerror = reject
    script.src = src
    document.head.append(script)
  })
};


loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
  .then(() => {

$( document ).ready(function() {
    alert( "ready!" );

    if ($('.sidekick-modal-background')[0] != null){
      return 0; //dont reload twice
    }

    if ($('.header__icon-list__item--login')[0] != null || $('.header__login-signup')[0] != null){
      url = window.location.href.split('/');
      window.location.href = 'https://'+url[2]+'/login';
    }

    let body = null;
    let gumroadLicenseDiv  = null;
    let licenseKeyInput = null;
    let submitButton = null;
    let sliderSwitch = null;
    let followersButton  = null;
    let partyButton = null;
    let defaultSortButton = null;
    let reverseSortButton = null;
    let zoom1Out = null;
    let zoom2Out = null;
    let zoom3Out = null;
    let zoom4Out = null;
    let modalVis = false;

    localStorage.setItem('PSKzoomSetting','tile col-x12 col-l4 col-s8 p--2');


    var divFloatingButton = document.createElement("div");
    // divFloatingButton.setAttribute("id", "fixed");
    divFloatingButton.innerHTML = '<button id="pskButton" class="fixed">PSK</button>'
    document.body.appendChild(divFloatingButton);

    document.head.insertAdjacentHTML('beforeend', '<style>.fixed{position:fixed;margin:0;right:25px;bottom:25px;width:60px;height:60px;text-align:center;line-height:60px;border-radius:50%;background-color:#822432;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.26),0 2px 10px 0 rgba(0,0,0,.22)};</style>');




    // if ($('.header__account-info-list')[0] != null){

    //   localStorage.setItem('PSKdeviceType','iPad')

    // }

    if ($('.desktop-grid-filter')[0] != null){

      localStorage.setItem('PSKdeviceType','iPad');
    }

    else{

      localStorage.setItem('PSKdeviceType','iPhone');
    }



    // if ($('.header__account-info-list')[0] != null){

    //   var newli = document.createElement("li");
    //   newli.className = 'ps--r header__account-info-list__item';
    //   newli.innerHTML = '<button id="pskButton" class="header__account-info__link">PSK</button>';
    //   document.getElementsByClassName('header__account-info-list')[0].appendChild(newli);

    // }
    // else{

    //   document.getElementsByClassName('sell header__icon-list__item')[0].remove();
    //   var newli = document.createElement("li");
    //   newli.className = 'header__icon-list__item';
    //   newli.innerHTML = '<span><button id="pskButton" class="btn btn-light">PSK</button></span>';
    //   document.getElementsByClassName('header__icon-list')[0].appendChild(newli);

    // };


    var divg = document.createElement("div");
    divg.innerHTML = '<div class="sidekick-modal-background">    <div class="sidekick-modal-body"><div id="header"> <div id="t1">Poshmark Sidekick</div></br> <div id="error_message" style="display:none; color: red; text-align: center;"></div></br> </div><div id="gumroadLicense" style="align-items: center;"> <textarea style="width=100%;" id="licenseKeyInput" name="licenseKeyInput" value="" rows="3" cols="20" placeholder="Paste License Key Here" wrap="soft"></textarea> <br><button id="licenseSubmitButton">Activate</button></br></br> <div id="freeLicense" class="link-2"> <a href="https://gumroad.com/l/psktool/trial?wanted=true" target="_blank"> <span class="thin">Free </span><span class="thick">License</span> </a> <p>One Use | 7 Day Trial</p></div><div class="link-2"> <a href="https://gum.co/psktool" target="_blank"> <span class="thin">Full </span><span class="thick">License</span> </a> <p>Monthly</p></div></div><div id="body"> <div class="grid-container"> <div class="power_label">ON|OFF</div><div class="power_settings"> <label class="switch"> <input id="sliderSwitch" type="checkbox"> <span class="slider rounded"></span> </label> </div><div class="sharing_settings"> <div class="switch-field"> <input type="radio" id="followers" name="switch-one" value="followers" checked/> <label for="followers">Followers</label> <input type="radio" id="party" name="switch-one" value="party"/> <label for="party">Party</label> </div></div> <div class="zoom_settings"> <div class="switch-field"> <input type="radio" id="zoom1Out" name="switch-two" value="zoom1Out" checked/> <label for="zoom1Out">1X</label> <input type="radio" id="zoom2Out" name="switch-two" value="zoom2Out"/> <label for="zoom2Out">2X</label> <input type="radio" id="zoom3Out" name="switch-two" value="zoom3Out"/> <label for="zoom3Out">3X</label> <input type="radio" id="zoom4Out" name="switch-two" value="zoom4Out"/> <label for="zoom4Out">4X</label> </div></div> <div class="sort_settings"> <div class="switch-field"> <input type="radio" id="defaultSort" name="switch-three" value="defaultSort" checked/> <label for="defaultSort">Default Sort</label> <input type="radio" id="reverseSort" name="switch-three" value="reverseSort"/> <label for="reverseSort">Reverse Sort</label> </div></div>  </div></div></br></div></div>';
    document.body.appendChild(divg);

    document.head.insertAdjacentHTML('beforeend', '<style> @import url(https://fonts.googleapis.com/css?family=Lato:100,300,900); .sidekick-modal-body .thin{font-weight:300}.sidekick-modal-body .thick{font-weight:900}.sidekick-modal-body a{text-transform:uppercase;font-size:30px;color:#000;text-decoration:none;position:relative;display:block}[class^=link-]{display:inline-block;margin:2em}.sidekick-modal-body .link-2 a:hover{color:#822432}.sidekick-modal-body .link-2 a:before{content:"";border-bottom:solid 1px #822432;position:absolute;bottom:0;left:0;width:100%;opacity:0}.sidekick-modal-body .link-2 a:hover:before{opacity:1}.link-2 a:before,.sidekick-modal-body .link-2 a{-webkit-transition:all .2s ease;transition:all .2s ease}.sidekick-modal-body .switch-field{display:flex;overflow:hidden;justify-content:center}.sidekick-modal-body .switch-field input{position:absolute!important;clip:rect(0,0,0,0);height:1px;width:1px;border:0;overflow:hidden}.sidekick-modal-body .closeButton {width:100%;} .sidekick-modal-body .switch-field label{background-color:#e4e4e4;color:rgba(0,0,0,.6);font-size:14px;line-height:1;text-align:center;padding:8px 16px;margin-right:-1px;border:1px solid rgba(0,0,0,.2);box-shadow:inset 0 1px 3px rgba(0,0,0,.3),0 1px rgba(255,255,255,.1);transition:all .1s ease-in-out}.sidekick-modal-body .switch-field label:hover{cursor:pointer}.sidekick-modal-body .switch-field input:checked+label{background-color:#a5dc86;box-shadow:none}.sidekick-modal-body .switch-field label:first-of-type{border-radius:4px 0 0 4px}.sidekick-modal-body .switch-field label:last-of-type{border-radius:0 4px 4px 0}.sidekick-modal-body .form{max-width:600px;font-family:Roboto font-weight: normal;line-height:1.625;margin:8px auto;padding:16px}.sidekick-modal-body h2{font-size:18px;margin-bottom:8px}.sidekick-modal-body .grid-container{display:grid;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:0 0;grid-template-areas:"power_label power_settings" "sharing_settings sharing_settings" "zoom_settings zoom_settings" "sort_settings sort_settings"}.sidekick-modal-body .power_label{margin-right:5px;grid-area:power_label;text-align:center}.sidekick-modal-body .sharing_label{grid-area:sharing_label}.sidekick-modal-body .zoom_label{grid-area:zoom_label} .sidekick-modal-body .sort_label{grid-area:sort_label} .sidekick-modal-body .power_settings{grid-area:power_settings}.sidekick-modal-body .sharing_settings{grid-area:sharing_settings;margin-top:10px}.sidekick-modal-body .zoom_settings{grid-area:zoom_settings;margin-top:10px} .sort_settings{grid-area:sort_settings;margin-top:10px} .sidekick-modal-body .switch{position:relative;display:inline-block;width:60px;height:34px}.sidekick-modal-body .switch input{opacity:0;width:0;height:0}.sidekick-modal-body .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#424242;-webkit-transition:.4s;transition:.4s}.sidekick-modal-body .slider:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}.sidekick-modal-body input:checked+.slider{background-color:#28a745}.sidekick-modal-body input:focus+.slider{box-shadow:0 0 1px #28a745}.sidekick-modal-body input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.sidekick-modal-body .slider.rounded{border-radius:34px}.sidekick-modal-body .slider.rounded:before{border-radius:50%}@font-face{font-family:Roboto;font-style:normal;font-weight:700;src:local("Roboto"),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format("woff")}.sidekick-modal-body button{background-color:#822432;align-self:center;height:30px;width:150px;outline:0;border-radius:5px;border-width:0;color:#fff;margin-top:8px}.sidekick-modal-body button:hover{background:#135823}.sidekick-modal-body button:active{background:#135823}.sidekick-modal-body body{margin:0;font-family:Roboto;color:gray;width:200px;padding:10px}.sidekick-modal-body .h2{text-align:center}.sidekick-modal-body #t1{font-family:Roboto;letter-spacing:.1em;color:#fff;font-size:1em;text-align:center;background-color:#822432;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.35);box-shadow:0 2px 10px rgba(0,0,0,.35);z-index:2;height:100%;padding:5px}.sidekick-modal-body #header{vertical-align:top;color:#000;display:block;font-weight:700;margin:0;width:100%}.sidekick-modal-body #body{display:none;font-family:Roboto;padding:20px;text-align:center;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center;color:#822432;font-size:1.5em}.sidekick-modal-body #gumroadLicense{display:none;text-align:-webkit-center} .sidekick-modal-background {    position: fixed;  z-index: 999;  left: 0;    top: 0;    right: 0;    bottom: 0;    background: rgba(0, 0, 0, 0.75);    display: none; }.sidekick-modal-body {   position:relative;    top: 50%;    left: 50%;    -ms-transform: translate(-50%, -50%);    -webkit-transform: translate(-50%, -50%);    transform: translate(-50%, -50%);    z-index: 1000;    width: 80%;    max-width: 80%;    background: #fcfbfb;    border-radius: 2px;    -webkit-box-shadow: 0 4px 32px 8px rgba(0,0,0,0.2);    box-shadow: 0 4px 32px 8px rgba(0,0,0,0.2);    outline: none;    -webkit-transition: all 0.2s ease;    -o-transition: all 0.2s ease;    transition: all 0.2s ease;}</style>');


    $('#closeButton').click(function() {

      $('.sidekick-modal-background').fadeOut().find('.sidekick-modal-body').slideUp();
    });

    $('#pskButton').click(function() {


      if (!$('.sidekick-modal-background').is(':visible')){
          $('.sidekick-modal-background').fadeIn().find('.sidekick-modal-body').slideDown({
    complete: function(){

      modalVis = true;

    }
});


          // $('.sidekick-modal-background').click(function() {
          //   $('.sidekick-modal-background').fadeOut().find('.sidekick-modal-body').slideUp();
          // });






      }
      else{
        $('.sidekick-modal-background').fadeOut().find('.sidekick-modal-body').slideUp();
      }

    });


              $(document).click(function(event) {
            //if you click on anything except the modal itself or the "open modal" link, close the modal
                if ($('.sidekick-modal-body').is(':visible') && modalVis){

            if (!$(event.target).closest(".sidekick-modal-body").length) {
                  $('.sidekick-modal-background').fadeOut().find('.sidekick-modal-body').slideUp();
                  modalVis = false;
            }
          }
          });






    doSetup();






});
    


  })
  .catch((err) => alert(err))




function doSetup(){

  try {
    if (onLicenseValidation("false")) {
      init();
    }
  } catch (err) {
  }


'use strict';
body = document.getElementById('body');
gumroadLicenseDiv = document.getElementById('gumroadLicense');
licenseKeyInput = document.getElementById('licenseKeyInput');
submitButton = document.getElementById('licenseSubmitButton')
sliderSwitch = document.getElementById('sliderSwitch');
followersButton = document.getElementById('followers');
partyButton = document.getElementById('party');
defaultSortButton = document.getElementById('defaultSort');
reverseSortButton = document.getElementById('reverseSort');



zoom1Out = document.getElementById('zoom1Out');
zoom2Out = document.getElementById('zoom2Out');
zoom3Out = document.getElementById('zoom3Out');
zoom4Out = document.getElementById('zoom4Out');


var lastClicked = null;
var captchaState = null;


submitButton.hidden = true;

$(licenseKeyInput).on("input", function() {
  $(licenseKeyInput).text($(this).val());
  licenseKeyInput.value = licenseKeyInput.value.toUpperCase().trim().replace(' ', '');

  const regex = RegExp('^(?=[A-Z0-9]).{8}-(?=[A-Z0-9]).{8}-(?=[A-Z0-9]).{8}-(?=[A-Z0-9]).{8}$');
  var lic = licenseKeyInput.value;

  if (regex.test(lic)) {
    submitButton.hidden = false;
    document.getElementById('error_message').innerText = '';
    alert('key is valid!! in text field.');

  } else {
    document.getElementById('error_message').innerText = 'License key must be XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX format. Activate button will appear when this is correct.';
    submitButton.hidden = true;
  }

});


submitButton.onclick = function() {
  gumroadKeyGetCount(licenseKeyInput.value, 'false');
};


followersButton.onclick = function() {
  installCSS();
}


partyButton.onclick = function() {
  installCSS();
}


reverseSortButton.onclick = function() {
  installCSS();
}

defaultSortButton.onclick = function() {
  installCSS();
}

zoom1Out.onclick = function() {
  zoomOutSettings('1');
}
zoom2Out.onclick = function() {
  zoomOutSettings('2');
}
zoom3Out.onclick = function() {
  zoomOutSettings('3');
}
zoom4Out.onclick = function() {
  zoomOutSettings('4');
}




try {

  sliderSwitch.onclick = function() {

    if (sliderSwitch.checked) {

      // chrome.browserAction.setIcon({
      //   path: './images/green.png'
      // });

    } else {
      // chrome.browserAction.setIcon({
      //   path: './images/off.png'
      // });

      window.location.reload();

      // chrome.tabs.getSelected(null, function(tab) {
      //   var code = 'window.location.reload();';
      //   chrome.tabs.executeScript(tab.id, {
      //     code: code
      //   });
      // });


    }

    turnOn(false);
  };
} catch (err) {}



};


function zoomOutSettings(zoomSetting) {

  if (zoomSetting == '1'){
    localStorage.setItem('PSKzoomSetting','tile col-x12 col-l4 col-s8 p--2');
    localStorage.setItem('PSKzoomSettingStored','1');



  }
  else if (zoomSetting == '2'){
    localStorage.setItem('PSKzoomSetting','tile col-x10 col-l3 col-s6 p--2');
    localStorage.setItem('PSKzoomSettingStored','2');

    
  }
  else if (zoomSetting == '3'){
    localStorage.setItem('PSKzoomSetting','tile col-x8 col-l2 col-s4 p--2');
    localStorage.setItem('PSKzoomSettingStored','3');

    
  }
  else if (zoomSetting == '4'){
    localStorage.setItem('PSKzoomSetting','tile col-x6 col-l2 col-s3 p--2'); 
    localStorage.setItem('PSKzoomSettingStored','4');


  }
}



function getTimeDiff(timeStamp) {
  var now = new Date();
  var utc = new Date(now.getTime() + now.getTimezoneOffset());
  var utcTime = Date.parse(utc.toISOString());
  var timeDiff = utcTime - Date.parse(timeStamp);
  alert(timeDiff);
  return timeDiff;
}

function onLicenseValidation(increment) {
  var licensekey = localStorage.getItem('licensekey');
    var currentLicense = licensekey;
    alert(currentLicense);
    gumroadKeyVerify(currentLicense, increment);
}


function installCSS() {
  var running = localStorage.getItem('running');



    var PSKdeviceType = localStorage.getItem('PSKdeviceType');


    if (running == "true") {


      if (document.getElementById("reverseSort").checked == true && $('#reverseCSS')[0] == null) {
        var sortsettings = localStorage.setItem('sortsettings', "reversesort");
        document.head.insertAdjacentHTML('beforeend', '<style id="reverseCSS">.m--t--1 { display: flex; justify-content: flex-end; flex-direction: row-reverse; flex-wrap: wrap-reverse;}</style>');
      }

      else{
        var sortsettings = localStorage.setItem('sortsettings', "defaultsort");
        $('#reverseCSS').remove();
      }



      if (document.getElementById("followers").checked == true && $('#followersnewCSS')[0] == null) {

        var sharesettings = localStorage.setItem('sharesettings', "followers");

        $('#partynewCSS').remove();


        if (PSKdeviceType == 'iPhone'){


            document.head.insertAdjacentHTML('beforeend', '<style id="followersnewCSS">.internal-share{border-bottom: 1px solid #e6e2df; padding: 0;}.share-wrapper-container{width: 100%; height: 50em;}.internal-share{width: 100%;}li.internal-share div:hover{box-shadow: inset 0 0 500px #351017;}.internal-share-protip{display: none;}}.modal{position: fixed; top: 0; left: 0; -ms-transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); z-index: 99; width: 100%; max-width: 100%; background: #fcfbfb; border-radius: 2px; -webkit-box-shadow: 0 4px 32px 8px rgba(0,0,0,0.2); box-shadow: 0 4px 32px 8px rgba(0,0,0,0.2); outline: none; -webkit-transition: all 0.2s ease; -o-transition: all 0.2s ease; transition: all 0.2s ease;}.share-wrapper-container{display: -webkit-box; display: -ms-flexbox; display: flex; -ms-flex-align: center; -webkit-box-align: center; align-items: start; background: #682934; height: 2436px; width:100%; z-index: 10; margin-top: 0px; border-radius: 25px;}.modal-backdrop--top{z-index: 9;}.tile__social-actions{background-color: #fcfbfb;}ul.internal-shares{width: 100%; margin-left: 0%;} span.share-wrapper__share-title.caption{color: #ffffff; font-size: 24px; margin-top: 16px;}.internal-share-protip{width:0px}.party-info__share-wrapper__share-title.caption{color: #ffffff; font-size: 24px; margin-top: 16px;}.party-info__share-wrapper__share-title.caption{color: #ffffff; font-size: 24px; margin-top: 16px;}.share-wrapper__party-name.ellipses.caption{color: #ffffff; font-size: 16px; margin-top: 16px;}.share-wrapper__icon-container{width: 48px; height: 48px; border-radius: 50%; background: #822432; padding: 13px; margin: 16px;}#hud__backdrop{background-color: rgba(42,42,42,0.45); width: 100%; height: 100%; top: 0; left: 0; z-index: 0; display: none;}external-share-container{display: none;} .share_poshmark_poshparty{display: none;}.share_poshmark{display: block;}ul.internal-shares li:nth-child(2){display: none;}.modal--action-sheet{top:0 ;}.direct-share-users{display: none;} .external-share-container{display: none;}</style>');
      }
      else if (PSKdeviceType == 'iPad'){
          document.head.insertAdjacentHTML('beforeend', '<style id="followersnewCSS">.internal-share{border-bottom:1px solid #e6e2df;padding:0}.share-wrapper-container{width:100%;height:50em}.internal-share{width:100%}li.internal-share div:hover{box-shadow:inset 0 0 500px #351017}.internal-share-protip{display:none}.share-wrapper-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:start;background:#682934;height:1000px;width:100%;z-index:10;margin-top:0;border-radius:25px}.modal-backdrop--top{z-index:9}.tile__social-actions{background-color:#fcfbfb}ul.internal-shares{width:100%;margin-left:0}.modal{position:fixed;top:50%;left:50%;-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1050;width:100%;height:100%;background:#fcfbfb;border-radius:2px;-webkit-box-shadow:0 4px 32px 8px rgba(0,0,0,.2);box-shadow:0 4px 32px 8px rgba(0,0,0,.2);outline:0;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease}span.share-wrapper__share-title.caption{color:#fff;font-size:24px;margin-top:16px}.internal-share-protip{width:0}.party-info__share-wrapper__share-title.caption{color:#fff;font-size:24px;margin-top:16px}.party-info__share-wrapper__share-title.caption{color:#fff;font-size:24px;margin-top:16px}.share-wrapper__party-name.ellipses.caption{color:#fff;font-size:16px;margin-top:16px}.share-wrapper__icon-container{width:48px;height:48px;border-radius:50%;background:#822432;padding:13px;margin:16px}#hud__backdrop{background-color:rgba(42,42,42,.45);width:100%;height:100%;top:0;left:0;z-index:0;display:none}external-share-container{display:none}.share_poshmark_poshparty{display:none}.share_poshmark{display:block}ul.internal-shares li:nth-child(2){display:none}</style>');
      }





        




        // chrome.tabs.query({
        //   active: true,
        //   currentWindow: true
        // }, function(tabs) {
        //   chrome.tabs.executeScript(
        //     tabs[0].id, {
        //       code: 'if (document.getElementById("partynewCSS") != undefined) {document.getElementById("partynewCSS").remove();}'
        //     });

        //   chrome.tabs.executeScript(
        //     tabs[0].id, {
        //       code: 'if (document.getElementById("followersnewCSS")== undefined) { var link = document.createElement("link"); link.id="followersnewCSS"; link.href=chrome.extension.getURL("Poshmark_followers.css"); link.type = "text/css"; link.rel = "stylesheet";document.getElementsByTagName("body")[0].appendChild(link);}'
        //     });


        //   chrome.tabs.executeScript(
        //     tabs[0].id, {
        //       code: 'if (document.getElementById("newCSS")== undefined) { var link = document.createElement("link"); link.id="newCSS"; link.href=chrome.extension.getURL("Poshmark.css"); link.type = "text/css"; link.rel = "stylesheet";document.getElementsByTagName("body")[0].appendChild(link);}'
        //     });


      } else if (document.getElementById("party").checked == true && $('#partynewCSS')[0] == null) {

        var sharesettings = localStorage.setItem('sharesettings', "party");



        $('#followersnewCSS').remove();


        if (PSKdeviceType == 'iPhone'){

            document.head.insertAdjacentHTML('beforeend', '<style id="partynewCSS">.internal-share{border-bottom: 1px solid #e6e2df; padding: 0;}.share-wrapper-container{width: 100%; height: 50em;}.internal-share{width: 100%;}li.internal-share div:hover{box-shadow: inset 0 0 500px #351017;}.internal-share-protip{display: none;}}.modal{position: fixed; top: 0; left: 0; -ms-transform: translate(-50%, -50%); -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); z-index: 99; width: 100%; max-width: 100%; background: #fcfbfb; border-radius: 2px; -webkit-box-shadow: 0 4px 32px 8px rgba(0,0,0,0.2); box-shadow: 0 4px 32px 8px rgba(0,0,0,0.2); outline: none; -webkit-transition: all 0.2s ease; -o-transition: all 0.2s ease; transition: all 0.2s ease;}.share-wrapper-container{display: -webkit-box; display: -ms-flexbox; display: flex; -ms-flex-align: center; -webkit-box-align: center; align-items: start; background: #682934; height: 2436px; width:100%; z-index: 10; margin-top: 0px; border-radius: 25px;}.modal-backdrop--top{z-index: 9;}.tile__social-actions{background-color: #fcfbfb;}ul.internal-shares{width: 100%; margin-left: 0%;} span.share-wrapper__share-title.caption{color: #ffffff; font-size: 24px; margin-top: 16px;}.internal-share-protip{width:0px}.party-info__share-wrapper__share-title.caption{color: #ffffff; font-size: 24px; margin-top: 16px;}.party-info__share-wrapper__share-title.caption{color: #ffffff; font-size: 24px; margin-top: 16px;}.share-wrapper__party-name.ellipses.caption{color: #ffffff; font-size: 16px; margin-top: 16px;}.share-wrapper__icon-container{width: 48px; height: 48px; border-radius: 50%; background: #822432; padding: 13px; margin: 16px;}#hud__backdrop{background-color: rgba(42,42,42,0.45); width: 100%; height: 100%; top: 0; left: 0; z-index: 0; display: none;}external-share-container{display: none;} .share_poshmark_poshparty{display: block;}.share_poshmark{display: none;}ul.internal-shares li:nth-child(1){display: none;}.modal--action-sheet{top:0 ;}.direct-share-users{display: none;} .external-share-container{display: none;}</style>');


}
      else if (PSKdeviceType == 'iPad'){



          document.head.insertAdjacentHTML('beforeend', '<style id="partynewCSS">.internal-share{border-bottom:1px solid #e6e2df;padding:0}.share-wrapper-container{width:100%;height:50em}.internal-share{width:100%}li.internal-share div:hover{box-shadow:inset 0 0 500px #351017}.internal-share-protip{display:none}.share-wrapper-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:start;background:#682934;height:1000px;width:100%;z-index:10;margin-top:0;border-radius:25px}.modal-backdrop--top{z-index:9}.tile__social-actions{background-color:#fcfbfb}ul.internal-shares{width:100%;margin-left:0}.modal{position:fixed;top:50%;left:50%;-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1050;width:100%;height:100%;background:#fcfbfb;border-radius:2px;-webkit-box-shadow:0 4px 32px 8px rgba(0,0,0,.2);box-shadow:0 4px 32px 8px rgba(0,0,0,.2);outline:0;-webkit-transition:all .2s ease;-o-transition:all .2s ease;transition:all .2s ease}span.share-wrapper__share-title.caption{color:#fff;font-size:24px;margin-top:16px}.internal-share-protip{width:0}.party-info__share-wrapper__share-title.caption{color:#fff;font-size:24px;margin-top:16px}.party-info__share-wrapper__share-title.caption{color:#fff;font-size:24px;margin-top:16px}.share-wrapper__party-name.ellipses.caption{color:#fff;font-size:16px;margin-top:16px}.share-wrapper__icon-container{width:48px;height:48px;border-radius:50%;background:#822432;padding:13px;margin:16px}#hud__backdrop{background-color:rgba(42,42,42,.45);width:100%;height:100%;top:0;left:0;z-index:0;display:none}external-share-container{display:none}.share_poshmark_poshparty{display:block}.share_poshmark{display:none}ul.internal-shares li:nth-child(1){display:none}</style>');

      }



    





        // chrome.tabs.query({
        //   active: true,
        //   currentWindow: true
        // }, function(tabs) {
        //   chrome.tabs.executeScript(
        //     tabs[0].id, {
        //       code: 'if (document.getElementById("followersnewCSS") != undefined) {document.getElementById("followersnewCSS").remove();}'
        //     });

        //   chrome.tabs.executeScript(
        //     tabs[0].id, {
        //       code: 'if (document.getElementById("partynewCSS")== undefined) { var link = document.createElement("link"); link.id="partynewCSS"; link.href=chrome.extension.getURL("Poshmark_party.css"); link.type = "text/css"; link.rel = "stylesheet";document.getElementsByTagName("body")[0].appendChild(link);}'
        //     });



        //   chrome.tabs.executeScript(
        //     tabs[0].id, {
        //       code: 'if (document.getElementById("newCSS")== undefined) { var link = document.createElement("link"); link.id="newCSS"; link.href=chrome.extension.getURL("Poshmark.css"); link.type = "text/css"; link.rel = "stylesheet";document.getElementsByTagName("body")[0].appendChild(link);}'
        //     });


        // });

      };
    }
}

function turnOn(runnow) {

  if (sliderSwitch.checked || runnow) {


    localStorage.setItem('running', "true");

    alert(sliderSwitch.checked);
    alert('sliderSwitch is checked');


    // chrome.tabs.query({
    //   active: true,
    //   currentWindow: true
    // }, function(tabs) {

    //   chrome.tabs.executeScript(
    //     tabs[0].id,

    //     {
    //       file: 'jquery-3.5.1.min.js'
    //     });

    //   chrome.tabs.executeScript(
    //     tabs[0].id,

    //     {
    //       file: 'share.js'
    //     });
    // });

    installCSS();


loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
  .then(() => {

alert("loaded share.js");





if (jQuery) {
    var processShares = function() {
            var shareModalState = getShareModalState();
            if (shareModalState) {
                $(lastClicked.parentElement.parentElement.parentElement.parentElement).fadeOut(0);
                $(document.getElementsByClassName('share-modal')).find('.modal__close-btn')[0].addEventListener("click", function() {
                    $(lastClicked.parentElement.parentElement.parentElement.parentElement).fadeIn(0);
                });
            };
            var captchaState = getCaptchaState();
            if (captchaState) {
                $(lastClicked.parentElement.parentElement.parentElement.parentElement).fadeIn(0);
            }
            var zoom = localStorage.getItem('PSKzoomSetting');
            tiles = $(".tile");

                tiles.each(function(a) {
                  if (!tileMap.has(a) || $(this).find(".item__details")[0] != null) {
                    tileMap.set(a,'');
                    try {
                        t = this, $(t).attr("class", zoom), cardContainer = $(t).find(".card")[0], soldtag = $(cardContainer).find(".sold-tag")[0], soldouttag = $(cardContainer).find(".sold-out-tag")[0], item__details = $(t).find(".item__details")[0], tile__creator = $(t).find(".tile__creator")[0], imgContainer = $(t).find(".img__container")[0], covershot = $(t).find(".tile__covershot")[0], cardContainer.appendChild(imgContainer), covershot.remove(),
                            item__details.remove(), tile__creator.remove(), shareButton = $(t).find(".social-action-bar__share")[0], imgContainer.appendChild(shareButton), $(t).find(".tile__social-actions")[0].remove(), shareButton = $(t).find(".social-action-bar__share")[0], shareButton.firstChild.appendChild($(t).find(".img__container")[0].children[0]), soldtag && shareButton.firstChild.appendChild(soldtag), soldouttag && shareButton.firstChild.appendChild(soldouttag), $($(t).find(".share-gray-large")[0]).attr("class", "")
                    } catch (c) {}

                var b = document.querySelectorAll('[data-et-name="share"]');
                Array.from(b).forEach(function(a) {
                    a.firstElementChild.addEventListener("click",
                        lastClick)
                })

                  }
                });

        },
        lastClick = function() {
            lastClicked = this;
            //$(lastClicked.parentElement.parentElement.parentElement.parentElement).fadeOut(1);
        };
    alert("jquery is loaded");
    $(".footer-container").fadeOut(1);

    let tileMap = new Map();
    var lastClicked = null;

    job1 = setInterval(processShares, 100);


} else alert("jquery not loaded");

})
.catch(() => console.error('Something went wrong.'))





  } else { //app off

    localStorage.setItem('running', "false");

    // chrome.browserAction.setIcon({
    //   path: './images/off.png'
    // });

    // chrome.tabs.query({
    //   active: true,
    //   currentWindow: true
    // }, function(tabs) {
    //   chrome.tabs.executeScript(
    //     tabs[0].id, {
    //       code: 'if (document.getElementById("newCSS") != undefined) {document.getElementById("newCSS").remove();}'
    //     });

    //   chrome.tabs.executeScript(
    //     tabs[0].id, {
    //       code: 'if (document.getElementById("followersnewCSS") != undefined) {document.getElementById("followersnewCSS").remove();}'
    //     });

    //   chrome.tabs.executeScript(
    //     tabs[0].id, {
    //       code: 'if (document.getElementById("partynewCSS") != undefined) {document.getElementById("partynewCSS").remove();}'
    //     });
    // });
  }
};


function getCaptchaState() {
  var isCaptcha;
  var isActive;
  isCaptcha = document.getElementById("captcha-popup");

  if (isCaptcha) {
    if (isCaptcha.style.display == 'none') {
      isActive = false;
    } else {
      isActive = true;
    }
  } else {
    isCaptcha = document.getElementsByClassName("g-recaptcha"); // get element for new feed

    if (isCaptcha.length > 0) {
      isActive = true;
    } else {
      isActive = false;
    }
  }

  return isActive;
}



function getShareModalState() {

  var isActive;
  var isShareModal = $(document.getElementsByClassName('share-modal')).find('.modal__close-btn')[0];

    if (isShareModal) {
      isActive = true;
    } else {
      isActive = false;
    }
  return isActive;

}


function init() {

  if (localStorage.getItem('newfeature1') == null){
      alert('**** New PSK Feature Added : Reverse Order ****\nStep 1: Select Filter --> All Available Items.\nStep 2: Scroll all the way down to load all closet items.\nStep 3: Enable "Reverse Sort" in the PSK Menu.\nStep 4: Start Sharing!');
      var newfeature1 = localStorage.setItem('newfeature1','done');
  }

  if (localStorage.getItem('bugfix1') == null){
      alert('**** Updates PSK Mobile ****\nFixed issue with item not being shared when solving Captcha.\nFixed issue when closet item hides even when you cancel the share.');
      var newfeature1 = localStorage.setItem('bugfix1','done');
  }



  var sortsettings = localStorage.getItem('sortsettings');

    if (sortsettings == "reversesort") {
      defaultSortButton.checked = false;
      reverseSortButton.checked = true;
    }
    else{
      defaultSortButton.checked = true;
      reverseSortButton.checked = false;
    }


  var sharesettings = localStorage.getItem('sharesettings');

    if (sharesettings == "followers") {

      followersButton.checked = true;
      installCSS();
    } else if (sharesettings == "party") {
      partyButton.checked = true;
      installCSS();
    }

  var zoomsettings = localStorage.getItem('PSKzoomSettingStored');
    if (zoomsettings == "1") {
      zoom1Out.checked = true;
      zoomOutSettings('1');
    }
    if (zoomsettings == "2") {
      zoom2Out.checked = true;
      zoomOutSettings('2');
    }
    if (zoomsettings == "3") {
      zoom3Out.checked = true;
      zoomOutSettings('3');
    }
    if (zoomsettings == "4") {
      zoom4Out.checked = true;
      zoomOutSettings('4');
    }

  localStorage.setItem('css', "Poshmark.css");

  try {
    gumroadLicense.style.display = "none";
    body.style.display = "block";

  } catch (err) {}


  // chrome.tabs.query({
  //   active: true,
  //   currentWindow: true
  // }, function(tabs) {
  //   chrome.tabs.executeScript(
  //     tabs[0].id,

  //     {
  //       file: 'jquery-3.5.1.min.js'
  //     });

  // });


  var running = localStorage.getItem('running');

    if (running == "true") {
      // chrome.browserAction.setIcon({
      //   path: './images/green.png'
      // });

      try {
        sliderSwitch.checked = true;
      } catch (err) {}
      alert('still running');
      turnOn(true);
    }

};

function checkTrial() {

  var trial = localStorage.getItem('trial');
    trialUsed = trial;
    return trial;
}




function gumroadKeyGetCount(key, increment) {
  $.post('https://api.gumroad.com/v2/licenses/verify', {
      product_permalink: "PSKTOOL",
      license_key: key,
      increment_uses_count: increment
    }, function() {}).done(function(data) {

      var trialCheck = false;



      try {
        if (data.purchase.offer_code.name === 'trial') {
          trialCheck = true;
        }
      } catch {

      }


      if (data.success == false) {

        var validLicense = localStorage.getItem('validLicense');
        alert("License does not exist, verify license key is correct.");
        document.getElementById('error_message').innerText = "License does not exist, verify license key is correct.";
        document.getElementById('error_message').style.display = "block";
        return false;


      } else if (trialCheck) {
        var trial = localStorage.getItem('trial');
          trialUsed = trial;
          alert(trialUsed);

          if (trialUsed) {

            var validLicense = localStorage.getItem('validLicense');
            alert("Trial can only be used once.  Please purchase a full license.");
            document.getElementById('error_message').innerText = "Trial can only be used once.  Please purchase a full license.";
            document.getElementById('error_message').style.display = "block";
            return false;

          } else if (
            data.success && getTimeDiff(data.purchase.sale_timestamp) < 604800000 //180000
          ) {

            localStorage.setItem('validLicense',"validated");
            localStorage.setItem('trial',"true");
            localStorage.setItem('licensekey',licenseKeyInput.value);

              document.getElementById('error_message').style.display = "none";
              gumroadLicenseDiv.style.display = "none";
              body.style.display = "block";
              body.hidden = false;
              //init();
              alert('valid TRIAL license');
              onLicenseValidation("true");

              return true;




          } else {
            localStorage.setItem('validLicense',"false");

            document.getElementById('freeLicense').hidden = true;
            document.getElementById('freeLicense').style.display = "none";
            document.getElementById('error_message').innerText = "Trial Period Expired New License Required.";
            document.getElementById('error_message').style.display = "block";
            gumroadLicenseDiv.hidden = false;
            gumroadLicenseDiv.style.display = "block";
            body.style.display = "none";

            alert("Invalid License Trial Expired");
            return false;
          }



      } else if (data.success && parseInt(data.uses) >= 5) {

        localStorage.setItem('licenseCount',data.uses);



        gumroadLicenseDiv.style.display = "block";
        body.style.display = "none";

        document.getElementById('error_message').innerText = "License has hit maximum registration limit.  Contact okcoded.io@gmail.com if this is mistake.";
        document.getElementById('error_message').style.display = "block";
        alert("Invalid License, hit registration limit");
        return false;

      } else if (data.success && parseInt(data.uses) <= 4) {

        document.getElementById('error_message').innerText = "Valid key, checking number of registrations.";
        localStorage.setItem('licensekey',licenseKeyInput.value);

        onLicenseValidation("true");
        alert('license is currently under the registration limit.');


      } else {
        localStorage.setItem('licenseCount',data.uses);

        alert('License Uses Under 5');
        alert(data.uses);
        return true;

      }
    })
    .fail(function(data) {
      // alert("error");
      localStorage.setItem('validLicense', "false");
      onLicenseValidation("false");

      alert("Please check internet connection and try again. Could not verify license count.");

      // gumroadLicenseDiv.style.display = "block";
      // document.getElementById('error_message').style.display = "block";
      // document.getElementById('error_message').innerText = "Please check internet connection.  Could not verify license.";
      return false;

    });
}



function gumroadKeyVerify(key, increment) {
  $.post('https://api.gumroad.com/v2/licenses/verify', {
      product_permalink: "PSKTOOL",
      license_key: key,
      increment_uses_count: increment
    }, function() {}).done(function(data) {
      alert(data);
      var trialCheck = false;

      try {
        if (data.purchase.offer_code.name === 'trial') {
          trialCheck = true;
        }
      } catch {

      }


      if (trialCheck) {

        if (
          data.success && getTimeDiff(data.purchase.sale_timestamp) < 604800000 //180000
        ) {

      localStorage.setItem('validLicense', "validated");

      localStorage.setItem('trial', "true");


          document.getElementById('error_message').style.display = "none";
          document.getElementById('t1').innerText = 'Poshmark Sidekick Trial';
          gumroadLicenseDiv.style.display = "none";
          body.style.display = "block";
          body.hidden = false;
          init();
          alert('valid TRIAL license');

          return true;

        } else {
      localStorage.setItem('validLicense', "false");

          document.getElementById('freeLicense').hidden = true;
          document.getElementById('freeLicense').style.display = "none";
          document.getElementById('error_message').innerText = "Trial Period Expired New License Required.";
          document.getElementById('error_message').style.display = "block";
          gumroadLicenseDiv.hidden = false;
          gumroadLicenseDiv.style.display = "block";
          body.style.display = "none";

          alert("Invalid License Trial Expired");
          return false;
        }

      } else if (
        data.success &&
        data.purchase.subscription_cancelled_at === null &&
        data.purchase.subscription_failed_at === null
      ) {
      localStorage.setItem('validLicense', "validated");


        document.getElementById('error_message').style.display = "none";
        gumroadLicenseDiv.style.display = "none";
        body.style.display = "block";
        body.hidden = false;
        init();
        alert('valid license');



        return true;

      } else if (
        data.success &&
        data.purchase.recurrence == "monthly" &&
        getTimeDiff(data.purchase.sale_timestamp) < 2592000000
      ) {
      localStorage.setItem('validLicense', "validated");


        document.getElementById('error_message').style.display = "none";
        gumroadLicenseDiv.style.display = "none";
        body.style.display = "block";
        body.hidden = false;
        init();
        alert('valid license');

        return true;

      } else if (
        data.success &&
        data.purchase.recurrence == "biannually" &&
        getTimeDiff(data.purchase.sale_timestamp) < 15811200000
      ) {
      localStorage.setItem('validLicense', "validated");

        document.getElementById('error_message').style.display = "none";
        gumroadLicenseDiv.style.display = "none";
        body.style.display = "block";
        body.hidden = false;
        init();
        alert('valid license');

        return true;

      } else if (
        data.success &&
        data.purchase.recurrence == "yearly" &&
        getTimeDiff(data.purchase.sale_timestamp) < 31536000000
      ) {
      localStorage.setItem('validLicense', "validated");

        document.getElementById('error_message').style.display = "none";
        gumroadLicenseDiv.style.display = "none";
        body.style.display = "block";
        body.hidden = false;
        init();
        alert('valid license');

        return true;

      } else {
      localStorage.setItem('validLicense', "false");

        document.getElementById('error_message').innerText = "New license is required.";
        document.getElementById('error_message').style.display = "block";
        gumroadLicenseDiv.hidden = false;
        gumroadLicenseDiv.style.display = "block";
        body.style.display = "none";

        alert("Invalid License");
        return false;

      }


    })
    .fail(function(data) {
      // alert("error");

      try {
        if (!data['success']) {
      localStorage.setItem('validLicense', "false");

          document.getElementById('error_message').innerText = "A new license is required, or current key is invalid.";
          document.getElementById('error_message').style.display = "block";
          gumroadLicenseDiv.hidden = false;
          gumroadLicenseDiv.style.display = "block";
          body.style.display = "none";

          alert("Invalid License");
          return false;
        }
      } catch {


        alert(data);
      localStorage.setItem('validLicense', "false");

        alert("License check failed, check internet connection.");
        gumroadLicenseDiv.hidden = true;
        gumroadLicenseDiv.style.display = "none";
        document.getElementById('error_message').style.display = "block";
        document.getElementById('error_message').innerText = "License check failed, verify internet connection and try again by reopening extension.";
        return false;

      }

    });
}
