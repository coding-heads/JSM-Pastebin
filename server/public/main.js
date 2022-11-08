const editorDiv = document.getElementById("editor");
const controls = document.querySelector(".controls");
const dimmer = document.querySelector(".dimmer");
const header = document.querySelector(".header");
[...document.querySelectorAll("i")].map((el) => {
  el.addEventListener("click", async () => {
    switch (el.id) {
      case "close":
        header.style.opacity = 1;
        dimmer.classList.remove("showDimmer");
        editorDiv.classList.add("shutterCode");
        controls.classList.remove("showControls");

        break;
      case "save":
        console.log(editorDiv.innerText);
        let res = await fetch("/pastes/new", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: editorDiv.innerText,
          }),
        });
        let v = await res.json();
        console.log(v);
        window.location.href = "./view/" + v.id;
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

const updateEditor = (editor, printMargin, showGutter, useWorker, resizeAndUpdate)=>{
  editor.setTheme('ace/theme/tomorrow_night');
  editor.session.setMode('ace/mode/javascript');
  editor.setShowPrintMargin(printMargin);
  editor.renderer.setShowGutter(showGutter);
  editor.getSession().setUseWorker(useWorker);
  if (!resizeAndUpdate) return;
  editor.resize();
  editor.renderer.updateFull();
}

const editor = ace.edit('editor');
updateEditor(editor, false, false, false, false);
editor.setAutoScrollEditorIntoView(true);

const editor2 = ace.edit('featuredPaste1');
updateEditor(editor2, false, false, false, true);

const editor3 = ace.edit('featuredPaste2');
updateEditor(editor3, false, false, false, true);

const editor4 = ace.edit('featuredPaste3');
updateEditor(editor4, false, false, false, true);

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
