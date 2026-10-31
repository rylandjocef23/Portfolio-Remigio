export default function Projects() {
  const cardStyle = { 
    border: '1px solid #ddd', 
    padding: '20px', 
    borderRadius: '8px', 
    width: '100%', 
    marginBottom: '15px',
    backgroundColor: '#fff'
  };

  return (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>My Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div style={cardStyle}>
          <h3 style={{ marginBottom: '10px' }}>MindCare Hub</h3>
          <p>A mobile-first Progressive Web App built with React, Vite, Tailwind CSS, Firebase, and Supabase Edge Functions designed for student wellness tracking and biometric monitoring including chatbot integration productivity tools.</p>
        </div>

      </div>
    </div>
  );
}