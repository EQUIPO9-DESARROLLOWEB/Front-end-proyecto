'use client';
import { useParams, useRouter } from 'next/navigation';

export default function DetalleCandidato() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f2f5', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '20px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        width: '90%',
        maxWidth: '400px'
      }}>
        <div style={{ fontSize: '60px' }}>👤</div>
        <h1 style={{ color: '#1a237e', marginBottom: '10px' }}>Ficha Electoral</h1>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>
          Información del Candidato <strong>#{id}</strong>
        </p>
        
        <div style={{ 
          margin: '25px 0', 
          padding: '15px', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '10px',
          textAlign: 'left',
          fontSize: '0.9rem'
        }}>
          <p><strong>✅ Validación:</strong> Acta procesada</p>
          <p><strong>📍 Origen:</strong> Datos desde API oficial</p>
        </div>

        <button 
          onClick={() => router.push('/Resultados')}
          style={{ 
            cursor: 'pointer',
            backgroundColor: '#1a237e',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            width: '100%'
          }}
        >
          ← Regresar a Resultados
        </button>
      </div>
    </div>
  );
}