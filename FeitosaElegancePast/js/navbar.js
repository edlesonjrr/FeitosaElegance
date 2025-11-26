// js/navbar.js
import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const ADMIN_EMAIL = "feitosaelegance@gmail.com";

// =============================
// CACHE LOCAL PARA EVITAR DELAY
// =============================
function saveUserCache(name) {
  sessionStorage.setItem("userDisplayName", name);
}

function loadUserCache() {
  return sessionStorage.getItem("userDisplayName");
}

// =============================
// CONTROLE DE VISIBILIDADE
// =============================
function setVisibility(el, visible) {
  if (!el) return;
  el.classList.remove("hidden", "visible");
  el.classList.add(visible ? "visible" : "hidden");
}

// =============================
// CHECAR ADMIN
// =============================
async function isAdminUser(user) {
  if (!user) return false;

  if (user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()) return true;

  try {
    const snap = await getDoc(doc(db, "users", user.uid));
    return snap.exists() && snap.data()?.role === "admin";
  } catch (e) {
    console.error("Erro ao checar admin:", e);
    return false;
  }
}

// =============================
// ATUALIZAR NAVBAR DO USUÁRIO
// =============================
async function updateUserUI(user) {
  const userIcon = document.getElementById("user-icon");
  const userMenu = document.getElementById("user-menu");

  if (!userIcon || !userMenu) return;

  // Sem usuário
  if (!user) {
    setVisibility(userMenu, false);
    userIcon.textContent = "";
    return;
  }

  // ✅ MOSTRA IMEDIATO PELO CACHE (zero delay)
  const cachedName = loadUserCache();
  if (cachedName) {
    userIcon.innerHTML = `<i class="icon-user"></i> ${cachedName}`;
    setVisibility(userMenu, true);
  }

  // 🔄 Atualiza silenciosamente com Firestore real
  try {
    const snap = await getDoc(doc(db, "users", user.uid));
    let displayName = user.email.split("@")[0];

    if (snap.exists()) {
      const data = snap.data();
      displayName = data.name || displayName;
    }

    userIcon.innerHTML = `<i class="icon-user"></i> ${displayName}`;
    setVisibility(userMenu, true);

    saveUserCache(displayName);

  } catch (err) {
    console.error("Erro ao carregar dados do usuário:", err);
  }
}

// =============================
// ESTADO DE AUTENTICAÇÃO
// =============================
async function handleAuth(user) {
  const adminLink = document.getElementById("admin-link");

  if (!user) {
    updateUserUI(null);
    setVisibility(adminLink, false);
    return;
  }

  updateUserUI(user);

  const isAdmin = await isAdminUser(user);
  setVisibility(adminLink, isAdmin);
}

// =============================
// INIT
// =============================
document.addEventListener("DOMContentLoaded", () => {

  // PRE-CARREGA VISUAL BASEADO EM CACHE
  const cachedName = loadUserCache();
  const userIcon = document.getElementById("user-icon");
  const userMenu = document.getElementById("user-menu");

  if (cachedName && userIcon && userMenu) {
    userIcon.innerHTML = `<i class="icon-user"></i> ${cachedName}`;
    setVisibility(userMenu, true);
  }

  // LOGOUT
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn?.addEventListener("click", async (e) => {
    e.preventDefault();
    sessionStorage.clear();
    await signOut(auth);
    window.location.href = "index.html";
  });

  // OBSERVAR AUTH
  onAuthStateChanged(auth, (user) => {
    handleAuth(user);
  });

});
