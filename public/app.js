// Options set
var options = {
        innergrad: {
            color: "#406986",
            setColor: function () {
                $("#template-wrapper").css("background", "radial-gradient(ellipse, " + this.color + " 0%, " + options.outergrad.color + " 100%)");
            }
        },
        outergrad: {
            color: "#16344a",
            setColor: function () {
                $("#template-wrapper").css("background", "radial-gradient(ellipse, " + options.innergrad.color + " 0%, " + this.color + " 100%)");
            }
        },
        h1: {
            color: "#333333",
            setColor: function () {
                $("#small h1").css("color", this.color);
            }
        },
        h2: {
            color: "#2d5d94",
            setColor: function () {
                $("#small h2, #features h2, #small h4, #features h4").css("color", this.color);
            }
        },
        h3: {
            color: "#5f6060",
            setColor: function () {
                $("#small h3, #features h3, #small h5, #features h5").css("color", this.color);
            }
        },
        a: {
            color: "#2d5d94",
            setColor: function () {
                $("#small a.default").css("color", this.color);
                $("#small a.default").css("borderColor", this.color);
            }
        },
        aHover: {
            color: "#7b4c8d",
            setColor: function () {
                $("#small a.hover").css("color", this.color);
                $("#small a.hover").css("borderColor", this.color);
            }
        },
        prepareLabel: {
            color: "#49807b",
            setColor: function () {
                $(".prepareBanner .label").css("background", this.color);
            }
        },
        prepareActivity: {
            color: "#8ed0cb",
            setColor: function () {
                $(".prepareBanner .activityType").css("background", this.color);
            }
        },
        teachLabel: {
            color: "#537491",
            setColor: function () {
                $(".teachBanner .label").css("background", this.color);
            }
        },
        teachActivity: {
            color: "#9abad6",
            setColor: function () {
                $(".teachBanner .activityType").css("background", this.color);
            }
        },
        ponderLabel: {
            color: "#8163a5",
            setColor: function () {
                $(".ponderBanner .label").css("background", this.color);
            }
        },
        ponderActivity: {
            color: "#baa4d4",
            setColor: function () {
                $(".ponderBanner .activityType").css("background", this.color);
            }
        },
        footerColor: {
            color: "#e2e2e2",
            setColor: function () {
                $("#small .footer, #features .footer").css("color", this.color);
            }
        },
        footerBackground: {
            color: "#2d5d94",
            setColor: function () {
                $("#small .footer, #features .footer").css("backgroundColor", this.color);
            }
        },
        splashBackground: {
            color: "#125576",
            setColor: function () {
                $("#large .article").css("backgroundColor", this.color);
            }
        },
        splashColor: {
            color: "#eaeaea",
            setColor: function () {
                $("#large .article").css("color", this.color);
            }
        },
        splashH1: {
            color: "#fafafa",
            setColor: function () {
                $("#large h1").css("color", this.color);
            }
        },
        splashH2: {
            color: "#a1d7ff",
            setColor: function () {
                $("#large h2, #large h4").css("color", this.color);
            }
        },
        splashH3: {
            color: "#c3c3c3",
            setColor: function () {
                $("#large h3, #large h5").css("color", this.color);
            }
        },
        splashA: {
            color: "#a1d7ff",
            setColor: function () {
                $("#large a.default").css("color", this.color);
                $("#large a.default").css("borderColor", this.color);
            }
        },
        splashAHover: {
            color: "#c08fd3",
            setColor: function () {
                $("#large a.hover").css("color", this.color);
                $("#large a.hover").css("borderColor", this.color);
            }
        },
        splashFooterColor: {
            color: "#e2e2e2",
            setColor: function () {
                $("#large .footer").css("color", this.color);
            }
        },
        splashFooterBackground: {
            color: "#133955",
            setColor: function () {
                $("#large .footer").css("backgroundColor", this.color);
            }
        },
        calloutBackground: {
            color: "#e3ded1",
            setColor: function () {
                $("#features .callout").css("backgroundColor", this.color);
            }
        },
        calloutColor: {
            color: "#2d5d94",
            setColor: function () {
                $("#features .callout").css("color", this.color);
            }
        },
        dropdownBackground: {
            color: "#6c6c6c",
            setColor: function () {
                $("#features .drop-down.default").css("backgroundColor", this.color);
            }
        },
        dropdownHover: {
            color: "#7f7f7f",
            setColor: function () {
                $("#features .drop-down.hover").css("backgroundColor", this.color);
            }
        },
        columnHeading: {
            color: "#1e435d",
            setColor: function () {
                $("#features table tr:first-child th").css("backgroundColor", this.color);
            }
        },
        rowHeading: {
            color: "#2d5d94",
            setColor: function () {
                $("#features table tr:nth-child(n+2) th").css("backgroundColor", this.color);
            }
        },
        popup: {
            color: "#274b66",
            setColor: function () {
                $("#popupWord").css("borderColor", this.color);
                $("#popupMessage").css("backgroundColor", this.color);
                $("#popupTriangle").css("borderTopColor", this.color);
            }
        }
    },
    selectedRadio = "innergrad",
    style = "",
    undo = [],
    redo = [],
    undoRedoEnabled = true,
    body = document.querySelector("body"),
    imgHold = {},
    loadedTemplateData,
    fireTemplateName;

/*Color Constrast Checker*/
function checker(page, names) {

    var errorArray = [];

    names.forEach(function (name) {

        var foregroundColor,
            returnedOpt;

        if (page === "small") {

            foregroundColor = options[name].color;

            returnedOpt = darkOrLight(hexToRgb(foregroundColor), hexToRgb("#F0F0F0"));

            if (returnedOpt.fail) {
                console.log(name + " failed. --- " + returnedOpt.contrast);
            }
        } else if (page === "large") {

            foregroundColor = options[name].color;

            returnedOpt = darkOrLight(hexToRgb(foregroundColor), hexToRgb("#125576"));

            console.log(options.splashBackground.color)

            if (returnedOpt.fail) {
                console.log(name + " failed. --- " + returnedOpt.contrast);
            }

        }else if (page === "features") {
            foregroundColor = options[name].color;

            returnedOpt = darkOrLight(hexToRgb(foregroundColor), hexToRgb("#F0F0F0"));

            if (returnedOpt.fail) {
                console.log(name + " failed. --- " + returnedOpt.contrast);
            }
        }
    })

}

function checkContrast() {

    var smallColorCheck = ["h1"
                      , "h2"
                      , "h3"
                      , "a"
                      , "aHover"
                          ],
        largeColorCheck = ["splashColor"
                      , "splashH1"
                      , "splashH2"
                      , "splashH3"
                      , "splashA"
                      , "splashAHover"
                      , "splashFooterColor"
                      ],
        calloutColorCheck = ["calloutColor"];

    checker("small", smallColorCheck);
    checker("large", largeColorCheck);
    checker("features", calloutColorCheck);
}

// Update selectedRadio everytime a radio button is clicked
$("#general input[type='radio']").click(function () {
    selectedRadio = this.id;
    $("#colorPicker").spectrum("set", options[selectedRadio].color);
});
// Color Picker
$("#colorPicker").spectrum({
    flat: true,
    color: "#406986",
    showButtons: false,
    showInput: true,
    preferredFormat: "hex",
    move: function (color) {
        $("#saveStatus").html("");
        options[selectedRadio].color = color.toHexString();
        options[selectedRadio].setColor();
    }
});

function insertBanners(e, filename, state) {
    var img = new Image();
    var img2 = new Image();
    if (state === "fireload") {
        img.src = e;
        if (filename === "smallBanner") {
            img2.src = e;
            var colorThief = new ColorThief(),
                image = new CanvasImage(img2, filename + "Two");
        }
    } else if (state === "new") {
        img.src = e.target.result;
        if (filename === "smallBanner") {
            img2.src = e.target.result;
            var colorThief = new ColorThief(),
                image = new CanvasImage(img2, filename + "Two");
        }
    }


    imgHold[filename] = img.src;

    var colorThief = new ColorThief(),
        image = new CanvasImage(img, filename);
    var domColor = colorThief.getColor(img),
        pallete = colorThief.getPalette(img),
        get = getHexPallete(domColor, pallete, filename);

}

function handleFileSelect(evt) {
    "use strict";
    fireTemplateName = "";

    //Clear exisiting banners
    $(".header").html("");
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            var filename = theFile.name.replace(/\.[^/.]+$/, "");
            return function (e) {
                insertBanners(e, filename, 'new');
            };
        })(f);
        // Read in the image file as a data URL.
        reader.readAsDataURL(f);

        $("#saveStatus").html("");
    }
}

function getHexPallete(domColor, pallete, cssTemplate) {
    "use strict";
    pallete.unshift(domColor);
    var palleteArray = [],
        flexContainer = document.createElement("div"),
        currentPage = "";
    // Check that a page is being viewed and not the css
    if (document.querySelector("#page-selection input:checked") != null) {
        currentPage = document.querySelector("#page-selection input:checked").dataset.selector;
    }
    // If current page is features use small
    if (currentPage === "features") {
        currentPage = "small";
    }
    // Hide the color suggestions for banner not being viewed
    if (!cssTemplate.includes(currentPage)) {
        flexContainer.style.display = "none";
    }
    flexContainer.id = cssTemplate + "Suggestions";
    // Determine which suggestions to show or hide based off which page is currently selected
    for (var i = 0; i < pallete.length; i++) {
        var firstbit = pallete[i][0].toString(16),
            secbit = pallete[i][1].toString(16),
            thirbit = pallete[i][2].toString(16),
            div = document.createElement("div"),
            hex = `#${firstbit}${secbit}${thirbit}`;
        div.style.backgroundColor = hex;
        div.id = hex;
        document.querySelector("#colorPallete").appendChild(flexContainer);
        flexContainer.appendChild(div);
        palleteArray.push(hex);
    }
    // Add click event handler
    $("#colorPallete div > div").click(function () {
        $("#saveStatus").html("");
        updateUndo(options[selectedRadio].color);
        options[selectedRadio].color = this.id;
        options[selectedRadio].setColor();
        $("#colorPicker").spectrum("set", options[selectedRadio].color);
    });
}

function saveTextAsFile(text) {
    var textToWrite = style,
        textFileAsBlob = new Blob([textToWrite], {
            type: 'text/css'
        }),
        fileNameToSaveAs = 'course',
        downloadLink = document.createElement("a"),
        small = document.querySelector("a[href*='small']"),
        large = document.querySelector("a[href*='large']"),
        coursejs = document.querySelector("a[href*='course']");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.URL !== null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    if (text === "cssOnly") {
        downloadLink.click();
    } else {
        downloadLink.click();
        small.click();
        large.click();
        coursejs.click();
    }
}

function template() {
    style = `/********************************************************
    The purpose of course.css is to house only the css
    specific to an individual course. The online.css
    houses all the default template formatting.
********************************************************/
/* DO NOT DELETE OR MODIFY THIS IMPORT */
@import url("https://content.byui.edu/integ/gen/599082e0-3e89-4fd9-ac69-2615865d63c7/0/online.css");

/* Adjust/Add Course Specific css Below */
html {
	background: -webkit-radial-gradient(ellipse, ${options.innergrad.color} 0%, ${options.outergrad.color} 100%) fixed;
	background: radial-gradient(ellipse, ${options.innergrad.color} 0%, ${options.outergrad.color} 100%) fixed;
}
h1 {
	color: ${options.h1.color};
}
h2,
h4 {
	color: ${options.h2.color};
}
h3,
h5 {
	color: ${options.h3.color};
}
a {
	color: ${options.a.color};
	border-bottom: 2px solid ${options.a.color};
}
a:hover {
	color: ${options.aHover.color};
    border-bottom: 2px solid ${options.aHover.color};
}
a:visited {
	color: ${options.aHover.color};
    border-bottom: 2px solid ${options.aHover.color};
}
#footer {
	color: ${options.footerColor.color};
	background-color: ${options.footerBackground.color};
}
/********************************************
    SPLASH PAGE STYLING
********************************************/
.splash #article {
	color: ${options.splashColor.color};
	background-color: ${options.splashBackground.color};
}
.splash h1 {
	color: ${options.splashH1.color};
}
.splash h2,
.splash h4 {
	color: ${options.splashH2.color};
}
.splash h3,
.splash h5{
	color: ${options.splashH3.color};
}
.splash a {
    color: ${options.splashA.color};
	border-bottom: 2px solid ${options.splashA.color};
}
.splash a:hover {
	color: ${options.splashAHover.color};
    border-bottom: 2px solid ${options.splashAHover.color};
}
.splash a:visited {
	color: ${options.splashAHover.color};
    border-bottom: 2px solid ${options.splashAHover.color};
}
.splash #footer {
	color: ${options.splashFooterColor.color};
	background-color: ${options.splashFooterBackground.color};
}
/********************************************
    FEATURES STYLING
********************************************/
/* Callout box */
.callout {
    color: ${options.calloutColor.color};
    background: ${options.calloutBackground.color};
}
/* Drop downs */
.drop-down {
    background: ${options.dropdownBackground.color};
}
.drop-down:hover {
    background: ${options.dropdownHover.color};
}
/* Rubric table */
/* Column headings */
.rubric tr:first-child th {
	background-color: ${options.columnHeading.color};
}
/* Row headings */
.rubric th {
    background-color: ${options.rowHeading.color};
}
/* Mouseover popups */
#main .popup {
    border-bottom: dotted 2px ${options.popup.color};
}
#main .popup span {
    background: ${options.popup.color};
}
#main .popup:after {
    border-color: ${options.popup.color} transparent;
}
/* TOA Banners */
h1.prepare,
h2.prepare {
    background: ${options.prepareActivity.color};
}
h1.prepare:before,
h2.prepare:before {
    background: ${options.prepareLabel.color};
}
h1.teach,
h2.teach {
    background: ${options.teachActivity.color};
}
h1.teach:before,
h2.teach:before {
    background: ${options.teachLabel.color};
}
h1.ponder,
h2.ponder {
    background: ${options.ponderActivity.color};
}
h1.ponder:before,
h2.ponder:before {
    background: ${options.ponderLabel.color};
}`;
    return style;
}

function cssTemplate() {
    var loadStyle = template();
    $("#small, #large, #features, #general, #color-wrapper").css("display", "none");
    $("#css-output").css("display", "block");
    document.querySelector("#page-selection input:checked").checked = false;
    document.querySelector("#css-output textarea").innerHTML = loadStyle;
}

function saveToFire(name) {
    var currStyle = JSON.stringify(options);
    if (imgHold) {
        database.ref(name).update({
            style: currStyle,
            images: imgHold
        }, function () {
            undoRedoEnabled = true;
            $('.popupContain').remove();
            $("#saveStatus").html("Saved");
        })
    } else {
        database.ref(name).set({
            style: currStyle
        }, function () {
            undoRedoEnabled = true;
            $('.popupContain').remove();
            $("#saveStatus").html("Saved");
        })
    }
}

function displayData(d, div) {
    var data = d;
    var select = '<select>';

    for (var i in data) {
        select += '<option>' + i + '</option>';
    }
    select += '</select>';
    $('.loadedSelect').html(select);
}

function readFromFire(div, func) {
    database.ref().once("value", function (snap) {
        loadedTemplateData = snap.val();
        func(loadedTemplateData, div);
    })
}

function saveScreen() {

    if (fireTemplateName) {
        saveToFire(fireTemplateName);
    } else {
        var popupContain = $("<div class='popupContain'></div>"),
            div = $("<div class='saveScreen'></div>"),
            shade = $("<div class='shade'></div>"),
            h2 = $("<h2>Save Template</h2>"),
            para = $("<p>This will save your current CSS template to a database.  Please input the course title.</p>"),
            courseNameInput = $("<input type='text' class='courseName' placeholder='Input course name here'>").css({
                "margin-bottom": "5px",
                "padding": "2.5px"
            }),
            submit = $("<input value='Submit to Database' type='button'>").click(function () {
                var name = courseNameInput.val();
                fireTemplateName = name;
                saveToFire(name);
            }),
            cancel = $("<input value='Cancel' type='button'>").css({
                "margin-left": "5px"
            }).click(function () {
                $('.popupContain').remove();
                undoRedoEnabled = true;
            }),
            warning = $("<p><strong>Warning: </strong>You don't have any banners uploaded.  They will not be saved to the database.</p>");

        $(div).append(h2).append(para).append(courseNameInput);

        if ($(".header").children().length < 1) {
            $(div).append(warning);
        }

        $(div).append(submit).append(cancel);

        $(popupContain).append(div).append(shade);

        // Disable undo/redo shortcut keys
        undoRedoEnabled = false;

        $("body").append(popupContain);
    }
}

function loadTemplateOptions() {

    //Clear exisiting banners, color suggestions, and the undo/redo arrays
    $(".header").html("");
    $("#colorPallete").html("");
    undo = [];
    redo = [];
    document.querySelector("#undoButton").disabled = true;
    document.querySelector("#redoButton").disabled = true;

    var selectValue = $(".loadScreen select").val(),
        newOptions = JSON.parse(loadedTemplateData[selectValue].style);

    fireTemplateName = selectValue;

    //CALL FUNCTION WITH TEXT IMAGE DATA

    for (image in loadedTemplateData[selectValue].images) {
        insertBanners(loadedTemplateData[selectValue].images[image], image, 'fireload');
    }

    for (option in options) {
        options[option].color = newOptions[option].color;
        options[option].setColor();
    }
    $('.loadContain').remove();
    // Change to small template
    document.querySelector("input[data-selector='small']").click();
};

function loadScreen(loadedTemplateData) {

    var loadContain = $("<div class='loadContain'></div>"),
        loadedSelect = $("<div class='loadedSelect'><div class='loader'></div></div>"),
        div = $("<div class='loadScreen'></div>"),
        shade = $("<div class='shade'></div>"),
        h2 = $("<h2>Load Template</h2>"),
        para = $("<p>This screen will load any saved templates.</p>"),
        submit = $("<input value='Load Template' type='button'>").click(function () {
            loadTemplateOptions();
        }),
        cancel = $("<input value='Cancel' type='button'>").css({
            "margin-left": "5px"
        }).click(function () {
            $('.loadContain').remove();
        });

    $(div).append(h2).append(para).append(loadedSelect).append(submit).append(cancel);

    $(loadContain).append(div).append(shade);

    $("body").append(loadContain);

    readFromFire(div, displayData);
}

/* Change Page */
function changePage() {
    var page = this.event.srcElement.dataset.selector,
        selector = "#" + page + ", #" + page + "-options";
    // Close all pages and feature options
    $("#small, #large, #features, #css-output, #small-options, #large-options, #features-options").css("display", "none");
    // Display selected page and options
    $(selector + ", #general").css("display", "block");
    $("#color-wrapper").css("display", "");
    // Display correct color suggestions
    if (page === "small" || page === "features") {
        $("#largeBannerSuggestions").css("display", "none");
        $("#smallBannerSuggestions").css("display", "");
    } else {
        $("#smallBannerSuggestions").css("display", "none");
        $("#largeBannerSuggestions").css("display", "");
    }
    // Update selectedRadio
    selectedRadio = document.querySelector("#" + page + "-options input:checked").id;
    // Update colorPicker
    $("#colorPicker").spectrum("set", options[selectedRadio].color);
}

// Each time the colorPicker is clicked to make a change the current color is saved in the undo array
$("#colorPicker").on("dragstart.spectrum", function (e, color) {
    updateUndo(options[selectedRadio].color);
});

function desaturateTOA() {
    // Update color values
    options.prepareActivity.color = "#8ed0cb";
    options.prepareLabel.color = "#49807b";
    options.teachActivity.color = "#9abad6";
    options.teachLabel.color = "#537491";
    options.ponderActivity.color = "#baa4d4";
    options.ponderLabel.color = "#8163a5";
    // Set colors
    options.prepareActivity.setColor();
    options.prepareLabel.setColor();
    options.teachActivity.setColor();
    options.teachLabel.setColor();
    options.ponderActivity.setColor();
    options.ponderLabel.setColor();
}

function saturateTOA() {
    // Update color values
    options.prepareActivity.color = "#50d0c6";
    options.prepareLabel.color = "#198278";
    options.teachActivity.color = "#66afef";
    options.teachLabel.color = "#1b65a7";
    options.ponderActivity.color = "#c89efa";
    options.ponderLabel.color = "#753cba";
    // Set colors
    options.prepareActivity.setColor();
    options.prepareLabel.setColor();
    options.teachActivity.setColor();
    options.teachLabel.setColor();
    options.ponderActivity.setColor();
    options.ponderLabel.setColor();
}

function useSmallColors() {
    // Update color values
    options.splashBackground.color = "#f0f0f0";
    options.splashColor.color = "#3e3e3e";
    options.splashH1.color = options.h1.color;
    options.splashH2.color = options.h2.color;
    options.splashH3.color = options.h3.color;
    options.splashA.color = options.a.color;
    options.splashAHover.color = options.aHover.color;
    options.splashFooterBackground.color = options.footerBackground.color;
    options.splashFooterColor.color = options.footerColor.color;
    // Set colors
    options.splashBackground.setColor();
    options.splashColor.setColor();
    options.splashH1.setColor();
    options.splashH2.setColor();
    options.splashH3.setColor();
    options.splashA.setColor();
    options.splashAHover.setColor();
    options.splashFooterBackground.setColor();
    options.splashFooterColor.setColor();
}

function updateUndo(oldColor) {
    undo.push({
        page: document.querySelector("#page-options input:checked").dataset.selector,
        key: selectedRadio,
        color: oldColor
    });
    // Make sure undo button isn't disabled
    document.querySelector("#undoButton").disabled = false;
    // Reset redo
    redo = [];
    document.querySelector("#redoButton").disabled = true;
}

function applyUndo() {
    var undoColor,
        pageSelector;
    if (undo.length > 0) {
        undoColor = undo.pop();
        if (undoColor.page != document.querySelector("#page-options input:checked").dataset.selector) {
            pageSelector = "input[data-selector='" + undoColor.page + "']";
            document.querySelector(pageSelector).click();
            undo.push(undoColor);
            return;
        }
        redo.push({
            page: undoColor.page,
            key: undoColor.key,
            color: options[undoColor.key].color
        });

        options[undoColor.key].color = undoColor.color;
        options[undoColor.key].setColor();
        $("#colorPicker").spectrum("set", undoColor.color);
        document.querySelector("#" + undoColor.key).checked = true;
        selectedRadio = undoColor.key;
        document.querySelector("#redoButton").disabled = false;
    }
    if (undo.length === 0) {
        document.querySelector("#undoButton").disabled = true;
    }
    $("#saveStatus").html("");
}

function applyRedo() {
    var redoColor,
        pageSelector;
    if (redo.length > 0) {
        redoColor = redo.pop();
        if (redoColor.page != document.querySelector("#page-options input:checked").dataset.selector) {
            pageSelector = "input[data-selector='" + redoColor.page + "']";
            document.querySelector(pageSelector).click();
            redo.push(redoColor);
            return;
        }
        undo.push({
            page: redoColor.page,
            key: redoColor.key,
            color: options[redoColor.key].color
        });
        pageSelector = "input[data-selector='" + redoColor.page + "']";
        document.querySelector(pageSelector).click();
        options[redoColor.key].color = redoColor.color;
        options[redoColor.key].setColor();
        $("#colorPicker").spectrum("set", redoColor.color);
        document.querySelector("#" + redoColor.key).checked = true;
        selectedRadio = redoColor.key;
        document.querySelector("#undoButton").disabled = false;
    }
    if (redo.length === 0) {
        document.querySelector("#redoButton").disabled = true;
    }
    $("#saveStatus").html("");
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

document.onkeydown = function () {
    if (undoRedoEnabled) {
        if (event.which === 85) {
            applyUndo();
        } else if (event.which === 82) {
            applyRedo();
        }
    }
};
