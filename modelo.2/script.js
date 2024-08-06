function Contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.Value.length == 0 || fim.Value.length == 0 || passo.Value.length == 0) {
        window.alert('[ERRO]')
    }
}