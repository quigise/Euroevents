/**
 * Soumission AJAX des formulaires Web3Forms.
 * Affiche un message inline, désactive le bouton pendant l'envoi,
 * et redirige vers /merci/ en cas de succès (configurable).
 */
export function submitWeb3Form(form: HTMLFormElement, redirectTo = "/merci/") {
  const status = form.querySelector<HTMLElement>(".form-status");
  const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validation native HTML5
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const originalLabel = submitBtn?.textContent ?? "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours…";
    }
    if (status) {
      status.textContent = "";
      status.className = "form-status";
    }

    try {
      const formData = new FormData(form);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        // Succès : redirection vers la page de remerciement.
        window.location.href = redirectTo;
      } else {
        throw new Error(data.message || "Échec de l'envoi");
      }
    } catch (err) {
      if (status) {
        status.textContent =
          "Une erreur est survenue. Merci de réessayer ou de nous appeler directement.";
        status.classList.add("is-error");
      }
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    }
  });
}
