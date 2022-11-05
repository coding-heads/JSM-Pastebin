const editorDiv = document.getElementById("editor");

const editor = ace.edit("editor");
editor.setTheme("../ace/theme/tomorrow_night");
//editor.setBackground("white");
editor.session.setMode("../ace/mode/javascript");
editor.setShowPrintMargin(false);
editor.renderer.setShowGutter(false);
editor.setAutoScrollEditorIntoView(true);
editor.getSession().setUseWorker(false);
