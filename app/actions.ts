"use server";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function sendContact(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Add your name, email and message." };
  }

  console.info("Portfolio contact form submission", {
    name,
    email,
    message,
    submittedAt: new Date().toISOString(),
  });

  return {
    ok: true,
    message:
      "Message captured by the server action. Add an email provider or CRM endpoint before deploying.",
  };
}
