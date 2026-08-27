import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface PDFExportOptions {
  fileName?: string;
  elementId: string;
}

export async function exportElementToPDF(options: PDFExportOptions): Promise<void> {
  const { fileName = 'TamilNadu_Samacheer_Question_Paper.pdf', elementId } = options;
  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error(`Element with id ${elementId} not found`);
  }

  // Create canvas from DOM element with high DPI for crisp Tamil font rendering
  const canvas = await html2canvas(element, {
    scale: 2, // High resolution
    useCORS: true,
    logging: false,
    backgroundColor: '#ffffff',
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.95);
  
  // Standard A4 dimensions in mm
  const pdfWidth = 210;
  const pdfHeight = 297;
  const margin = 10;
  const contentWidth = pdfWidth - margin * 2;
  
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  
  // Calculate scaled height on A4
  const scaledContentHeight = (imgHeight * contentWidth) / imgWidth;
  
  const doc = new jsPDF('p', 'mm', 'a4');
  let heightLeft = scaledContentHeight;
  let position = margin;
  let pageNumber = 1;

  // First page
  doc.addImage(imgData, 'JPEG', margin, position, contentWidth, scaledContentHeight, undefined, 'FAST');
  heightLeft -= (pdfHeight - margin * 2);

  // If content is longer than 1 page, loop and add extra A4 pages
  while (heightLeft > 0) {
    position = -(pageNumber * (pdfHeight - margin * 2)) + margin;
    doc.addPage();
    doc.addImage(imgData, 'JPEG', margin, position, contentWidth, scaledContentHeight, undefined, 'FAST');
    heightLeft -= (pdfHeight - margin * 2);
    pageNumber++;
  }

  doc.save(fileName);
}
