console.log("hello world")

const helloWorlBox = document.getElementById('hello-world')



$.ajax({
    type: 'GET',
    url: '/hello-world/',
    success: function(response) {
        console.log('success', response.text)
        helloWorlBox.textContent = response.text
    },
    error: function(error) {
        console.log('error', error)
    }
})