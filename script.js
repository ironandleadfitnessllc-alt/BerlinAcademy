function saveTasks() {
  alert("Tasks saved! (This is a placeholder — real saving requires backend setup)");
}
function saveJournal() {
  alert("Journal notes saved!");
}
function uploadResource() {
  alert("Resource uploaded!");
}
function saveProgress() {
  alert("Progress notes saved!");
}
function login() {
  const isParent = document.getElementById('parentMode')?.checked;
  if (isParent) {
    window.location.href = "parent-dashboard.html";
  } else {
    window.location.href = "berlin-dashboard.html";
  }
}
const day = new Date().getDay();
const pages = {
  1: "berlin-dashboard.html",
  2: "tuesday-dashboard.html",
  3: "wednesday-dashboard.html",
  4: "thursday-dashboard.html",
  5: "friday-dashboard.html"
};
if (pages[day] && window.location.pathname.includes("calendar-loader")) {
  window.location.href = pages[day];
}
