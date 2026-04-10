import { useState } from "react";

// ─── R1 Scores ───────────────────────────────────────────────────────────────
const SCORES = {
  "Scottie Scheffler": -2,
  "Rory McIlroy": -5,
  "Xander Schauffele": -2,
  "Ludvig Aberg": 2,
  "Cameron Young": 1,
  "Tommy Fleetwood": -1,
  "Jordan Spieth": 0,
  "Patrick Reed": -3,
  "Jake Knapp": 1,
  "Jason Day": -3,
  "Cameron Smith": 2,
  "Ben Griffin": 0,
  "Davis Riley": 10,
  "John Rahm": 6,
  "Brooks Koepka": 0,
  "Akshay Bhatia": 1,
  "Justin Thomas": 0,
  "Jacob Bridgeman": -1,
  "Sungjae Im": 4,
  "Aaron Rai": -1,
  "Justin Rose": -2,
  "Hideki Matsuyama": 0,
  "Adam Scott": 0,
  "J.J. Spaun": 2,
  "Gary Woodland": -1,
  "Min Woo Lee": 6,
  "Bryson DeChambeau": 4,
  "Viktor Hovland": 3,
  "Sepp Straka": 1,
  "Corey Conners": 3,
  "Brian Harman": 7,
  "Patrick Cantlay": 5,
  "Maverick McNealy": 5,
  "Max Homa": 0,
  "Wyndham Clark": 0,
  "Nick Taylor": -1,
  "Rasmus Neergaard-Petersen": 5,
  "Rasmus Hojgaard": 6,
  "Ryan Fox": 5,
  "Si Woo Kim": 3,
  "Nicolai Hojgaard": 4,
  "Dustin Johnson": 1,
  "Marco Penge": 4,
  "Ryan Gerard": 0,
  "Sam Burns": -5,
  "Shane Lowry": -2,
  "Kurt Kitayama": -3,
  "Matt Fitzpatrick": 2,
  "Robert McIntyre": 8,
  "Collin Morikawa": 2,
  "Harris English": 1,
  "Sergio Garcia": 0,
  "Daniel Berger": 4,
  "Sam Stevens": 0,
  "Aldrich Potgieter": 12,
};

function getScore(name) {
  if (name in SCORES) return SCORES[name];
  const lower = name.toLowerCase();
  for (const key of Object.keys(SCORES)) {
    if (key.toLowerCase() === lower) return SCORES[key];
  }
  return null;
}

// ─── Picks ───────────────────────────────────────────────────────────────────
const PLAYERS = {
  WADE: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler", "Ludvig Aberg"] },
      { tier: "T-2", players: ["Cameron Young", "Jordan Spieth", "Patrick Reed"] },
      { tier: "T-3", players: ["Jake Knapp", "Jason Day"] },
      { tier: "T-4", players: ["Cameron Smith"] },
      { tier: "T-5", players: ["Ben Griffin"] },
      { tier: "T-6", players: ["Davis Riley"] },
    ],
  },
  JORDAN: {
    picks: [
      { tier: "T-1", players: ["John Rahm"] },
      { tier: "T-2", players: ["Xander Schauffele", "Tommy Fleetwood"] },
      { tier: "T-3", players: ["Patrick Reed", "Brooks Koepka"] },
      { tier: "T-4", players: ["Akshay Bhatia", "Justin Thomas"] },
      { tier: "T-5", players: ["Jacob Bridgeman"] },
      { tier: "T-6", players: ["Sungjae Im", "Aaron Rai"] },
    ],
  },
  JARVIS: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Ludvig Aberg", "Tommy Fleetwood"] },
      { tier: "T-3", players: ["Justin Rose", "Hideki Matsuyama"] },
      { tier: "T-4", players: ["Adam Scott", "Jake Knapp"] },
      { tier: "T-5", players: ["J.J. Spaun", "Gary Woodland"] },
      { tier: "T-6", players: ["Aaron Rai"] },
    ],
  },
  TANNER: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Xander Schauffele", "John Rahm"] },
      { tier: "T-3", players: ["Patrick Reed", "Hideki Matsuyama"] },
      { tier: "T-4", players: ["Justin Thomas", "Sepp Straka"] },
      { tier: "T-5", players: ["Corey Conners", "Sungjae Im"] },
      { tier: "T-6", players: ["Brian Harman"] },
    ],
  },
  DOMENIC: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Xander Schauffele", "John Rahm"] },
      { tier: "T-3", players: ["Patrick Reed", "Hideki Matsuyama"] },
      { tier: "T-4", players: ["Min Woo Lee", "Jason Day"] },
      { tier: "T-5", players: ["Corey Conners", "Sungjae Im"] },
      { tier: "T-6", players: ["Rasmus Neergaard-Petersen"] },
    ],
  },
  BRENT: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Ludvig Aberg", "Rory McIlroy"] },
      { tier: "T-3", players: ["Viktor Hovland", "Hideki Matsuyama"] },
      { tier: "T-4", players: ["Justin Thomas", "Akshay Bhatia"] },
      { tier: "T-5", players: ["J.J. Spaun", "Gary Woodland"] },
      { tier: "T-6", players: ["Nick Taylor"] },
    ],
  },
  TRENT: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Xander Schauffele", "Rory McIlroy"] },
      { tier: "T-3", players: ["Justin Rose", "Hideki Matsuyama"] },
      { tier: "T-4", players: ["Justin Thomas", "Adam Scott"] },
      { tier: "T-5", players: ["Maverick McNealy", "Max Homa"] },
      { tier: "T-6", players: ["Wyndham Clark"] },
    ],
  },
  DANIEL: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Tommy Fleetwood", "Bryson DeChambeau"] },
      { tier: "T-3", players: ["Hideki Matsuyama", "Si Woo Kim"] },
      { tier: "T-4", players: ["Min Woo Lee", "Akshay Bhatia"] },
      { tier: "T-5", players: ["Nicolai Hojgaard", "Rasmus Hojgaard"] },
      { tier: "T-6", players: ["Ryan Fox"] },
    ],
  },
  JESSICA: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler", "John Rahm"] },
      { tier: "T-2", players: ["Rory McIlroy", "Justin Rose"] },
      { tier: "T-3", players: ["Jason Day", "Min Woo Lee"] },
      { tier: "T-4", players: ["Corey Conners", "Max Homa"] },
      { tier: "T-5", players: ["Dustin Johnson"] },
      { tier: "T-6", players: [] },
    ],
  },
  DERRICK: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Rory McIlroy", "Bryson DeChambeau"] },
      { tier: "T-3", players: ["Justin Rose", "Viktor Hovland"] },
      { tier: "T-4", players: ["Akshay Bhatia", "Min Woo Lee"] },
      { tier: "T-5", players: ["J.J. Spaun", "Gary Woodland"] },
      { tier: "T-6", players: ["Aaron Rai"] },
    ],
  },
  MAX: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Bryson DeChambeau", "Ludvig Aberg"] },
      { tier: "T-3", players: ["Justin Rose", "Brooks Koepka"] },
      { tier: "T-4", players: ["Min Woo Lee", "Sepp Straka"] },
      { tier: "T-5", players: ["Jacob Bridgeman", "Marco Penge"] },
      { tier: "T-6", players: ["Ryan Gerard"] },
    ],
  },
  CODY: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Rory McIlroy", "John Rahm"] },
      { tier: "T-3", players: ["Jordan Spieth", "Hideki Matsuyama"] },
      { tier: "T-4", players: ["Patrick Cantlay", "Justin Thomas"] },
      { tier: "T-5", players: ["Cameron Smith", "Max Homa"] },
      { tier: "T-6", players: ["Sergio Garcia"] },
    ],
  },
  "MIKEY G": {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler", "Ludvig Aberg"] },
      { tier: "T-2", players: ["Matt Fitzpatrick", "Robert McIntyre", "Patrick Reed"] },
      { tier: "T-3", players: ["Min Woo Lee", "Akshay Bhatia"] },
      { tier: "T-4", players: ["J.J. Spaun"] },
      { tier: "T-5", players: ["Rasmus Hojgaard"] },
      { tier: "T-6", players: ["Aldrich Potgieter"] },
    ],
  },
  RHONDA: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Rory McIlroy", "Tommy Fleetwood"] },
      { tier: "T-3", players: ["Justin Rose", "Jordan Spieth"] },
      { tier: "T-4", players: ["Justin Thomas", "Jason Day"] },
      { tier: "T-5", players: ["J.J. Spaun", "Ben Griffin"] },
      { tier: "T-6", players: ["Ryan Fox"] },
    ],
  },
  "MIKE V": {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Rory McIlroy", "Xander Schauffele"] },
      { tier: "T-3", players: ["Brooks Koepka", "Jordan Spieth"] },
      { tier: "T-4", players: ["Min Woo Lee", "Adam Scott"] },
      { tier: "T-5", players: ["Kurt Kitayama", "Daniel Berger"] },
      { tier: "T-6", players: ["Sam Stevens"] },
    ],
  },
  JULIAN: {
    picks: [
      { tier: "T-1", players: ["Scottie Scheffler"] },
      { tier: "T-2", players: ["Xander Schauffele", "Bryson DeChambeau"] },
      { tier: "T-3", players: ["Justin Rose", "Viktor Hovland"] },
      { tier: "T-4", players: ["Adam Scott", "Justin Thomas"] },
      { tier: "T-5", players: ["Cameron Smith", "Max Homa"] },
      { tier: "T-6", players: ["Wyndham Clark"] },
    ],
  },
};

// ─── Scoring ─────────────────────────────────────────────────────────────────
function calcTotal(name) {
  const picks = PLAYERS[name].picks;
  let total = 0;
  for (const tier of picks) {
    if (!tier.players.length) continue;
    const scores = tier.players.map((p) => {
      const s = getScore(p);
      return s !== null ? s : 999;
    });
    const best = Math.min(...scores);
    if (best !== 999) total += best;
  }
  return total;
}

function scoreDisplay(s) {
  if (s === null || s === undefined) return { label: "–", color: "#666" };
  if (s < 0) return { label: `${s}`, color: "#22c55e" };
  if (s === 0) return { label: "E", color: "#facc15" };
  return { label: `+${s}`, color: "#f87171" };
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [view, setView] = useState("leaderboard");
  const [selected, setSelected] = useState(null);

  const standings = Object.keys(PLAYERS)
    .map((name) => ({ name, total: calcTotal(name) }))
    .sort((a, b) => a.total - b.total);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a1a0f",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8dfc8",
      paddingBottom: 60,
    }}>
      {/* ── Header ── */}
      <div style={{
        background: "linear-gradient(180deg, #1a3a20 0%, #0d2410 100%)",
        borderBottom: "2px solid #2d6a35",
        padding: "24px 20px 20px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: "#8ab88e", textTransform: "uppercase", marginBottom: 4 }}>
          Buy-in $20 · Winner Takes All
        </div>
        <div style={{ fontSize: 28, fontWeight: "bold", color: "#f5e6c8", letterSpacing: 1 }}>
          ⛳ Masters Madness 2026
        </div>
        <div style={{ fontSize: 13, color: "#8ab88e", marginTop: 4 }}>
          Round 1 Complete · Augusta National
        </div>
        <div style={{ marginTop: 14, display: "flex", gap: 8, justifyContent: "center" }}>
          {[
            { id: "leaderboard", label: "🏆 Standings" },
            { id: "detail", label: "🔍 Picks" },
          ].map((v) => (
            <button
              key={v.id}
              onClick={() => { setView(v.id); if (v.id === "leaderboard") setSelected(null); }}
              style={{
                padding: "6px 18px",
                borderRadius: 20,
                border: "1px solid #2d6a35",
                background: view === v.id ? "#2d6a35" : "transparent",
                color: view === v.id ? "#fff" : "#8ab88e",
                fontSize: 12,
                cursor: "pointer",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 520, margin: "0 auto", padding: "20px 16px 0" }}>

        {/* ── Leaderboard ── */}
        {view === "leaderboard" && (
          <>
            <div style={{ fontSize: 11, color: "#5a7a5c", marginBottom: 14, textAlign: "center", letterSpacing: 1 }}>
              BEST SCORE PER TIER COUNTS · MISSED CUT = +5/DAY
            </div>
            {standings.map((entry, i) => {
              const { label, color } = scoreDisplay(entry.total);
              const isLeader = i === 0;
              const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null;
              return (
                <div
                  key={entry.name}
                  onClick={() => { setSelected(entry.name); setView("detail"); }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "13px 16px",
                    marginBottom: 8,
                    borderRadius: 10,
                    background: isLeader
                      ? "linear-gradient(135deg, #1e3d22 0%, #163319 100%)"
                      : "rgba(255,255,255,0.04)",
                    border: isLeader ? "1px solid #4a9952" : "1px solid rgba(255,255,255,0.07)",
                    cursor: "pointer",
                  }}
                >
                  <div style={{
                    width: 32,
                    fontSize: medal ? 20 : 13,
                    color: "#4a6b4d",
                    fontWeight: "bold",
                    flexShrink: 0,
                    textAlign: "center",
                  }}>
                    {medal || `${i + 1}`}
                  </div>
                  <div style={{ flex: 1, fontSize: 16, fontWeight: isLeader ? "bold" : "normal", paddingLeft: 8 }}>
                    {entry.name}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: "bold", color, minWidth: 48, textAlign: "right" }}>
                    {label}
                  </div>
                </div>
              );
            })}
            <div style={{ textAlign: "center", marginTop: 16, fontSize: 11, color: "#3a5a3c" }}>
              TAP ANY ROW TO SEE PICKS
            </div>
          </>
        )}

        {/* ── Picks Detail ── */}
        {view === "detail" && (
          <>
            <select
              value={selected || ""}
              onChange={(e) => setSelected(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 8,
                background: "#1a3a20",
                border: "1px solid #2d6a35",
                color: "#e8dfc8",
                fontSize: 15,
                cursor: "pointer",
                marginBottom: 16,
              }}
            >
              <option value="" disabled>Select a player...</option>
              {standings.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name} ({scoreDisplay(e.total).label})
                </option>
              ))}
            </select>

            {selected && (() => {
              const rank = standings.findIndex((s) => s.name === selected) + 1;
              const total = calcTotal(selected);
              const { label, color } = scoreDisplay(total);
              const data = PLAYERS[selected];
              return (
                <>
                  <div style={{
                    background: "linear-gradient(135deg, #1e3d22 0%, #163319 100%)",
                    border: "1px solid #2d6a35",
                    borderRadius: 12,
                    padding: "16px 20px",
                    marginBottom: 16,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontSize: 22, fontWeight: "bold" }}>{selected}</div>
                      <div style={{ fontSize: 13, color: "#6b8e6e", marginTop: 2 }}>
                        Rank #{rank} of {standings.length}
                      </div>
                    </div>
                    <div style={{ fontSize: 36, fontWeight: "bold", color }}>{label}</div>
                  </div>

                  {data.picks.map((tier) => {
                    if (!tier.players.length) return null;
                    const tierScores = tier.players.map((p) => ({ p, s: getScore(p) }));
                    const validScores = tierScores.map((x) => x.s !== null ? x.s : 999);
                    const bestScore = Math.min(...validScores);
                    return (
                      <div key={tier.tier} style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        borderRadius: 10,
                        padding: "12px 16px",
                        marginBottom: 8,
                      }}>
                        <div style={{ fontSize: 10, color: "#5a7a5c", letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" }}>
                          {tier.tier}
                        </div>
                        {tierScores.map(({ p, s }, idx) => {
                          const isBest = s !== null && s === bestScore && bestScore !== 999;
                          const { label: sl, color: sc } = scoreDisplay(s);
                          return (
                            <div key={p} style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "6px 0",
                              borderTop: idx > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
                            }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                {isBest && tier.players.length > 1 && (
                                  <span style={{
                                    fontSize: 9,
                                    background: "#2d6a35",
                                    color: "#a8f0ae",
                                    padding: "1px 5px",
                                    borderRadius: 4,
                                    letterSpacing: 1,
                                  }}>BEST</span>
                                )}
                                <span style={{ fontSize: 15, color: isBest ? "#e8dfc8" : "#8ab88e" }}>{p}</span>
                              </div>
                              <span style={{ fontSize: 16, fontWeight: "bold", color: sc }}>{sl}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </>
              );
            })()}
          </>
        )}
      </div>
    </div>
  );
}
