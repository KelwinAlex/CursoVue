new Vue({
    el: '#desafio',
    data: {
        nome: 'Kelwin',
        idade: 22,
        imagem: 'https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg'
    },
    methods: {
        randomNumber: function() {
            return Math.random(0,1)
        }
    }
})