function saluda(nombre = 'desconocido', app = 'desconocido') {
    console.log(`Hola ${nombre} ${app}`)
  }
  
  const name = 'juan';
  const app = 'lopez';
  saluda(undefined, app);
  
  // '' !== null !== undefined !== 0