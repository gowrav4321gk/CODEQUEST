const key = 'codequest-progress-v3';
const defaults = { xp: 0, streak: 0, completed: [], lessonDone: false, dark: false, onboarded: false, username: '', learningLanguage: '', avatar: '✨', lastVisit: '', debugSolvedCases: [], challengesSolved: [], sound: true, dailyClaimedDate: '' };
export function getState() { return { ...defaults, ...JSON.parse(localStorage.getItem(key) || '{}') }; }
export function saveState(next) { localStorage.setItem(key, JSON.stringify(next)); return next; }
export function updateState(patch) { return saveState({ ...getState(), ...patch }); }
export function applyDailyStreak() {
  const state = getState();
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastVisit === today) return state;
  const oneDay = 24 * 60 * 60 * 1000;
  const last = state.lastVisit ? new Date(state.lastVisit + 'T00:00:00') : null;
  const diffDays = last ? Math.round((new Date(today + 'T00:00:00') - last) / oneDay) : null;
  const streak = diffDays === 1 ? state.streak + 1 : 1;
  return saveState({ ...state, streak, lastVisit: today });
}
