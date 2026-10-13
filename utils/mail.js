/**
 * Utility functions for handling email interactions across desktop and mobile.
 * On desktop: redirects to Gmail compose in a new tab for seamless webmail experience.
 * On mobile: invokes native mail application via mailto protocol.
 */

export function getGmailComposeUrl(email, subject = "", body = "") {
  const params = [];
  if (subject) params.push(`su=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length ? `&${params.join("&")}` : "";
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}${query}`;
}

export function getMailtoUrl(email, subject = "", body = "") {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length ? `?${params.join("&")}` : "";
  return `mailto:${email}${query}`;
}

export function openMail(email, subject = "", body = "") {
  if (typeof window === "undefined") return;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent || ""
  );

  if (isMobile) {
    window.location.href = getMailtoUrl(email, subject, body);
  } else {
    window.open(getGmailComposeUrl(email, subject, body), "_blank", "noopener,noreferrer");
  }
}
