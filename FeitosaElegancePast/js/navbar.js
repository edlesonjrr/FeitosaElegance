// js/navbar.js
import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const ADMIN_EMAIL = "feitosaelegance@gmail.com"; // email admin preferido

// IDs esperados no HTML:
// - admin-link      (a href="admin.html" id="admin-link")
// - user-menu       (li dropdown container, id="user-menu")
// - user-icon       (elemento dentro de user-menu para mostrar nome/ícone, id="user-icon")
// - logout-btn      (botao/link de logout, id="logout-btn")

function showElement(id, show = true) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = show ? "" : "none";
}

async function checkIfAdmin(user) {
  if (!user) return false;

  // 1) fallback rápido por email
  if (user.email && user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
    return true;
  }

  // 2) verifica role no Firestore
  try {
    const snap = await getDoc(doc(db, "users", user.uid));
    if (snap.exists()) {
      const data = snap.data();
      if (data && data.role && String(data.role).toLowerCase() === "admin") {
        return true;
      }
    }
  } catch (err) {
    console.error("Erro ao verificar role admin no Firestore:", err);
  }
  return false;
}

function populateUserMenu(user) {
  // mostra o menu do usuário com nome/email e logout
  const userIcon = document.getElementById("user-icon");
  const userMenu = document.getElementById("user-menu");
  if (!userMenu || !userIcon) return;

  // mostrar nome (ou email)
  const nameToShow = (user.displayName && user.displayName.trim()) ? user.displayName : user.email;
  userIcon.textContent = nameToShow;

  showElement("user-menu", true);
}

function clearUserMenu() {
  showElement("user-menu", false);
  const userIcon = document.getElementById("user-icon");
  if (userIcon) userIcon.textContent = "";
}

async function handleAuthState(user) {
  if (!user) {
    // usuário deslogado
    showElement("admin-link", false);
    clearUserMenu();
    console.log("Navbar: usuário deslogado");
    return;
  }

  // usuário logado: popular menu e checar admin
  populateUserMenu(user);

  try {
    const isAdmin = await checkIfAdmin(user);
    showElement("admin-link", !!isAdmin);
    console.log("Navbar: usuário logado:", user.email, "isAdmin:", isAdmin);
  } catch (err) {
    console.error("Navbar: erro ao checar admin:", err);
    showElement("admin-link", false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // inicial: escondemos elementos caso não existam
  showElement("admin-link", false);
  showElement("user-menu", false);

  // logout handler (delegado)
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async (e) => {
      e.preventDefault();
      try {
        await signOut(auth);
        // após signOut, onAuthStateChanged será chamado e esconderá tudo
        window.location.href = "index.html"; // redireciona à home
      } catch (err) {
        console.error("Erro ao deslogar:", err);
        alert("Erro ao sair. Tente novamente.");
      }
    });
  }

  // observa alterações de autenticação
  onAuthStateChanged(auth, (user) => {
    handleAuthState(user);
  });
});
