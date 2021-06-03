/*
[Major build number].[Minor build number].[Patch]
*/

var players = [];
var playerColors = ["FDD6FF", "FFB7CD", "FFB584", "FFE187", "EEFF82", "B8FF82", "93FF9B", "7FFFDD", "89E5FF", "99C3FF", "B2B8FF", "C7B7FF", "F5E8FF", "FFD8EE", "FFEADD", "F8FFE8", "EFFFFA", "E5E8FF", "00EDFF", "00FFBB", "00FF50", "99FF00", "F6FF00", "FFBB00", "FF5C26", "FF4977", "FF5EF4"];
var settings = {nsfw: false};
var howToState = true;
var tempPlayer = "";
var playerInputWarning = "";

function start() {
    if (players.length >= 4) {
        window.location.href="game.html";
    }

    else {
        alert(4 - players.length + " more player(s) needed!");
    }
}

/* Toggle settings depending on former state */
function toggleSetting(setting) {

    settings[setting] = !settings[setting];
    
    if (settings[setting]) {
        sessionStorage.setItem(`is_${setting}`, true);
    } else {
        sessionStorage.removeItem(`is_${setting}`)
    }

    /* Update the settings container with new states */
    refreshSettingsIcons();
}

function toggleHowToState (){
    const howToContent = document.getElementById("howto-content");
    const howToButton = document.getElementById("howto-expand-button");

    if (howToState == false) {
        howToContent.style.display = "none";
        howToButton.innerHTML = "+";

        howToState = true;
    }

    else if (howToState == true) {
        howToContent.style.display = "grid";
        howToButton.innerHTML = "-";
        howToState = false;
    }
}

/* Writing into the "Add player" field will add it as a tempPlayer (on input) */
function setTempPlayer(tempName) {
    tempPlayer = tempName;
}

/* Checks for duplicate and then pushes name in to players array and clears tempPlayer */
function addTempPlayer() {
    const tempPlayerDuplicate = false;
    document.getElementById("player-input-warning").innerHTML = "";
    
    if (tempPlayer != "") {
        for (player in players) {
            if (players[player].name == tempPlayer) {
                document.getElementById("player-input-warning").innerHTML = "This player is already added!<br>";
                tempPlayerDuplicate = true;
            }
        }

        if (tempPlayerDuplicate == false) {
            const randomColor = getRandomColor();
            addPlayer(randomColor, tempPlayer);
            setPlayerStorage();

            document.getElementById("player-input-field").value = "";

            tempPlayer = "";
        }
    }
}

/* Pushes a given name into players array */
function addPlayer(playerColor, playerName) {
    const playerObject = {color: playerColor, name: playerName};

    players.push(playerObject);

    refreshPlayerList();
}

/* Delete a name from players array, then updates storage and playerlist */
function deletePlayer(playerIndex) {
    document.getElementById("player-input-warning").innerHTML = "";
    players.splice(playerIndex, 1);

    setPlayerStorage();
    refreshPlayerList();
}

/* Return a random color that has not been used yet */
function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * playerColors.length);

    return playerColors[randomNumber];
}

function setRandomColor(playerIndex) {
    players[playerIndex].color = getRandomColor();

    setPlayerStorage();
    refreshPlayerList();
}

/* Updates player-list with current players */
function refreshPlayerList() {
    document.getElementById("player-list").innerHTML = "";

    for (player in players) {
        
        document.getElementById("player-list").innerHTML += "<button id='player-list-player' style='background:#" + players[player].color +"'>" + "<span id='player-list-player-txt'>" + players[player].name + 
        "</span> <span id='player-list-player-ctrl'> <a id='player-list-player-ctrl-option' onclick='setRandomColor(" + player + ")'> <img src='assets/img/icon/color-circle.png'> </a>" +
        "<a id='player-list-player-ctrl-option' onclick='deletePlayer(" + player + ")'" + ";'> <img src='assets/img/icon/remove.png'> </a> </span>" + "</button>";
    }
}

/* Styles settings icons depending on current state */
function refreshSettingsIcons() {
    let nsfwIcon = document.getElementById("settings-nsfw-icon");

    if (settings.nsfw == true) {
        nsfwIcon.src = "assets/img/icon/switch-on.png"
    }    
    else if (settings.nsfw == false) {
        nsfwIcon.src = "assets/img/icon/switch-off.png"
    } 

}

/* Save players array into sessionStorage */
function setPlayerStorage() {
    sessionStorage.setItem("players", JSON.stringify(players));
}

/* Load players from sessionStorage and push them into players array */
function getPlayerStorage() {
    let storage = JSON.parse(sessionStorage.getItem('players'));
    
    for (item in storage) {
        addPlayer(storage[item].color, storage[item].name);
    }
}


/* Save a key and value into sessionStorage */
function setStorage(key, value) {
    sessionStorage.setItem(key, value);
}

/* Load a key and value from sessionStorage */
function getStorage(key) {
    sessionStorage.getItem(key);
}




