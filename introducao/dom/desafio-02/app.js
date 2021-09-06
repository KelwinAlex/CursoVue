new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert('Altera aqui!')
        },
        armazenaValor(event){
            this.valor = event.target.value
        }
    }
})