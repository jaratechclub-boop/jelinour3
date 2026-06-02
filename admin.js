async function postNote() {

  const title =
    document.getElementById("noteTitle").value;

  const content =
    document.getElementById("noteContent").value;

  await db.collection("notes").add({
    title,
    content,
    createdAt: Date.now()
  });

  alert("Note Published");
}
