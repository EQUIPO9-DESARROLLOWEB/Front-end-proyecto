// app/post/[id]/page.tsx

export default async function DetallePost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params; // Esto extrae el ID correctamente
    
    return (
      <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial', color: 'white' }}>
        <h1 style={{ fontSize: '24px' }}>Detalle del Candidato</h1>
        <div style={{ 
          marginTop: '20px', 
          padding: '20px', 
          border: '1px solid #444', 
          borderRadius: '8px',
          display: 'inline-block',
          backgroundColor: '#222'
        }}>
          <p style={{ fontSize: '20px' }}>
            Estás visualizando el perfil con ID: <strong style={{ color: '#0070f3' }}>{id}</strong>
          </p>
        </div>
        <br />
        <a href="/" style={{ color: '#aaa', textDecoration: 'underline', marginTop: '20px', display: 'block' }}>
          ← Volver a la lista
        </a>
      </div>
    );
}