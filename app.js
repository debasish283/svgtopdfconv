const express = require('express');
const PDFDocument = require('pdfkit');
const SVGtoPDF = require('svg-to-pdfkit');
const axios = require('axios');
const fs = require('fs')

const app = express();

app.get('/', (req, res) => {
  axios.get('https://fakeql.com/placeholder/1000/500/e7d621158ec24ef6dsf3sf43459.svg')
      .then((response) => {
        const doc = new PDFDocument({
          layout: 'landscape',
          size: 'A4'
        })
        doc.pipe(fs.createWriteStream('output.pdf'));
        SVGtoPDF(doc, response.data.toString())
        doc.end();

      })
})

app.listen(3000, () => {
  console.log('server started at port 3000');
})
