console.log("hello world")
const helloWorlBox = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')
const spinnerBox = document.getElementById('spinner-box')


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
$.ajax({
    type: 'GET',
    url: '/data/',
    success: function(response) {
        console.log(response)
        const data = response.data
        setTimeout(() => {
            spinnerBox.classList.add('not-visible')
            console.log(data)
            data.forEach(element => {
                postsBox.innerHTML += `
                    ${element.title} - <b>${element.body}</b><br>
                `
            });
        }, 100);

        // const data = JSON.parse(response.data)
        // console.log(data)
    },
    error: function(error) {
        console.log(error)
    }
})