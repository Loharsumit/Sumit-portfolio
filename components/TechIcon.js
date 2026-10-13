export default function TechIcon({ name, size = 24, className = "" }) {
  const norm = name?.toLowerCase() || "";

  if (norm.includes("react") && !norm.includes("testing")) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" width={size} height={size} className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (norm.includes("vue")) {
    return (
      <svg viewBox="0 0 261.76 226.69" width={size} height={size} className={className}>
        <path d="M161.096.001l-30.225 52.351L100.647.001H0l130.871 226.688L261.749.001z" fill="#41b883" />
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01 78.526-136.01z" fill="#34495e" />
      </svg>
    );
  }

  if (norm.includes("redux")) {
    return (
      <svg viewBox="0 0 100 100" width={size} height={size} className={className}>
        <circle cx="50" cy="50" r="10" fill="#764abc" />
        <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke="#764abc" strokeWidth="5.5" transform="rotate(30 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke="#764abc" strokeWidth="5.5" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke="#764abc" strokeWidth="5.5" transform="rotate(150 50 50)" />
      </svg>
    );
  }

  if (norm.includes("typescript")) {
    return (
      <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
        <rect width="128" height="128" rx="16" fill="#3178c6" />
        <path fill="#ffffff" d="M68.5 76.5c-1.3 5.4-4.8 9.2-10.4 11.2-5.7 2-11.8 1.9-17.6-.2-5.4-2-9.4-5.8-12-11.2 3.1-1.9 6.2-3.8 9.3-5.7 1.7 3.3 4 5.5 7.1 6.5 3 .9 6 .6 8.7-.9 2.5-1.4 3.7-3.7 3.5-6.8-.2-2.9-1.9-5.1-5.1-6.5-2.7-1.2-5.6-2.1-8.5-3.1-4.7-1.6-8.9-3.8-12.4-7.2-3.3-3.2-4.9-7.3-4.7-12.1.2-5 2.2-9.2 6-12.5 3.9-3.4 8.7-5.1 14.2-5.2 6.1-.1 11.6 1.7 16.5 5.5-2.9 2-5.7 3.9-8.5 5.8-1.5-1.6-3.3-2.8-5.3-3.5-2.2-.8-4.6-1-7-.6-2.6.4-4.8 1.6-6.4 3.6-1.5 1.9-2.1 4.1-1.8 6.4.3 2.5 1.8 4.4 4.4 5.6 2.3 1.1 4.8 1.9 7.3 2.7 5.1 1.7 9.8 4 14 7.6 4.3 3.6 6.5 8.4 6.7 14.9zM102.7 31.4v68.3H88.5V31.4h-21V19.7h56.2v11.7h-21z" />
      </svg>
    );
  }

  if (norm.includes("javascript")) {
    return (
      <svg viewBox="0 0 630 630" width={size} height={size} className={className}>
        <rect width="630" height="630" rx="80" fill="#f7df1e" />
        <path fill="#000000" d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-36.8 23.7c-9.7-17.3-22.4-24.1-47.4-24.1-21.1 0-33.8 11.4-33.8 26.2 0 17.8 11 25 36.4 36l14.8 6.35c50.3 21.6 78.7 44.4 78.7 91.8 0 52.4-41.4 82.5-98.1 82.5-54.6 0-89.2-26.7-104.9-57.5zm-180.6 6.35c0 38.9-22.4 65.1-60.5 65.1-34.7 0-54.6-17.8-64.7-36.4l34.7-20.3c6.8 11.4 14.8 18.2 29.6 18.2 13.5 0 22.8-5.5 22.8-26.6v-212.8h48.2v212.8z" />
      </svg>
    );
  }

  if (norm.includes("html")) {
    return (
      <svg viewBox="0 0 512 512" width={size} height={size} className={className}>
        <path fill="#e34f26" d="M71 460L30 0h452l-41 460-185 52z" />
        <path fill="#ef652a" d="M256 472l149-41 35-391H256v432z" />
        <path fill="#ebebeb" d="M256 208H165l-8-88h99V75H77l2 22 21 237h156v-45z M256 386l-1 1-66-18-4-51h-44l7 89 108 30v-51z" />
        <path fill="#ffffff" d="M256 208h91l-9 97-82 22v46l125-34 1-13 14-162 2-24H256v45z M256 75v45h179l2-22 2-23H256z" />
      </svg>
    );
  }

  if (norm.includes("css")) {
    if (norm.includes("tailwind")) {
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="#38bdf8" className={className}>
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 512 512" width={size} height={size} className={className}>
        <path fill="#1572b6" d="M71 460L30 0h452l-41 460-185 52z" />
        <path fill="#33a9dc" d="M256 472l149-41 35-391H256v432z" />
        <path fill="#ebebeb" d="M256 208H165l-8-88h99V75H77l2 22 21 237h156v-45z M256 386l-1 1-66-18-4-51h-44l7 89 108 30v-51z" />
        <path fill="#ffffff" d="M256 208h91l-9 97-82 22v46l125-34 1-13 14-162 2-24H256v45z M256 75v45h179l2-22 2-23H256z" />
      </svg>
    );
  }

  if (norm.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#38bdf8" className={className}>
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    );
  }

  if (norm.includes("bootstrap")) {
    return (
      <svg viewBox="0 0 16 16" width={size} height={size} className={className}>
        <rect width="16" height="16" rx="3.5" fill="#7952b3" />
        <path fill="#ffffff" d="M8.533 12.744H4.5v-9.45h4.05c1.47 0 2.502.26 3.102.776.597.514.896 1.25.896 2.208 0 .61-.137 1.134-.41 1.572a3.03 3.03 0 0 1-1.144 1.054c.594.226 1.066.602 1.417 1.127.351.522.527 1.173.527 1.954 0 1.077-.333 1.93-1 2.557-.667.625-1.633.938-2.905.938zm-2.43-5.275h2.24c.732 0 1.282-.132 1.65-.397.37-.266.554-.683.554-1.25 0-.583-.178-.992-.533-1.226-.353-.236-.91-.354-1.67-.354H6.103v3.227zm0 1.344v3.628h2.46c.866 0 1.503-.15 1.91-.45.41-.303.614-.77.614-1.4 0-.643-.21-1.11-.63-1.4-.418-.292-1.07-.438-1.954-.438H6.103z" />
      </svg>
    );
  }

  if (norm.includes("material")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
        <path fill="#007fff" d="M0 0h6.81v3.405H3.405v13.62H0V0zm17.19 0H24v17.025h-3.405V3.405h-3.405V0zm-6.81 6.81h3.405v10.215H10.38V6.81zm-3.405 6.81h3.405v10.215H6.975V13.62zm10.215 0h3.405v10.215H17.19V13.62z" />
      </svg>
    );
  }

  if (norm.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#ffffff" className={className}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }

  if (norm.includes("git")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
        <path fill="#f05032" d="M2.6 10.59L10.6 2.6c.8-.8 2.09-.8 2.89 0l9.91 9.91c.8.8.8 2.09 0 2.89L13.49 23.3c-.8.8-2.09.8-2.89 0L2.6 15.39c-.8-.8-.8-2.09 0-2.89zm10.02 5.61c.42-.42.6-.99.53-1.55l2.42-1.4c.54.41 1.3.38 1.8-.13.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0-.49.49-.55 1.23-.17 1.78l-2.3 1.33c-.5-.33-1.15-.36-1.68-.07L9.4 12.35c.16-.38.16-.83-.02-1.23l2.84-2.84c.48.24 1.07.2 1.51-.24.59-.59.59-1.54 0-2.12-.59-.59-1.54-.59-2.12 0-.48.48-.52 1.22-.12 1.74L8.73 10.54c-.52-.3-1.2-.24-1.68.24-.59.59-.59 1.54 0 2.12.59.59 1.54.59 2.12 0 .42-.42.54-.99.37-1.51l1.73 1.73c-.02.16-.02.32 0 .48.1.91.79 1.63 1.7 1.73.66.07 1.29-.16 1.75-.62z" />
      </svg>
    );
  }

  if (norm.includes("vite")) {
    return (
      <svg viewBox="0 0 256 257" width={size} height={size} className={className}>
        <path fill="url(#viteGrad)" d="M255.15 37.94L134.9 252.98a7.07 7.07 0 0 1-12.75 0L.85 37.94a7.1 7.1 0 0 1 8.23-10.28l117.87 36.96a7.1 7.1 0 0 0 4.1 0L246.92 27.66a7.1 7.1 0 0 1 8.23 10.28z" />
        <path fill="#ffc700" d="M185.43 14.86L98.54 135.25l45.24 13.91-49.33 69.58 69.45-121.2-46.06-13.88 67.59-68.8z" />
        <defs>
          <linearGradient id="viteGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#41d1ff" />
            <stop offset="100%" stopColor="#bd34fe" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (norm.includes("vercel")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#ffffff" className={className}>
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    );
  }

  if (norm.includes("netlify")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#00c7b7" className={className}>
        <path d="M16.94 9.17l-3.89-3.9 1.41-1.42a1 1 0 0 1 1.42 0l2.48 2.49a1 1 0 0 1 0 1.41l-1.42 1.42zm-5.32 5.32L6.15 9l5.47-5.46 3.89 3.89-3.89 3.89-3.88-3.89-1.42 1.42 5.3 5.3zm-5.46 5.46l-2.48-2.49a1 1 0 0 1 0-1.41l1.41-1.42 3.9 3.9-1.42 1.42a1 1 0 0 1-1.41 0zm11.4-5.46l-5.3-5.3 1.41-1.42 3.89 3.89 3.89-3.89 1.41 1.42-5.3 5.3z" />
      </svg>
    );
  }

  if (norm.includes("api")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" stroke="#fbbf24" strokeWidth="3" />
        <line x1="6" y1="18" x2="6.01" y2="18" stroke="#fbbf24" strokeWidth="3" />
        <path d="M12 6h6M12 18h6" stroke="#38bdf8" strokeWidth="2" />
      </svg>
    );
  }

  if (norm.includes("jest")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
        <path fill="#c21325" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    );
  }

  if (norm.includes("testing")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#fc4f4f" className={className}>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.75-6.85l-.75 4a.5.5 0 0 1-.5.4h-3a.5.5 0 0 1-.5-.4l-.75-4a1 1 0 0 1 .45-.95l2.25-1.35a1 1 0 0 1 1.05 0l2.25 1.35a1 1 0 0 1 .45.95z" />
      </svg>
    );
  }

  if (norm.includes("storybook")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#ff4785" className={className}>
        <path d="M17.4 3.6L16.7 5H6.2v14h11.6V8.6l1.4-2.8V21a1 1 0 0 1-1 1H5.2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11.2a1 1 0 0 1 1 .6zM13.7 9c.7 0 1.3.4 1.3 1 0 .7-.6 1.2-1.3 1.2H11v2h2.7c1.7 0 3.2-1.2 3.2-3.1 0-1.8-1.5-3.1-3.2-3.1H9v6.3h2V9h2.7z" />
      </svg>
    );
  }

  if (norm.includes("claude")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#d97757" className={className}>
        <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
      </svg>
    );
  }

  if (norm.includes("cursor")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="3 3 10.07 19.97 12.58 12.58 19.97 10.07 3 3" fill="rgba(56,189,248,0.2)" />
      </svg>
    );
  }

  if (norm.includes("copilot")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#a78bfa" className={className}>
        <path d="M12 2a6 6 0 0 0-6 6v1H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h1a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-1V8a6 6 0 0 0-6-6zm-3 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
      </svg>
    );
  }

  if (norm.includes("chatgpt")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="#10a37f" className={className}>
        <path d="M20.5 10.2a5.5 5.5 0 0 0-4.7-4.7 5.5 5.5 0 0 0-7.8-1.7 5.5 5.5 0 0 0-4.5 4.9 5.5 5.5 0 0 0 .9 6.8 5.5 5.5 0 0 0 4.7 4.7 5.5 5.5 0 0 0 7.8 1.7 5.5 5.5 0 0 0 4.5-4.9 5.5 5.5 0 0 0-.9-6.8zm-8.5 7.8a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z" />
      </svg>
    );
  }

  if (norm.includes("code") || norm.includes("vs")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
        <path fill="#007acc" d="M17.583 23.97a1.69 1.69 0 0 0 1.284-.373l4.577-3.834a1.703 1.703 0 0 0 .556-1.3V5.538a1.703 1.703 0 0 0-.556-1.3L18.867.404a1.69 1.69 0 0 0-2.023.111L7.491 8.23 3.659 5.309a1.032 1.032 0 0 0-1.299.043L.374 7.025a1.032 1.032 0 0 0-.007 1.597l3.295 2.87-3.295 2.871a1.032 1.032 0 0 0 .007 1.597l1.986 1.673a1.032 1.032 0 0 0 1.299.043l3.832-2.921 9.353 7.715a1.685 1.685 0 0 0 1.077.5zm.417-6.23V6.26l-6.837 5.74 6.837 5.74z" />
      </svg>
    );
  }

  if (norm.includes("responsive")) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="3" width="20" height="13" rx="2" ry="2" stroke="#cbd5e1" strokeWidth="1.8" />
        <line x1="8" y1="20" x2="16" y2="20" stroke="#cbd5e1" strokeWidth="1.8" />
        <line x1="12" y1="16" x2="12" y2="20" stroke="#cbd5e1" strokeWidth="1.8" />
        <rect x="14" y="8" width="7" height="11" rx="1.5" fill="#08090d" stroke="#ff7a18" strokeWidth="1.8" />
        <circle cx="17.5" cy="16.5" r="0.7" fill="#ff7a18" />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="#ff9e3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
