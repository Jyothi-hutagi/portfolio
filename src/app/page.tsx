import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      padding: '120px 10% 0',
      textAlign: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>

  <div style={{
        backgroundColor: '#2B2B2B',
        color: 'white',
        padding: '8px 20px',
        borderRadius: '50px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '40px'
      }}>
        <span style={{ fontSize: '20px' }}>✨</span>
        Looking Forward to New Ventures
      </div>

      <h1 style={{
        fontSize: '64px',
        lineHeight: '1.2',
        marginBottom: '24px',
        fontWeight: '500'
      }}>
    Hey, I'M Jyothi Hutagi
        <span style={{
          position: 'relative',
          display: 'inline-block'
        }}>
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '0',
            width: '100%',
            height: '8px',
            backgroundColor: '#CDFF6B',
            zIndex: '-1'
          }}></span>
        </span>
      </h1>

      <p style={{
        fontSize: '20px',
        color: '#666',
        maxWidth: '800px',
        margin: '0 auto 40px',
        lineHeight: '1.6'
      }}>
        Transforming ideas into reality with modern web technologies. <br/>Whether it’s crafting user-friendly applications or building secure, scalable systems, I bring your vision to life with creativity and precision.
      </p>

      <Link href="/contact" style={{
        backgroundColor: '#CDFF6B',
        padding: '16px 32px',
        borderRadius: '50px',
        textDecoration: 'none',
        color: '#000',
        fontSize: '18px',
        fontWeight: '500',
        display: 'inline-block'
      }}>
        Let’s Build Something Amazing Together!
      </Link>
    </main>
  );
}
