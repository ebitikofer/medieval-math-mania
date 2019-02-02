function createLoginForm() {

  // Creates username display label and input box
  var username_text = document.createTextNode("Username:");
  var username_input = document.createElement("input");
  username_input.id = "usernameInput";
  username_input.setAttribute("type", "text");
  username_input.setAttribute("name", "username");

  // Creates username div to hold display text and input box
  var login_username_div = document.createElement("div");
  login_username_div.className = "login";
  login_username_div.appendChild(username_text);
  login_username_div.appendChild(username_input);



  // Creates password display label and input box
  var password_text = document.createTextNode("Password:");
  var password_input = document.createElement("input");
  password_input.id = "passwordInput";
  password_input.setAttribute("type", "password");
  password_input.setAttribute("name", "password");

  // Creates password div to hold display text and input box
  var login_password_div = document.createElement("div");
  login_password_div.className = "login";
  login_password_div.appendChild(password_text);
  login_password_div.appendChild(password_input);



  // Creates login form to hold username and password divs
  var login_form = document.createElement("form");
  login_form.id = "loginForm";
  login_form.className = "scrollMenu";
  login_form.appendChild(login_username_div);
  login_form.appendChild(login_password_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(login_form);

}

function createSignupForm() {

  // Creates firstname display label and input box
  var firstname_text = document.createTextNode("Firstname:");
  var firstname_input = document.createElement("input");
  firstname_input.setAttribute("type", "text");
  firstname_input.setAttribute("name", "firstname");

  // Creates firstname div to hold display text and input box
  var signup_firstname_div = document.createElement("div");
  signup_firstname_div.className = "signup";
  signup_firstname_div.appendChild(firstname_text);
  signup_firstname_div.appendChild(firstname_input);



  // Creates lastname display text and input box
  var lastname_text = document.createTextNode("Lastname:");
  var lastname_input = document.createElement("input");
  lastname_input.setAttribute("type", "text");
  lastname_input.setAttribute("name", "lastname");

  // Creates lastname div to hold display text and input box
  var signup_lastname_div = document.createElement("div");
  signup_lastname_div.className = "signup";
  signup_lastname_div.appendChild(lastname_text);
  signup_lastname_div.appendChild(lastname_input);



  // Creates line break for form div spacing
  var br1 = document.createElement("br");



  // Creates username display text and input box
  var username_text = document.createTextNode("Username:");
  var username_input = document.createElement("input");
  username_input.setAttribute("type", "text");
  username_input.setAttribute("name", "username");

  // Creates username div to hold display text and input box
  var signup_username_div = document.createElement("div");
  signup_username_div.className = "signup";
  signup_username_div.appendChild(username_text);
  signup_username_div.appendChild(username_input);



  // Creates line break for form div spacing
  var br2 = document.createElement("br");



  // Creates password display text and input box
  var password_text = document.createTextNode("Password:");
  var password_input = document.createElement("input");
  password_input.setAttribute("type", "password");
  password_input.setAttribute("name", "password");

  // Creates password div to hold display text and input box
  var signup_password_div = document.createElement("div");
  signup_password_div.className = "signup";
  signup_password_div.appendChild(password_text);
  signup_password_div.appendChild(password_input);



  // Creates confirm display text and input box
  var confirm_text = document.createTextNode("Confirm:");
  var confirm_input = document.createElement("input");
  confirm_input.setAttribute("type", "password");
  confirm_input.setAttribute("name", "confirm");

  // Creates confirm div to hold display text and input box
  var signup_confirm_div = document.createElement("div");
  signup_confirm_div.className = "signup";
  signup_confirm_div.appendChild(confirm_text);
  signup_confirm_div.appendChild(confirm_input);



  // Creates signup form to hold firstname, lastname, username, password and confirm divs
  var signup_form = document.createElement("form");
  signup_form.id = "signupForm";
  signup_form.className = "scrollMenu";
  signup_form.appendChild(signup_firstname_div);
  signup_form.appendChild(signup_lastname_div);
  signup_form.appendChild(br1);
  signup_form.appendChild(signup_username_div);
  signup_form.appendChild(br2);
  signup_form.appendChild(signup_password_div);
  signup_form.appendChild(signup_confirm_div);

  //Injecting signup form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(signup_form);

}

function createStatsForm() {

  // Creates username display label and text
  var hits_label = document.createTextNode("Hits: ");
  var hits_text = document.createTextNode(fake_account.hits);

  // Creates username div to hold display text and input box
  var stats_hits_div = document.createElement("div");
  stats_hits_div.className = "login";
  stats_hits_div.appendChild(hits_label);
  stats_hits_div.appendChild(hits_text);



  // Creates password display label and text
  var misses_label = document.createTextNode("Misses: ");
  var misses_text = document.createTextNode(fake_account.misses);

  // Creates password div to hold display text and input box
  var stats_misses_div = document.createElement("div");
  stats_misses_div.className = "login";
  stats_misses_div.appendChild(misses_label);
  stats_misses_div.appendChild(misses_text);



  // Creates login form to hold username and password divs
  var stats_form = document.createElement("form");
  stats_form.id = "statsForm";
  stats_form.className = "scrollMenu";
  stats_form.appendChild(stats_hits_div);
  stats_form.appendChild(stats_misses_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(stats_form);

}

function createHow2PlayForm() {

  var instructions = "It's just math";

  // Creates username display label and text
  var h2p_label = document.createTextNode("How 2 Play: ");
  var h2p_text = document.createTextNode(instructions);

  // Creates username div to hold display text and input box
  var h2p_h2p_div = document.createElement("div");
  h2p_h2p_div.className = "login";
  h2p_h2p_div.appendChild(h2p_label);
  h2p_h2p_div.appendChild(h2p_text);



  // Creates login form to hold username and password divs
  var h2p_form = document.createElement("form");
  h2p_form.id = "h2pForm";
  h2p_form.className = "scrollMenu";
  h2p_form.appendChild(h2p_h2p_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(h2p_form);

}

function createSettingsForm() {

  // Creates username display text and input slider
  var volume_text = document.createTextNode("Volume:");
  var volume_input = document.createElement("input");  // document.getElementById("").value
  
  volume_input.id = "volumeSlider";
  
  volume_input.setAttribute("type", "range");
  volume_input.setAttribute("name", "volume");
  volume_input.setAttribute("min", "0");
  volume_input.setAttribute("max", "1");
  volume_input.setAttribute("step", "0.1");
  volume_input.setAttribute("value", "50");
  volume_input.setAttribute(oninput, "SetVolume(this.value)");
  volume_input.setAttribute(onchange, "SetVolume(this.value)");
  volume_input.addEventListener('change', setVolume);
  volume_input.addEventListener('input', setVolume);

  // Creates username div to hold display text and input slider
  var settings_volume_div = document.createElement("div");
  settings_volume_div.className = "login";
  settings_volume_div.appendChild(volume_text);
  settings_volume_div.appendChild(volume_input);



  // Creates password display text and check box
  var time_text = document.createTextNode("Time:");
  var time_input = document.createElement("input");
  time_input.setAttribute("type", "checkbox");
  time_input.setAttribute("name", "time");

  // Creates password div to hold display text and check box
  var settings_time_div = document.createElement("div");
  settings_time_div.className = "login";
  settings_time_div.appendChild(time_text);
  settings_time_div.appendChild(time_input);



  // Creates login form to hold username and password divs
  var settings_form = document.createElement("form");
  settings_form.id = "settingsForm";
  settings_form.className = "scrollMenu";
  settings_form.appendChild(settings_volume_div);
  settings_form.appendChild(settings_time_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(settings_form);

}

function createAccountForm() {

  // Creates username display label and text
  var username_label = document.createTextNode("Username:");
  var username_text = document.createTextNode(fake_account.user);

  // Creates username div to hold display text and input box
  var account_username_div = document.createElement("div");
  account_username_div.className = "login";
  account_username_div.appendChild(username_label);
  account_username_div.appendChild(username_text);



  // Creates password display label and text
  var password_label = document.createTextNode("Password:");
  var password_text = document.createTextNode(fake_account.pass);

  // Creates password div to hold display text and input box
  var account_password_div = document.createElement("div");
  account_password_div.className = "login";
  account_password_div.appendChild(password_label);
  account_password_div.appendChild(password_text);



  // Creates login form to hold username and password divs
  var account_form = document.createElement("form");
  account_form.id = "loginForm";
  account_form.className = "scrollMenu";
  account_form.appendChild(account_username_div);
  account_form.appendChild(account_password_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(account_form);

}

function createMapForm() {

  var instructions = "Coming \n Soon";

  // Creates username display text
  var map_p_tag = document.createElement("p");
  map_p_tag.id = "mapForm";
  var map_text = document.createTextNode(instructions);
  map_p_tag.appendChild(map_text);

  // Creates username div to hold display text and input box
  var map_map_div = document.createElement("div");
  map_map_div.className = "login";
  map_map_div.appendChild(map_p_tag);



  // Creates login form to hold username and password divs
  var map_form = document.createElement("form");
  map_form.id = "mapForm";
  map_form.className = "scrollMenu";
  map_form.appendChild(map_map_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(map_form);

}

function createGameForm() {

  var multiplicand = "7";
  var sign = "x"; //&#37
  var equal = "=";
  var solution = "69";

  // Creates username display text
  var multiplicand_text = document.createTextNode(multiplicand);
  var sign_text = document.createTextNode(sign);
  var entry_input = document.createElement("input");
  entry_input.id = "entryInput";
  entry_input.setAttribute("type", "text");
  entry_input.setAttribute("maxlength", "4");
  entry_input.setAttribute("size", "4");
  entry_input.setAttribute("name", "entry");
  var equal_text = document.createTextNode(equal);
  var solution_text = document.createTextNode(solution);

  // Creates username div to hold display text and input box
  var game_entry_div = document.createElement("div");
  game_entry_div.className = "login";
  game_entry_div.appendChild(multiplicand_text);
  game_entry_div.appendChild(sign_text);
  game_entry_div.appendChild(entry_input);
  game_entry_div.appendChild(equal_text);
  game_entry_div.appendChild(solution_text);



  // Creates login form to hold username and password divs
  var game_form = document.createElement("form");
  game_form.id = "gameForm";
  game_form.className = "scrollMenu";
  game_form.appendChild(game_entry_div);

  // Injecting login form into existing html
  var scene_html = document.getElementById("sceneHTML");
  scene_html.appendChild(game_form);

}
