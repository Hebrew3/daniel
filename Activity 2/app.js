const Title = document.getElementById('songTitle')
const Artist = document.getElementById('songArtist')

const Add = document.getElementById('add')
const ul = document.getElementById('songList')




add.addEventListener('click',()=>{
    const newTitle = Title.value;
    const newArtist = Artist.value;
    
    
    const p = document.createElement('li')
    const small = document.createElement('small')
    const span = document.createElement('span')

    p.innerHTML = newTitle;
    small.innerHTML = newArtist;
    span.innerHTML = "Delete";


    small.classList.add('d-block', 'text-muted');
    span.classList.add('badge','bg-danger', 'btn-delete')


    const li = document.createElement('li')
    li.append(p)
    li.append(small)
    li.appendChild(span)

    ul.append(li);
    
    console.log(li);
   
})

console.log(Title,Artist,Add)