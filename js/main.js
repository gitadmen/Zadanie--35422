$(document).ready(function() {

    $('#get-data').click(function() {

        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function(data) {


                let pId = $('<p></p>').text(`Post ID: ${data.id}`)
                let pUserId = $('<p></p>').text(`Post ID: ${data.userId}`)
                let pTitle = $('<p></p>').text(`Post ID: ${data.title}`)
                let pBody = $('<p></p>').text(`Post ID: ${data.body}`)
                let hr = $('<hr />');
                let myDiv = $('<div></div>')

                let jqBody = $('body')

                jqBody.append(myDiv)
                myDiv.append(pId)
                myDiv.append(pUserId)
                myDiv.append(pTitle)
                myDiv.append(pBody)
                jqBody.append(hr)


            })
            .fail(function(error) {
                console.log(error);
            })
    })
})