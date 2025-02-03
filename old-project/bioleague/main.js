const formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfOAFS021KUWOyn1t4T9EPCCLw8exsEy7HbxK-GESTfT_dUDw/formResponse";
const submitButton = document.querySelector("form article button");
function validateDate(dateString) {
  const regex = /^\s*(\d{4})-(\d{2})-(\d{2})\s*$/;
  return regex.test(dateString);
}
async function submitGoogleForm(formUrl, formData) {
  const data = new URLSearchParams();
  for (const entry in formData) {
    if (Object.hasOwnProperty.call(formData, entry)) {
      const value = formData[entry];
      data.append("entry." + entry, value);
    }
  }
  try {
    const response = await fetch(formUrl, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}
async function addDocument(participant) {
  try {
    (async function () {
      await submitGoogleForm(formURL, {
        1408891153: participant["Team Name"],
        1543845846: participant["Team Size"],
        1146641447: participant["Leaders Full Name"],
        1271122690: participant["Leader Email"],
        1818468307: participant["Leaders Phone Number"],
        535712434: participant["Leader Country"],
        2073172551: participant["Leaders Birthday"],
        1614654333: participant["Leaders School"],
        1350836926: participant["Leader Grade"],
        1978791407: participant["Second Full Name"],
        1145448472: participant["Second Member Email"],
        501969116: participant["Second Member Phone Number"],
        1796738394: participant["Second Country"],
        528187386: participant["Second Member School"],
        618263230: participant["Second Grade"],
        549231774: participant["Third Full Name"],
        1713984377: participant["Third Member Email"],
        1736993601: participant["Third Member Phone Number"],
        1038910627: participant["Third Country"],
        1240992439: participant["Third Member School"],
        1073722903: participant["Third Grade"],
        1440471549: participant["Fourth Full Name"],
        1192441178: participant["Fourth Member Email"],
        544722476: participant["Fourth Member Phone Number"],
        866863311: participant["Fourth Country"],
        1773878988: participant["Fourth Member School"],
        1220853097: participant["Fourth Grade"],
        227509869: participant["Hear About Bioleague"],
        1927455794: participant["Ambassador Code"],
      });
      document.querySelector(".loader").style.display = "none";
      await giveAlert(
        "Registration Completed Successfully ",
        "#03c9a9",
        "BioLeague"
      );
      location.href = "https://octoberbiologyclub.com";
    })();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".loader").style.display = "grid";
  const fields = [
    ...document.querySelectorAll(
      "form article input[type=text]:not(#custom-select-input),form article input[type=date]:not(#custom-select-input)"
    ),
  ].map(function (field) {
    return {
      name: field.getAttribute("name"),
      value: field.value != "on" ? field.value : field.checked,
    };
  });
  let hear_about = [...document.querySelectorAll("form input[name=HEARABOUT]")]
    .filter(function (field) {
      return field.checked === true;
    })
    .map((option) => option.id);
  let size = [...document.querySelectorAll("form input[name=Size]")].filter(
    function (field) {
      return field.checked === true;
    }
  );
  if (size.length == 0) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Your Team Size", "#03c9a9", "Bioleague");
    return;
  } else {
    size = size[0].id;
  }

  const mainDataObject = {};
  fields
    .map((field) => {
      return { [field.name]: field.value };
    })
    .map((item) => {
      const key = Object.keys(item)[0];
      const value = item[key];
      mainDataObject[key] = value;
    });
  let leaderGrade = [
    ...document.querySelectorAll("form input[name=Leader_grade]"),
  ].filter(function (field) {
    return field.checked === true;
  })[0]?.id;

  let secondGrade = [
    ...document.querySelectorAll("form input[name=Second_grade]"),
  ].filter(function (field) {
    return field.checked === true;
  })[0]?.id;

  let thirdGrade = [
    ...document.querySelectorAll("form input[name=Third_grade]"),
  ].filter(function (field) {
    return field.checked === true;
  })[0]?.id;

  let fourthGrade = [
    ...document.querySelectorAll("form input[name=Fourth_grade]"),
  ].filter(function (field) {
    return field.checked === true;
  })[0]?.id;

  const leadersCountry = document.getElementById("custom-select-input1").value;
  const secondCountry = document.getElementById("custom-select-input2").value;
  const thirdCountry = document.getElementById("custom-select-input3").value;
  const fourthCountry = document.getElementById("custom-select-input4").value;
  const participant = {
    ...mainDataObject,
    "Team Size": size,
    "Leader Grade": leaderGrade,
    "Second Grade": secondGrade,
    "Third Grade": thirdGrade,
    "Fourth Grade": fourthGrade,
    "Leader Country": leadersCountry,
    "Second Country": secondCountry,
    "Third Country": thirdCountry,
    "Fourth Country": fourthCountry,
    "Hear About Bioleague": hear_about,
  };

  if (!participant["Team Name"]) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Your Team Name", "#03c9a9", "Bioleague");
    return;
  }
  if (!participant["Leaders Full Name"]) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Team Leader's Full Name", "#03c9a9", "Bioleague");
    return;
  }
  console.log(participant);
  
  if (!participant["Leader Email"]) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Team Leader's Email", "#03c9a9", "Bioleague");
    return;
  }
  
  if (!participant["Leaders Phone Number"]) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Team Leader's Phone Number", "#03c9a9", "Bioleague");
    return;
  }
  if (!participant["Leader Grade"]) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Team Leader's Grade", "#03c9a9", "Bioleague");
    return;
  }
  if (!participant["Leaders School"]) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Team Leader's School", "#03c9a9", "Bioleague");
    return;
  }
  if (!participant["Leaders Birthday"]) {
    document.querySelector(".loader").style.display = "none";
    giveAlert("Please Chose Enter Team Leader's Birthday", "#03c9a9", "Bioleague");
    return;
  }
  addDocument(participant);
});

function giveAlert(alert, color, from, clicky, yesNo) {
  return new Promise((resolve, reject) => {
    let body = document.createElement("div"),
      text = document.createElement("p"),
      response = document.createElement("button"),
      admin = document.createElement("p"),
      overlay = document.createElement("div");
    overlay.style.cssText =
      "position:fixed;cursor:pointer;z-index:99998;width:100vw;height:100vh;background-color:#00000090;top:0;left:0;";
    text.textContent = alert;
    response.innerText = "OK";
    admin.textContent = from || "Admins" + " Says";
    response.style.cssText = `width:100px;background-color:${
      color || "#0050b2"
    };padding:5px 10px;cursor:pointer;border:0;align-self:end;border-radius:10px;color:#fff;`;
    body.style.cssText =
      "display:flex;z-index:999999;padding:30px;align-items:start;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:500px;max-width:90%;background-color:#fff;border-radius:5px;flex-direction:column;justify-content:space-evenly;";
    if (!clicky) {
      overlay.addEventListener("click", function () {
        body.remove();
        overlay.remove();
        if (yesNo) {
          reject();
        }
        resolve();
      });
      response.addEventListener("click", function () {
        body.remove();
        overlay.remove();
        resolve();
      });
    }

    body.append(admin, text);
    if (yesNo) {
      const no = document.createElement("button");
      no.innerText = "No, Don't delete";
      no.style.cssText = `width:120px;background-color:#2ecc71;padding:5px 10px;cursor:pointer;border:0;align-self:end;border-radius:10px;color:#fff;`;
      no.addEventListener("click", function () {
        body.remove();
        overlay.remove();
        reject();
      });
      const res = document.createElement("div");
      response.textContent = "Yes delete";
      res.append(no, response);
      res.style.cssText =
        "display:flex;justify-content:flex-end;gap:10px;width:100%;";
      body.append(res);
    } else {
      body.append(response);
    }
    document.body.append(body, overlay);
  });
}

function makeAList(csSelector, csStatus, index) {
  const csInput = csSelector.querySelector("input");
  const csList = csSelector.querySelector("ul");
  const cslis = csList.querySelectorAll("li");
  const alis = Array.from(cslis);
  let csState = "initial";

  csSelector.setAttribute("role", "combobox");
  csSelector.setAttribute("aria-haspopup", "listbox");
  csSelector.setAttribute("aria-owns", "custom-select-list");
  csInput.setAttribute("aria-autocomplete", "both");
  csInput.setAttribute("aria-controls", "custom-select-list");
  csList.setAttribute("role", "listbox");
  cslis.forEach(function (li) {
    li.setAttribute("role", "li");
    li.setAttribute("tabindex", "-1");
  });
  csStatus.textContent =
    cslis.length +
    " lis available. Arrow down to browse or start typing to filter.";
  csSelector.addEventListener("click", function (e) {
    const currentFocus = findFocus();
    switch (csState) {
      case "initial":
        toggleList("Open");
        setState("opened");
        break;
      case "opened":
        if (currentFocus === csInput) {
          toggleList("Shut");
          setState("initial");
        } else if (currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        }
        break;
      case "filtered":
        if (currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        }
        break;
      case "closed":
        toggleList("Open");
        setState("filtered");
        break;
    }
  });

  csSelector.addEventListener("keyup", function (e) {
    doKeyAction(e.key, csState);
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest("#myCustomSelect" + index)) {
      toggleList("Shut");
      setState("initial");
    }
  });
  function doFilter() {
    const terms = csInput.value;
    const aFilteredlis = alis.filter(function (li) {
      if (li.innerText.toUpperCase().startsWith(terms.toUpperCase())) {
        return true;
      }
    });
    cslis.forEach((li) => (li.style.display = "none"));
    aFilteredlis.forEach(function (li) {
      li.style.display = "";
    });
    setState("filtered");
    updateStatus(aFilteredlis.length);
  }

  function updateStatus(howMany) {
    csStatus.textContent = howMany + " lis available.";
  }

  function makeChoice(whichli) {
    const liTitle = whichli.querySelector("strong");
    csInput.value = liTitle.textContent;
    moveFocus(document.activeElement, "input");
  }

  function setState(newState) {
    switch (newState) {
      case "initial":
        csState = "initial";
        break;
      case "opened":
        csState = "opened";
        break;
      case "filtered":
        csState = "filtered";
        break;
      case "closed":
        csState = "closed";
    }
  }

  function doKeyAction(whichKey, csState) {
    const currentFocus = findFocus();
    switch (whichKey) {
      case "Enter":
        if (csState === "initial") {
          toggleList("Open");
          setState("opened");
        } else if (csState === "opened" && currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        } else if (csState === "opened" && currentFocus === csInput) {
          toggleList("Shut");
          setState("closed");
        } else if (csState === "filtered" && currentFocus.tagName === "LI") {
          makeChoice(currentFocus);
          toggleList("Shut");
          setState("closed");
        } else if (csState === "filtered" && currentFocus === csInput) {
          toggleList("Open");
          setState("opened");
        } else {
          toggleList("Open");
          setState("filtered");
        }
        break;

      case "Escape":
        if (csState === "opened" || csState === "filtered") {
          toggleList("Shut");
          setState("initial");
        }
        break;

      case "ArrowDown":
        if (csState === "initial" || csState === "closed") {
          toggleList("Open");
          moveFocus(csInput, "forward");
          setState("opened");
        } else {
          toggleList("Open");
          moveFocus(currentFocus, "forward");
        }
        break;
      case "ArrowUp":
        if (csState === "initial" || csState === "closed") {
          toggleList("Open");
          moveFocus(csInput, "back");
          setState("opened");
        } else {
          moveFocus(currentFocus, "back");
        }
        break;
      default:
        if (csState === "initial") {
          toggleList("Open");
          doFilter();
          setState("filtered");
        } else if (csState === "opened") {
          doFilter();
          setState("filtered");
        } else if (csState === "closed") {
          doFilter();
          setState("filtered");
        } else {
          doFilter();
        }
        break;
    }
  }

  function findFocus() {
    const focusPoint = document.activeElement;
    return focusPoint;
  }

  function moveFocus(fromHere, toThere) {
    const aCurrentlis = alis.filter(function (li) {
      if (li.style.display === "") {
        return true;
      }
    });
    if (aCurrentlis.length === 0) {
      return;
    }
    if (toThere === "input") {
      csInput.focus();
    }
    switch (fromHere) {
      case csInput:
        if (toThere === "forward") {
          aCurrentlis[0].focus();
        } else if (toThere === "back") {
          aCurrentlis[aCurrentlis.length - 1].focus();
        }
        break;
      case cslis[0]:
        if (toThere === "forward") {
          aCurrentlis[1].focus();
        } else if (toThere === "back") {
          csInput.focus();
        }
        break;
      case cslis[cslis.length - 1]:
        if (toThere === "forward") {
          aCurrentlis[0].focus();
        } else if (toThere === "back") {
          aCurrentlis[aCurrentlis.length - 2].focus();
        }
        break;
      default:
        const currentItem = findFocus();
        const whichOne = aCurrentlis.indexOf(currentItem);
        if (toThere === "forward") {
          const nextOne = aCurrentlis[whichOne + 1];
          nextOne.focus();
        } else if (toThere === "back" && whichOne > 0) {
          const previousOne = aCurrentlis[whichOne - 1];
          previousOne.focus();
        } else {
          csInput.focus();
        }
        break;
    }
  }

  function toggleList(whichWay) {
    if (whichWay === "Open") {
      csList.classList.remove("hidden-all");
      csSelector.setAttribute("aria-expanded", "true");
    } else {
      csList.classList.add("hidden-all");
      csSelector.setAttribute("aria-expanded", "false");
    }
  }
}
makeAList(
  document.querySelector("#myCustomSelect1"),
  document.querySelector("#custom-select-status1"),
  1
);

makeAList(
  document.querySelector("#myCustomSelect2"),
  document.querySelector("#custom-select-status2"),
  2
);
makeAList(
  document.querySelector("#myCustomSelect3"),
  document.querySelector("#custom-select-status3"),
  3
);
makeAList(
  document.querySelector("#myCustomSelect4"),
  document.querySelector("#custom-select-status4"),
  4
);
