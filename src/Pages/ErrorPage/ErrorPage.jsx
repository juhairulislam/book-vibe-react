import React, { useEffect, useState } from 'react';

const ErrorPage = () => {
    const [glitch, setGlitch] = useState(false);
    const [dots, setDots] = useState('');

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 200);
        }, 3000);

        const dotsInterval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.');
        }, 500);

        return () => {
            clearInterval(glitchInterval);
            clearInterval(dotsInterval);
        };
    }, []);

    return (
        <div style={styles.wrapper}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

                @keyframes scanline {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                @keyframes flicker {
                    0%, 100% { opacity: 1; }
                    92% { opacity: 1; }
                    93% { opacity: 0.4; }
                    94% { opacity: 1; }
                    96% { opacity: 0.6; }
                    97% { opacity: 1; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.9); opacity: 0.8; }
                    70% { transform: scale(1.4); opacity: 0; }
                    100% { transform: scale(1.4); opacity: 0; }
                }
                @keyframes glitch-1 {
                    0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
                    20% { clip-path: inset(20% 0 60% 0); transform: translate(-4px, 2px); }
                    40% { clip-path: inset(50% 0 30% 0); transform: translate(4px, -2px); }
                    60% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 1px); }
                    80% { clip-path: inset(10% 0 80% 0); transform: translate(2px, -1px); }
                }
                @keyframes glitch-2 {
                    0%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
                    20% { clip-path: inset(30% 0 50% 0); transform: translate(4px, -2px); }
                    40% { clip-path: inset(60% 0 20% 0); transform: translate(-4px, 2px); }
                    60% { clip-path: inset(15% 0 75% 0); transform: translate(2px, -1px); }
                    80% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 1px); }
                }
                @keyframes drift {
                    0% { transform: translateX(-60px) translateY(0) rotate(0deg); opacity: 0; }
                    10% { opacity: 0.6; }
                    90% { opacity: 0.3; }
                    100% { transform: translateX(calc(100vw + 60px)) translateY(-40px) rotate(360deg); opacity: 0; }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .error-container { animation: flicker 8s infinite; }
                .error-code { animation: float 4s ease-in-out infinite; }
                .glitch-layer-1 { animation: glitch-1 0.2s steps(1) forwards; color: #ff2d55; }
                .glitch-layer-2 { animation: glitch-2 0.2s steps(1) forwards; color: #00e5ff; }
                .scanline { animation: scanline 6s linear infinite; }
                .particle { animation: drift linear infinite; }
                .pulse { animation: pulse-ring 2s ease-out infinite; }
                .fade-up-1 { animation: fadeUp 0.6s ease forwards 0.1s; opacity: 0; }
                .fade-up-2 { animation: fadeUp 0.6s ease forwards 0.3s; opacity: 0; }
                .fade-up-3 { animation: fadeUp 0.6s ease forwards 0.5s; opacity: 0; }
                .fade-up-4 { animation: fadeUp 0.6s ease forwards 0.7s; opacity: 0; }
                .btn-primary:hover { background: #e63e00 !important; transform: translateY(-2px) !important; box-shadow: 0 8px 30px rgba(255,75,0,0.5) !important; }
                .btn-secondary:hover { background: rgba(255,255,255,0.08) !important; transform: translateY(-2px) !important; border-color: rgba(255,255,255,0.4) !important; }
            `}</style>

            {[...Array(8)].map((_, i) => (
                <div key={i} className="particle" style={{
                    position: 'fixed', width: `${6 + i * 2}px`, height: `${6 + i * 2}px`,
                    borderRadius: i % 2 === 0 ? '50%' : '2px',
                    background: i % 3 === 0 ? '#ff4b00' : i % 3 === 1 ? '#00e5ff' : '#ffffff',
                    top: `${10 + i * 11}%`, left: '-60px',
                    animationDuration: `${12 + i * 3}s`, animationDelay: `${i * 1.5}s`,
                    opacity: 0, zIndex: 0, filter: 'blur(0.5px)',
                }} />
            ))}

            <div className="scanline" style={styles.scanline} />
            <div style={styles.grid} />

            <div className="error-container" style={styles.container}>
                <div className="fade-up-1" style={styles.chip}>
                    <span style={styles.chipDot} />
                    SYSTEM ERROR DETECTED
                </div>

                <div className="error-code" style={{ position: 'relative', display: 'inline-block', margin: '24px 0 8px' }}>
                    <span style={styles.errorCodeMain}>404</span>
                    {glitch && (
                        <>
                            <span className="glitch-layer-1" style={styles.glitchLayer}>404</span>
                            <span className="glitch-layer-2" style={{ ...styles.glitchLayer, left: '3px' }}>404</span>
                        </>
                    )}
                    <div className="pulse" style={styles.pulseRing} />
                </div>

                <div className="fade-up-2" style={styles.title}>Page Not Found</div>
                <div style={styles.divider} />

                <p className="fade-up-3" style={styles.description}>
                    The page you're looking for has wandered off into the void.
                    It may have been moved, deleted, or never existed at all.
                </p>

                <div className="fade-up-3" style={styles.terminal}>
                    <span style={{ color: '#ff4b00' }}>$</span>
                    <span style={{ color: '#888', marginLeft: 8 }}>locate page</span>
                    <span style={{ color: '#00e5ff', marginLeft: 8 }}>→</span>
                    <span style={{ color: '#fff', marginLeft: 8 }}>no results found{dots}</span>
                </div>

                <div className="fade-up-4" style={styles.buttonGroup}>
                    <button className="btn-primary" style={styles.btnPrimary} onClick={() => window.history.back()}>← Go Back</button>
                    <button className="btn-secondary" style={styles.btnSecondary} onClick={() => window.location.href = '/'}>Home</button>
                </div>

                <p style={styles.hint}>
                    Error code: <span style={{ color: '#ff4b00', fontFamily: 'Space Mono, monospace' }}>ERR_PAGE_NOT_FOUND</span>
                </p>
            </div>
        </div>
    );
};

const styles = {
    wrapper: { minHeight: '100vh', background: '#0a0a0c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Syne', sans-serif", position: 'relative', overflow: 'hidden', color: '#fff' },
    grid: { position: 'fixed', inset: 0, backgroundImage: `linear-gradient(rgba(255,75,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,75,0,0.04) 1px, transparent 1px)`, backgroundSize: '48px 48px', zIndex: 0, maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)' },
    scanline: { position: 'fixed', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(transparent, rgba(0,229,255,0.06), transparent)', zIndex: 1, pointerEvents: 'none' },
    container: { position: 'relative', zIndex: 2, textAlign: 'center', padding: '60px 40px', maxWidth: '560px', width: '100%' },
    chip: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255,75,0,0.3)', background: 'rgba(255,75,0,0.08)', fontSize: '11px', fontFamily: "'Space Mono', monospace", letterSpacing: '2px', color: '#ff4b00' },
    chipDot: { width: '6px', height: '6px', borderRadius: '50%', background: '#ff4b00', boxShadow: '0 0 8px #ff4b00', display: 'inline-block' },
    errorCodeMain: { display: 'block', fontSize: 'clamp(100px, 20vw, 160px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-4px', background: 'linear-gradient(135deg, #ffffff 30%, #555 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', position: 'relative', zIndex: 2, filter: 'drop-shadow(0 0 40px rgba(255,75,0,0.2))' },
    glitchLayer: { position: 'absolute', top: 0, left: 0, fontSize: 'clamp(100px, 20vw, 160px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-4px', zIndex: 3, pointerEvents: 'none' },
    pulseRing: { position: 'absolute', inset: '-20px', borderRadius: '50%', border: '2px solid rgba(255,75,0,0.2)', zIndex: 0, pointerEvents: 'none' },
    title: { fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 700, letterSpacing: '-0.5px', color: '#f0f0f0', marginBottom: '16px' },
    divider: { width: '48px', height: '2px', background: 'linear-gradient(90deg, transparent, #ff4b00, transparent)', margin: '0 auto 24px', borderRadius: '2px' },
    description: { fontSize: '16px', lineHeight: 1.7, color: '#888', maxWidth: '380px', margin: '0 auto 24px', fontWeight: 400 },
    terminal: { display: 'inline-flex', alignItems: 'center', padding: '10px 18px', borderRadius: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Space Mono', monospace", fontSize: '13px', marginBottom: '36px', letterSpacing: '0.5px' },
    buttonGroup: { display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' },
    btnPrimary: { padding: '12px 28px', borderRadius: '8px', border: 'none', background: '#ff4b00', color: '#fff', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '15px', cursor: 'pointer', transition: 'all 0.2s ease' },
    btnSecondary: { padding: '12px 28px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'transparent', color: '#ccc', fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '15px', cursor: 'pointer', transition: 'all 0.2s ease' },
    hint: { fontSize: '12px', color: '#444', fontFamily: "'Space Mono', monospace", letterSpacing: '0.5px' },
};

export default ErrorPage;