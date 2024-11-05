import html2canvas from "html2canvas";

export async function generateCertificateImage(element: HTMLElement): Promise<string> {
  const canvas = await html2canvas(element);
  return canvas.toDataURL("image/png"); // Returns a Base64-encoded image URL
}
