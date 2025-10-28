<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=lightbulb_2" />
  <div class="bg-slate-200 min-h-screen p-5">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* ===== BORDAS NEON COM SOMBRA ===== */

/* Opção 1: Cyan/Blue - Fresco e Tecnológico */
.neon-border-cyan {
  border: 2px solid rgb(6, 182, 212);
  box-shadow:
    0 0 10px rgba(6, 182, 212, 0.5),
    0 0 20px rgba(6, 182, 212, 0.3),
    0 0 30px rgba(6, 182, 212, 0.2),
    inset 0 0 10px rgba(6, 182, 212, 0.1);
}

/* Opção 2: Purple/Violet - Elegante e Moderno */
.neon-border-purple {
  border: 2px solid rgb(168, 85, 247);
  box-shadow:
    0 0 10px rgba(168, 85, 247, 0.6),
    0 0 20px rgba(168, 85, 247, 0.4),
    0 0 30px rgba(168, 85, 247, 0.2),
    inset 0 0 10px rgba(168, 85, 247, 0.15);
}

/* Opção 3: Pink/Rose - Vibrante e Ousado */
.neon-border-pink {
  border: 2px solid rgb(236, 72, 153);
  box-shadow:
    0 0 10px rgba(236, 72, 153, 0.5),
    0 0 20px rgba(236, 72, 153, 0.3),
    0 0 30px rgba(236, 72, 153, 0.2),
    inset 0 0 10px rgba(236, 72, 153, 0.1);
}

/* Opção 4: Emerald/Green - Natureza e Crescimento */
.neon-border-emerald {
  border: 2px solid rgb(16, 185, 129);
  box-shadow:
    0 0 10px rgba(16, 185, 129, 0.5),
    0 0 20px rgba(16, 185, 129, 0.3),
    0 0 30px rgba(16, 185, 129, 0.2),
    inset 0 0 10px rgba(16, 185, 129, 0.1);
}

/* Opção 5: Orange/Amber - Energia e Calor */
.neon-border-orange {
  border: 2px solid rgb(251, 146, 60);
  box-shadow:
    0 0 10px rgba(251, 146, 60, 0.5),
    0 0 20px rgba(251, 146, 60, 0.3),
    0 0 30px rgba(251, 146, 60, 0.2),
    inset 0 0 10px rgba(251, 146, 60, 0.1);
}

/* Opção 6: Indigo/Blue - Profissional e Confiável */
.neon-border-indigo {
  border: 2px solid rgb(99, 102, 241);
  box-shadow:
    0 0 10px rgba(99, 102, 241, 0.5),
    0 0 20px rgba(99, 102, 241, 0.3),
    0 0 30px rgba(99, 102, 241, 0.2),
    inset 0 0 10px rgba(99, 102, 241, 0.1);
}

/* Opção 7: Teal - Equilíbrio e Calma */
.neon-border-teal {
  border: 2px solid rgb(20, 184, 166);
  box-shadow:
    0 0 10px rgba(20, 184, 166, 0.5),
    0 0 20px rgba(20, 184, 166, 0.3),
    0 0 30px rgba(20, 184, 166, 0.2),
    inset 0 0 10px rgba(20, 184, 166, 0.1);
}

/* Opção 8: Sky Blue - Leve e Arejado */
.neon-border-sky {
  border: 2px solid rgb(14, 165, 233);
  box-shadow:
    0 0 10px rgba(14, 165, 233, 0.5),
    0 0 20px rgba(14, 165, 233, 0.3),
    0 0 30px rgba(14, 165, 233, 0.2),
    inset 0 0 10px rgba(14, 165, 233, 0.1);
}

/* ===== BORDAS NEON GRADIENT (Multicoloridas) ===== */

/* Gradient 1: Cyan → Purple (Cyberpunk) */
.neon-border-gradient-cyber {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, rgb(6, 182, 212), rgb(168, 85, 247)) border-box;
  box-shadow:
    0 0 15px rgba(6, 182, 212, 0.4),
    0 0 30px rgba(168, 85, 247, 0.3),
    inset 0 0 15px rgba(6, 182, 212, 0.1);
}

/* Gradient 2: Pink → Orange (Sunset) */
.neon-border-gradient-sunset {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, rgb(236, 72, 153), rgb(251, 146, 60)) border-box;
  box-shadow:
    0 0 15px rgba(236, 72, 153, 0.4),
    0 0 30px rgba(251, 146, 60, 0.3),
    inset 0 0 15px rgba(236, 72, 153, 0.1);
}

/* Gradient 3: Emerald → Cyan (Ocean) */
.neon-border-gradient-ocean {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, rgb(16, 185, 129), rgb(6, 182, 212)) border-box;
  box-shadow:
    0 0 15px rgba(16, 185, 129, 0.4),
    0 0 30px rgba(6, 182, 212, 0.3),
    inset 0 0 15px rgba(16, 185, 129, 0.1);
}

/* Gradient 4: Purple → Pink (Galaxy) */
.neon-border-gradient-galaxy {
  border: 2px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    linear-gradient(135deg, rgb(139, 92, 246), rgb(236, 72, 153)) border-box;
  box-shadow:
    0 0 15px rgba(139, 92, 246, 0.4),
    0 0 30px rgba(236, 72, 153, 0.3),
    inset 0 0 15px rgba(139, 92, 246, 0.1);
}

/* ===== BORDAS NEON ANIMADAS ===== */

/* Animação: Pulsante */
.neon-border-pulse {
  border: 2px solid rgb(6, 182, 212);
  animation: neon-border-pulse 2s ease-in-out infinite;
}

@keyframes neon-border-pulse {
  0%,
  100% {
    box-shadow:
      0 0 10px rgba(6, 182, 212, 0.4),
      0 0 20px rgba(6, 182, 212, 0.2),
      inset 0 0 10px rgba(6, 182, 212, 0.1);
  }
  50% {
    box-shadow:
      0 0 20px rgba(6, 182, 212, 0.7),
      0 0 40px rgba(6, 182, 212, 0.4),
      0 0 60px rgba(6, 182, 212, 0.2),
      inset 0 0 15px rgba(6, 182, 212, 0.2);
  }
}

/* Animação: Rotação de Cores */
.neon-border-rotate {
  border: 2px solid rgb(6, 182, 212);
  animation: neon-border-rotate 3s linear infinite;
}

@keyframes neon-border-rotate {
  0% {
    border-color: rgb(6, 182, 212);
    box-shadow:
      0 0 15px rgba(6, 182, 212, 0.5),
      0 0 30px rgba(6, 182, 212, 0.3);
  }
  33% {
    border-color: rgb(168, 85, 247);
    box-shadow:
      0 0 15px rgba(168, 85, 247, 0.5),
      0 0 30px rgba(168, 85, 247, 0.3);
  }
  66% {
    border-color: rgb(236, 72, 153);
    box-shadow:
      0 0 15px rgba(236, 72, 153, 0.5),
      0 0 30px rgba(236, 72, 153, 0.3);
  }
  100% {
    border-color: rgb(6, 182, 212);
    box-shadow:
      0 0 15px rgba(6, 182, 212, 0.5),
      0 0 30px rgba(6, 182, 212, 0.3);
  }
}

/* Animação: Hover Intenso */
.neon-border-hover {
  border: 2px solid rgb(6, 182, 212);
  box-shadow:
    0 0 10px rgba(6, 182, 212, 0.3),
    0 0 20px rgba(6, 182, 212, 0.2);
  transition: all 0.3s ease;
}

.neon-border-hover:hover {
  box-shadow:
    0 0 20px rgba(6, 182, 212, 0.6),
    0 0 40px rgba(6, 182, 212, 0.4),
    0 0 60px rgba(6, 182, 212, 0.3),
    inset 0 0 20px rgba(6, 182, 212, 0.15);
}

/* ===== BORDAS NEON ESPESSAS ===== */

/* Borda Grossa Cyan */
.neon-border-thick-cyan {
  border: 4px solid rgb(6, 182, 212);
  box-shadow:
    0 0 15px rgba(6, 182, 212, 0.6),
    0 0 30px rgba(6, 182, 212, 0.4),
    0 0 45px rgba(6, 182, 212, 0.2),
    inset 0 0 15px rgba(6, 182, 212, 0.2);
}

/* Borda Grossa Purple */
.neon-border-thick-purple {
  border: 4px solid rgb(168, 85, 247);
  box-shadow:
    0 0 15px rgba(168, 85, 247, 0.6),
    0 0 30px rgba(168, 85, 247, 0.4),
    0 0 45px rgba(168, 85, 247, 0.2),
    inset 0 0 15px rgba(168, 85, 247, 0.2);
}

/* ===== BORDAS COM MÚLTIPLAS CAMADAS ===== */

/* Borda Dupla Neon */
.neon-border-double {
  border: 2px solid rgb(6, 182, 212);
  outline: 2px solid rgb(168, 85, 247);
  outline-offset: 3px;
  box-shadow:
    0 0 10px rgba(6, 182, 212, 0.5),
    0 0 20px rgba(168, 85, 247, 0.4),
    0 0 30px rgba(6, 182, 212, 0.3);
}
</style>
