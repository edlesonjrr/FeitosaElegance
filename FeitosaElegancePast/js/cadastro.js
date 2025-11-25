// js/cadastro.js
import { auth, db } from "./firebase.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

/* ===========================
   UTIL: MENSAGEM DE FEEDBACK
   =========================== */
function showMessage(container, message, type = "error") {
    if (!container) return;
    container.innerHTML = `
    <p class="${type === "error" ? "error-msg" : "success-msg"}">
      ${message}
    </p>
  `;
}

/* ===========================
   UTIL: ATIVA/DESATIVA BOTÃO
   =========================== */
function setFormProcessing(form, processing = true) {
    if (!form) return;
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
        btn.disabled = processing;
        btn.style.opacity = processing ? "0.6" : "1";
        btn.textContent = processing ? (form.dataset.busyText || "Processando...") : (form.dataset.submitText || btn.getAttribute("data-label") || btn.textContent);
    }
}

/* ===========================
   TOGGLE VISUALIZAR SENHA
   - adiciona o ícone ao lado do input de senha automaticamente
   - suporta inputs com id: loginPassword e signupPassword
   - também expõe window.togglePassword para compatibilidade com onclick inline
   =========================== */
function createToggleForInput(input) {
    if (!input) return;

    // evita duplicar toggle
    if (input.parentElement.querySelector('.toggle-password')) {
        return;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'toggle-password';
    btn.setAttribute('aria-label', 'Mostrar senha');
    btn.setAttribute('title', 'Mostrar senha');
    btn.style.border = 'none';
    btn.style.background = 'transparent';
    btn.style.cursor = 'pointer';
    btn.style.userSelect = 'none';
    btn.style.fontSize = '18px';
    btn.textContent = '👁';

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (input.type === 'password') {
            input.type = 'text';
            btn.textContent = '🙈';
            btn.setAttribute('aria-label', 'Ocultar senha');
            btn.setAttribute('title', 'Ocultar senha');
        } else {
            input.type = 'password';
            btn.textContent = '👁';
            btn.setAttribute('aria-label', 'Mostrar senha');
            btn.setAttribute('title', 'Mostrar senha');
        }
        input.focus();
    });

    // Tenta inserir imediatamente após o input; se o layout for diferente, o CSS do projeto deve posicioná-lo.
    input.insertAdjacentElement('afterend', btn);
}

// Função global caso existam onclick inline no HTML (compatibilidade)
window.togglePassword = function togglePassword(id, element) {
    const input = document.getElementById(id);
    if (!input) return;
    if (input.type === 'password') {
        input.type = 'text';
        if (element) element.textContent = '🙈';
    } else {
        input.type = 'password';
        if (element) element.textContent = '👁';
    }
    input.focus();
};

/* ===========================
   INICIALIZAÇÃO: adiciona toggles pra inputs existentes
   =========================== */
function initPasswordToggles() {
    const ids = ['signupPassword', 'loginPassword'];
    ids.forEach(id => {
        const input = document.getElementById(id);
        if (input) createToggleForInput(input);
    });
}

/* ===========================
   CADASTRO
   =========================== */
const signupForm =
    document.getElementById("signupForm") ||
    document.querySelector(".sign-up form");
const signupMsg = document.querySelector(".sign-up .feedback-msg") || null;

if (signupForm) {
    const submitBtn = signupForm.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.setAttribute("data-label", submitBtn.textContent);
        submitBtn.dataset.submitText = submitBtn.textContent;
    }

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // <-- MANTER

        // ❌ REMOVIDO: initPasswordToggles();

        const name = signupForm.querySelector("#signupName")?.value.trim() || "";
        const email = signupForm.querySelector("#signupEmail")?.value.trim() || "";
        const password = signupForm.querySelector("#signupPassword")?.value || "";

        if (!name || !email || !password) {
            return showMessage(signupMsg, "Preencha todos os campos!", "error");
        }

        if (password.length < 6) {
            return showMessage(signupMsg, "A senha deve ter no mínimo 6 caracteres!", "error");
        }

        try {
            setFormProcessing(signupForm, true);

            const result = await createUserWithEmailAndPassword(auth, email, password);
            const user = result.user;

            await setDoc(doc(db, "users", user.uid), {
                name,
                email,
                role: "user",
                createdAt: new Date(),
            });

            showMessage(signupMsg, "Cadastro realizado com sucesso!", "success");

            setTimeout(() => (window.location.href = "index.html"), 1200);
        } catch (err) {
            console.error("Erro no cadastro:", err);

            try {
                if (auth?.currentUser) {
                    await auth.currentUser.delete().catch(() => { });
                }
            } catch (deleteErr) {
                console.warn("Falha ao tentar deletar usuário incompleto:", deleteErr);
            }

            let msg = "Ocorreu um erro ao cadastrar.";
            if (err?.code) {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        msg = "Este email já está em uso.";
                        break;
                    case "auth/invalid-email":
                        msg = "Email inválido!";
                        break;
                    case "auth/weak-password":
                        msg = "A senha é muito fraca!";
                        break;
                    default:
                        msg = err.message || msg;
                }
            }

            showMessage(signupMsg, msg, "error");
        } finally {
            setFormProcessing(signupForm, false);
        }
    });
}


/* ===========================
   LOGIN
   =========================== */
const loginForm =
    document.getElementById("loginForm") ||
    document.querySelector(".sign-in form");
const loginMsg = document.querySelector(".sign-in .feedback-msg") || null;

if (loginForm) {
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.setAttribute("data-label", submitBtn.textContent);
        submitBtn.dataset.submitText = submitBtn.textContent;
    }

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = loginForm.querySelector("#loginEmail")?.value.trim() || "";
        const password = loginForm.querySelector("#loginPassword")?.value || "";

        if (!email || !password) {
            return showMessage(loginMsg, "Preencha todos os campos!", "error");
        }

        try {
            setFormProcessing(loginForm, true);

            // LOGIN (não cadastro!)
            await signInWithEmailAndPassword(auth, email, password);

            showMessage(loginMsg, "Login realizado com sucesso!", "success");
            setTimeout(() => (window.location.href = "index.html"), 1200);

        } catch (err) {
            console.error("Erro no login:", err);

            let msg = "Ocorreu um erro ao fazer login.";

            if (err?.code) {
                switch (err.code) {
                    case "auth/wrong-password":
                    case "auth/user-not-found":
                    case "auth/invalid-credential":  // <-- ADICIONADO AQUI!
                        msg = "Email ou senha incorretos.";
                        break;
                    case "auth/invalid-email":
                        msg = "Email inválido!";
                        break;
                    case "auth/too-many-requests":
                        msg = "Muitas tentativas! Tente novamente mais tarde.";
                        break;
                    default:
                        msg = err.message || msg;
                }
            }

            showMessage(loginMsg, msg, "error");
        } finally {
            setFormProcessing(loginForm, false);
        }
    });
}



