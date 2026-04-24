export const PERSONAL_INFO = {
  name: "Andy Rodrigo Gonzales Castillo",
  role: "Desarrollador Backend",
  email: "andygonzales.2005@outlook.es",
  location: "Lima, Perú",
  avatar: "/proyectos/andy.jpg",
  flagIcon: "/proyectos/peru.png",
  cvPath: "/Andy_Gonzales_Castillo_CV.pdf",
  github: "https://github.com/andygonzalescastillo",
  linkedin:
    "https://www.linkedin.com/in/andy-rodrigo-gonzales-castillo-18a696347/",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", text: "Inicio" },
  { href: "#tecnologias", text: "Tecnologías" },
  { href: "#proyectos", text: "Proyectos" },
  { href: "#formacion", text: "Formación" },
] as const;

export type TechKey =
  | "JAVA"
  | "SPRING"
  | "REACT"
  | "MYSQL"
  | "SQL_SERVER"
  | "HTML"
  | "CSS"
  | "JAVASCRIPT"
  | "TYPESCRIPT"
  | "TAILWIND"
  | "CSHARP"
  | "GIT"
  | "GITHUB"
  | "KOTLIN"
  | "SWIFT"
  | "POSTGRESQL"
  | "REDIS"
  | "DOCKER";

interface TechItem {
  key: TechKey;
  name: string;
  badgeClass: string;
}

export const TECHNOLOGIES: TechItem[] = [
  { key: "JAVA", name: "Java", badgeClass: "bg-[#E76F00] text-white" },
  { key: "SPRING", name: "Spring Boot", badgeClass: "bg-[#6DB33F] text-white" },
  { key: "REACT", name: "React", badgeClass: "bg-[#087EA4] text-white" },
  { key: "MYSQL", name: "MySQL", badgeClass: "bg-[#00758F] text-white" },
  { key: "SQL_SERVER", name: "SQL Server", badgeClass: "bg-[#CC2927] text-white" },
  { key: "POSTGRESQL", name: "PostgreSQL", badgeClass: "bg-[#336791] text-white" },
  { key: "DOCKER", name: "Docker", badgeClass: "bg-[#2496ED] text-white" },
  { key: "REDIS", name: "Redis", badgeClass: "bg-[#DC382D] text-white" },
  { key: "HTML", name: "HTML", badgeClass: "bg-[#E34F26] text-white" },
  { key: "CSS", name: "CSS", badgeClass: "bg-[#264DE4] text-white" },
  { key: "JAVASCRIPT", name: "JavaScript", badgeClass: "bg-[#F7DF1E] text-[#1a1a1a]" },
  { key: "TYPESCRIPT", name: "TypeScript", badgeClass: "bg-[#3178C6] text-white" },
  { key: "TAILWIND", name: "Tailwind CSS", badgeClass: "bg-[#0EA5E9] text-white" },
  { key: "CSHARP", name: "C#", badgeClass: "bg-[#512BD4] text-white" },
  { key: "GIT", name: "Git", badgeClass: "bg-[#F05032] text-white" },
  { key: "GITHUB", name: "GitHub", badgeClass: "bg-[#24292F] text-white" },
  { key: "KOTLIN", name: "Kotlin", badgeClass: "bg-[#7F52FF] text-white" },
  { key: "SWIFT", name: "Swift", badgeClass: "bg-[#F05138] text-white" },
];

interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  links?: ProjectLink[];
  tags: TechKey[];
}

export const PROJECTS: Project[] = [
  {
    title: "Tienda Full-Stack Platform",
    description:
      "Plataforma full-stack con backend en Spring Boot y dos frontends en React (usuario y admin). Implementa seguridad completa con JWT en cookies HttpOnly, OAuth2 (Google, GitHub, Facebook, Microsoft), OTP por email y gestión de sesiones por dispositivo. El panel admin permite controlar roles, cuentas y sesiones activas, sincronizadas en tiempo real entre pestañas, navegadores y dispositivos vía WebSockets (STOMP). Backend 100% testeado, compilado como imagen nativa con GraalVM y desplegado automáticamente con GitHub Actions + Docker en Render, Supabase, Upstash y Vercel.",
    image: "/proyectos/tienda.webp",
    github: "https://github.com/andygonzalescastillo/tienda",
    links: [
      { label: "Demo Usuario", url: "https://frontend-user-two.vercel.app" },
      { label: "Demo Admin", url: "https://frontend-admin-ochre.vercel.app" },
    ],
    tags: ["JAVA", "SPRING", "REACT", "TYPESCRIPT", "TAILWIND", "POSTGRESQL", "REDIS", "DOCKER", "GITHUB"],
  },
  {
    title: "Sistema de Gestión para Pastelería",
    description:
      "Aplicación web con Spring Boot MVC y Thymeleaf para la gestión completa de una pastelería. Incluye módulos para administrar productos, pedidos, clientes, proveedores, empleados e insumos con operaciones CRUD y validaciones. Renderizado del lado del servidor con plantillas Thymeleaf y base de datos MySQL.",
    image: "/proyectos/gestion-pasteleria.webp",
    github: "https://github.com/andygonzalescastillo/gestion-pasteleria",
    tags: ["JAVA", "SPRING", "MYSQL", "HTML", "CSS", "JAVASCRIPT"],
  },
  {
    title: "Sistema de Gestión Clínica CheckSalud",
    description:
      "Sistema de gestión clínica desarrollado en tres versiones: Windows Forms, Web Forms y ASP.NET MVC. Permite administrar médicos, pacientes, consultas y análisis clínicos, con reportes estadísticos y control de resultados médicos. Base de datos en SQL Server.",
    image: "/proyectos/gestion-check-salud.webp",
    github: "https://github.com/andygonzalescastillo/gestion-ckeck-salud",
    tags: ["CSHARP", "SQL_SERVER"],
  },
  {
    title: "Sistema para Clínica Dental",
    description:
      "Sistema de escritorio en Windows Forms para la gestión de una clínica dental. Permite controlar pacientes, dentistas, citas, horarios y historiales clínicos. Cuenta con inicio de sesión por roles, interfaz intuitiva y operaciones personalizadas para recepcionistas y dentistas.",
    image: "/proyectos/clinica-dental-winforms.webp",
    github: "https://github.com/andygonzalescastillo/clinica-dental-winforms",
    tags: ["CSHARP", "SQL_SERVER"],
  },
  {
    title: "Explorador de Películas · TMDB",
    description:
      "Aplicación Android desarrollada con Kotlin y Jetpack Compose que consume la API de TMDB. Muestra películas, series y actores con detalles completos, recomendaciones y contenido similar. Implementa arquitectura MVVM, inyección de dependencias con Hilt, Retrofit para networking y Jetpack Navigation.",
    image: "/proyectos/android-api-tmdb.webp",
    github: "https://github.com/andygonzalescastillo/android-api-tmdb",
    tags: ["KOTLIN"],
  },
  {
    title: "Comidas Peruanas",
    description:
      "Aplicación desarrollada en Xcode con Swift que presenta recetas peruanas organizadas por categoría: desayunos, almuerzos y postres. Incluye navegación por menús, búsqueda de recetas y gestión de favoritos. Cuenta con vistas detalladas de cada comida, ingredientes, e instrucciones paso a paso.",
    image: "/proyectos/comida-peruana-app.webp",
    github: "https://github.com/andygonzalescastillo/comidas-peruanas-app",
    tags: ["SWIFT"],
  },
  {
    title: "Buscador de Videojuegos · RAWG API",
    description:
      "Aplicación iOS desarrollada con Swift y SwiftUI que consume la API de RAWG para explorar videojuegos. Incluye búsqueda en tiempo real y visualización de catálogo con diseño limpio y moderno.",
    image: "/proyectos/api-rawg-app.webp",
    github: "https://github.com/andygonzalescastillo/api-rawg",
    tags: ["SWIFT"],
  },
];

interface FormacionItem {
  titulo: string;
  institucion: string;
  lugar: string;
  periodo: string;
  descripcion: string;
  certificadoPath?: string;
}

export const FORMACION: FormacionItem[] = [
  {
    titulo: "Desarrollo de Software",
    institucion: "Instituto San Ignacio de Loyola",
    lugar: "Lima, Perú",
    periodo: "2022 - 2024",
    descripcion:
      "Carrera técnica enfocada en desarrollo backend con Java y Spring Boot, bases de datos relacionales (SQL Server y MySQL), y desarrollo frontend con React. Formación complementaria en C#, aplicaciones móviles y control de versiones con Git.",
    certificadoPath: "/constanciaEgresado.pdf",
  },
];

export function getTechByKey(key: TechKey): TechItem {
  return TECHNOLOGIES.find((t) => t.key === key)!;
}
