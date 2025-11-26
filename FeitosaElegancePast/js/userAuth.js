// userAuth.js
import { auth, db } from "./firebase.js";
import {
    onAuthStateChanged,
    updatePassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import {
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// ELEMENTOS DA NAVBAR
const adminLink = document.getElementById("admin-link");
const userMenu = document.getElementById("user-menu");
const userIcon = document.getElementById("user-icon");
const logoutBtn = document.getElementById("logout-btn");

// ELEMENTOS DO PERFIL
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userAge = document.getElementById("userAge");
const userGender = document.getElementById("userGender");

// FORMULÁRIOS
const editForm = document.getElementById("editForm");
const passwordForm = document.getElementById("passwordForm");

// BOTÕES PAINEL
const btnEdit = document.getElementById("btnEdit");
const btnPassword = document.getElementById("btnPassword");

// CAMPOS EDITAR INFO
const newNameField = document.getElementById("newName");
const newAgeField = document.getElementById("newAge");
const newGenderField = document.getElementById("newGender");
const saveInfoBtn = document.getElementById("saveInfo");

// ALTERAR SENHA
const newPasswordField = document.getElementById("newPassword");
const confirmPasswordField = document.getElementById("confirmPassword");
const updatePasswordBtn = document.getElementById("updatePassword");
const cancelPasswordBtn = document.getElementById("cancelPassword");

// =============================
//  AUTENTICAÇÃO AUTOMÁTICA
// =============================
onAuthStateChanged(auth, async (user) => {
    if (!user) return; // não redireciona nem alerta em páginas públicas

    try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (!snap.exists()) return;

        const data = snap.data();

        if (userName && userEmail && userAge && userGender) {
            userName.textContent = data.name || "Não informado";
            userEmail.textContent = data.email || user.email;
            userAge.textContent = data.age || "Não informado";
            userGender.textContent = data.gender || "Não informado";
        }

        if (userIcon && userMenu) {
            const displayName = data.name || user.email.split("@")[0];
            userIcon.innerHTML = `<i class="icon-user"></i> ${displayName}`;
            userMenu.style.display = "block";
        }

        if (adminLink && data.role === "admin") {
            adminLink.style.display = "block";
        }

    } catch (err) {
        console.error("Erro ao carregar usuário:", err);
    }
});


// =============================
//    MOSTRAR / OCULTAR FORMS
// =============================
btnEdit?.addEventListener("click", () => {
    editForm.classList.toggle("d-none");
    passwordForm.classList.add("d-none");
});

btnPassword?.addEventListener("click", () => {
    passwordForm.classList.toggle("d-none");
    editForm.classList.add("d-none");
});
cancelPasswordBtn?.addEventListener("click", () => {
    passwordForm.classList.add("d-none");
});

// =============================
//    SALVAR ALTERAÇÕES
// =============================
saveInfoBtn?.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
        await updateDoc(doc(db, "users", user.uid), {
            name: newNameField.value.trim() || null,
            age: newAgeField.value.trim() || null,
            gender: newGenderField.value || null,
        });
        alert("✔ Informações salvas! Atualizando...");
        location.reload();

    } catch (err) {
        console.error(err);
        alert("❌ Erro ao atualizar as informações");
    }
});

// =============================
//   ALTERAR SENHA (FUNCIONANDO)
// =============================
updatePasswordBtn?.addEventListener("click", async () => {
    const user = auth.currentUser;
    if (!user) return;

    const newPass = newPasswordField.value.trim();
    const confirmPass = confirmPasswordField.value.trim();

    if (newPass.length < 6) return alert("⚠ A senha deve ter pelo menos 6 caracteres.");
    if (newPass !== confirmPass) return alert("❌ As senhas não conferem!");

    try {
        await updatePassword(user, newPass);
        newPasswordField.value = "";
        confirmPasswordField.value = "";
        alert("✔ Senha atualizada com sucesso!");

    } catch (err) {
        console.error(err);
        if (err.code === "auth/requires-recent-login") {
            alert("⚠ Faça login novamente para alterar a senha.");
            return (window.location.href = "cadastro.html");
        }
        alert("❌ Erro ao atualizar senha.");
    }
});

// =============================
//      MOSTRAR / OCULTAR SENHA
// =============================
window.togglePasswordVisibility = function (id, btn) {
    const input = document.getElementById(id);
    if (!input) return;

    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    btn.textContent = isPassword ? "🙈" : "👁";

    // Evita bug do clique
    btn.addEventListener("mousedown", e => e.preventDefault(), { once: true });

    // Mantém cursor no fim
    if (document.activeElement === input) {
        input.focus();
        try {
            const len = input.value.length;
            input.setSelectionRange(len, len);
        } catch (_) {}
    }
};

// =============================
//            LOGOUT
// =============================
logoutBtn?.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "index.html";
});
