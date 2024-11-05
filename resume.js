var pdf = new PDFObject({
	url: "resource/resume_programmer2.pdf",
	id: "pdfRendered",
	pdfOpenParams: {
	  view: "FitH"
	}
  }).embed("pdfRenderer");