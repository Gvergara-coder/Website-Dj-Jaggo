/**
 * Technical Rider PDF Generator
 * This component creates a downloadable PDF with the DJ's technical requirements
 * 
 * To use this component, install the library:
 * npm install jspdf html2canvas
 */

'use client'

import { Download } from 'lucide-react'

interface RiderPDFProps {
  djName?: string
  equipment?: Array<{ name: string; icon?: string }>
  requirements?: Array<{ title: string; description: string }>
}

export function RiderPDFButton({ 
  djName = '[TU NOMBRE]',
  equipment,
  requirements 
}: RiderPDFProps) {
  
  const generatePDF = async () => {
    try {
      // Dynamic import to avoid bundle bloat if not used
      const { jsPDF } = await import('jspdf')
      const html2canvas = (await import('html2canvas')).default

      const element = document.getElementById('rider-content')
      if (!element) return

      const canvas = await html2canvas(element, {
        backgroundColor: '#0D0D0D',
        scale: 2,
      })

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const imgData = canvas.toDataURL('image/png')
      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(`${djName.replace(/\s+/g, '-')}-Technical-Rider.pdf`)
    } catch (error) {
      console.error('Error generating PDF:', error)
      // Fallback: open a printable version
      window.print()
    }
  }

  return (
    <>
      <button
        onClick={generatePDF}
        className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-background font-bold rounded hover:shadow-lg hover:shadow-accent/50 transition-all transform hover:scale-105"
      >
        <Download className="w-5 h-5" />
        Descargar Rider PDF
      </button>

      {/* Hidden content for PDF generation */}
      <div id="rider-content" className="hidden">
        <div style={{ padding: '40px', color: '#FFF', backgroundColor: '#0D0D0D' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>
            TECHNICAL RIDER
          </h1>
          
          <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px' }}>
            DJ: {djName}
          </h2>

          {equipment && equipment.length > 0 && (
            <>
              <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>
                Equipment Required:
              </h3>
              <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
                {equipment.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '8px' }}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </>
          )}

          {requirements && requirements.length > 0 && (
            <>
              <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>
                Technical Requirements:
              </h3>
              {requirements.map((req, idx) => (
                <div key={idx} style={{ marginBottom: '15px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '5px' }}>
                    {req.title}
                  </h4>
                  <p style={{ fontSize: '12px', marginBottom: '10px' }}>
                    {req.description}
                  </p>
                </div>
              ))}
            </>
          )}

          <div style={{ marginTop: '40px', borderTop: '1px solid #333', paddingTop: '20px' }}>
            <p style={{ fontSize: '12px', color: '#999' }}>
              Generated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
