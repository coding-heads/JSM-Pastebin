const editorDiv = document.getElementById("editor");
const controls = document.querySelector(".controls");
const dimmer = document.querySelector(".dimmer");
const header = document.querySelector(".header");
[...document.querySelectorAll("i")].map((el) => {
  el.addEventListener("click", () => {
    switch (el.id) {
      case "close":
        header.style.opacity = 1;
        dimmer.classList.remove("showDimmer");
        editorDiv.classList.add("shutterCode");
        controls.classList.remove("showControls");

        break;
    }
  });
});
editorDiv.addEventListener("click", () => {
  dimmer.classList.add("showDimmer");
  header.style.opacity = 0.3;
  editorDiv.classList.remove("shutterCode");
  controls.classList.add("showControls");
  setTimeout(() => {
    editor.resize();
    editor.renderer.updateFull();
  }, 500);
});
const editor = ace.edit("editor");
editor.setTheme("ace/theme/tomorrow_night");
//editor.setBackground("white");
editor.session.setMode("ace/mode/javascript");
editor.setShowPrintMargin(false);
editor.renderer.setShowGutter(false);
editor.setAutoScrollEditorIntoView(true);
editor.getSession().setUseWorker(false);
const editor2 = ace.edit("featuredPaste1");
editor2.setTheme("ace/theme/tomorrow_night");
editor2.session.setMode("ace/mode/javascript");
editor2.setShowPrintMargin(false);
editor2.renderer.setShowGutter(false);
editor2.getSession().setUseWorker(false);
editor2.resize();
editor2.renderer.updateFull();
const editor3 = ace.edit("featuredPaste2");
editor3.setTheme("ace/theme/tomorrow_night");
editor3.session.setMode("ace/mode/javascript");
editor3.setShowPrintMargin(false);
editor3.renderer.setShowGutter(false);
editor3.getSession().setUseWorker(false);
editor3.resize();
editor3.renderer.updateFull();
const editor4 = ace.edit("featuredPaste3");
editor4.setTheme("ace/theme/tomorrow_night");
editor4.session.setMode("ace/mode/javascript");
editor4.setShowPrintMargin(false);
editor4.renderer.setShowGutter(false);
editor4.getSession().setUseWorker(false);
editor4.resize();
editor4.renderer.updateFull();
let editors = [editor2, editor3, editor4];
tippy(".fa-circle-user", {
  content: `
  <div class='userTooltip'>
  <div class='ttUser'>
  <i class="fa-solid fa-circle-user"></i> <span class='ttUsername'>JarcobXX12</span>
  </div>
  <div class='ttInteraction'>
    <div>Created on:</div>
    <div><a href='#e'>See their other posts</a></div>
  </div>
  </div>`,
  allowHTML: true,
  interactive: true,
});
tippy(".fa-user-large-slash", {
  content: `
    <div class='userTooltip'>
    <div class='ttUser'>
    <i class="fa-solid fa-circle-user"></i> <span class='ttUsername'>Anonymous</span>
    </div>
    <div class='ttInteraction'>
      <div>Created on:</div>
    </div>
    </div>`,
  allowHTML: true,
  interactive: true,
});
editors.map((ed) => {
  ed.commands.on("exec", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
});
