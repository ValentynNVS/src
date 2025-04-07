console.log("hello world")
const helloWorlBox = document.getElementById('hello-world')
const postsBox = document.getElementById('posts-box')



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
        console.log(data)
        data.forEach(element => {
            postsBox.innerHTML += `
                ${element.title} - <b>${element.body}</b><br>
            `
        });
        // const data = JSON.parse(response.data)
        // console.log(data)
    },
    error: function(error) {
        console.log(error)
    }
})