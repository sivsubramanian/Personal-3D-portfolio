export const social = [
  { url: "mailto:sivasufriend@gmail.com", name: "mail" },
  { url: "https://www.linkedin.com/in/sivasubramanian8", name: "linkedin" },
  { url: "https://github.com/sivsubramanian", name: "github" },
  { url: "https://www.instagram.com/sivaaxyz_?stkn=ZGFoc3NndHl0cDI5", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
