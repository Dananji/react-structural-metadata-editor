
exports.handler = async function(event, context) {
  let structure;
  try {
    structure = fs.readFileSync(
      path.join(__dirname, 'assets', 'structure.json'),
      'utf-8'
    );
    return {
      statusCode: 200,
      body: structure,
    }
  } catch (err) {
    console.error('Server -> Error fetching structure -> ', err);
  }
}
