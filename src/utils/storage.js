// src/utils/storage.js

const STORAGE_KEY = 'family_app_state_v1';

// Estado inicial por defecto
const initialState = {
  childProfile: {
    name: "Angelito",
    blueTokens: 80,
    redTokens: 10,
    streakDays: 5,
    lastStreakDate: new Date().toISOString().split('T')[0]
  },
  pendingApprovals: [
    {
      id: "app_1",
      type: "QUEST",
      title: "Hacer la tarea de matemáticas",
      tokens: 10,
      timestamp: new Date().toISOString(),
      status: "PENDING"
    }
  ],
  history: [
    {
      id: "act_1",
      author: "Papá",
      type: "BLUE",
      title: "Misión: Lavarse los dientes",
      tokens: 5,
      timestamp: new Date().toISOString()
    }
  ]
};

// Obtener estado actual
export function getAppState() {
  if (typeof window === 'undefined') return initialState;
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : initialState;
}

// Guardar estado
export function saveAppState(state) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}

// Función para registrar Logro Azul (+Fichas)
export function addBlueAchievement(description, tokens) {
  const state = getAppState();
  const tokensNum = parseInt(tokens, 10);

  // Actualizar saldo del niño
  state.childProfile.blueTokens += tokensNum;

  // Registrar en historial
  state.history.unshift({
    id: `act_${Date.now()}`,
    author: "Papá",
    type: "BLUE",
    title: description,
    tokens: tokensNum,
    timestamp: new Date().toISOString()
  });

  saveAppState(state);
  return state;
}

// Función para registrar Falta Roja
export function addRedPenalty(description, tokens) {
  const state = getAppState();
  const tokensNum = parseInt(tokens, 10);

  // Actualizar saldo rojo
  state.childProfile.redTokens += tokensNum;

  // Registrar en historial
  state.history.unshift({
    id: `act_${Date.now()}`,
    author: "Papá",
    type: "RED",
    title: description,
    tokens: tokensNum,
    timestamp: new Date().toISOString()
  });

  saveAppState(state);
  return state;
}