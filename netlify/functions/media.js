exports.handler = async function(event, context) {
  const params = event.queryStringParameters || {};
  const type = params.type || '';
  const id = params.id || '';
  const title = params.title || 'Titre par défaut';
  const description = params.desc || 'Description par défaut';
  const image = params.img || '';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${image}">
        <title>${title}</title>
      </head>
      <body>
        <script>
          window.location = "drsound://share?type=${type}&id=${id}";
          setTimeout(() => { window.location = "https://apps.apple.com/app/id1292311461"; }, 1000);
        </script>
        Redirection vers l'application...
      </body>
      </html>
    `
  };
};
