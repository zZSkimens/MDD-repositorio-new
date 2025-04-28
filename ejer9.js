async function esperaysaluda() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "!Pasaron los 2 segundos,wujuuuuuuuuuuu!";
}

esperaysaluda().then(mensaje => console.log(mensaje));