function searchBarClickBorder(){
    let borderNone = "none"
    let borderWhite = "0.1vw solid white"
    let searchHover = '0.1vw solid rgb(106, 105, 105)'

    let searchBarBorder = (border) => {
        document.querySelector('.searchButton ').style.borderLeft = border;
        document.querySelector('.searchButton ').style.borderTop = border;
        document.querySelector('.searchButton ').style.borderBottom = border;
        document.querySelector('.browseButton ').style.borderRight = border;
        document.querySelector('.browseButton ').style.borderTop = border;
        document.querySelector('.browseButton ').style.borderBottom = border;
        document.querySelector('.searchInput ').style.borderTop = border;
        document.querySelector('.searchInput ').style.borderBottom = border;
    }
    
    document.querySelector('.searchBar').addEventListener('click', (e) => {
        searchBarBorder("0.17vw solid white")
    }, true)
    document.querySelector('body').addEventListener('click', (e) => {
        searchBarBorder("none")
        document.querySelector('.searchButton').removeAttribute('style')
        document.querySelector('.browseButton').removeAttribute('style')
        document.querySelector('.searchInput').removeAttribute('style')
    }, true)
}searchBarClickBorder()
document.addEventListener('contextmenu', event => event.preventDefault());




async function getPlaylist() {
    let PlaylistName = document.querySelector(".playlistCard ul")
    let playlistThumbnail="playlistThumbnail.jpg";
    let a=await fetch("http://127.0.0.1:3000/Songs/")
    let responce = await a.text()
    let div=document.createElement('div')
    div.innerHTML=responce;
    let all_A=div.getElementsByTagName('a')
    // console.log(all_A);
    let playlist=[]
    for(let i=0;i<all_A.length;i++){
        const element=all_A[i];
        if (element.href != "http://127.0.0.1:3000/" && element.href != "http://127.0.0.1:3000/Songs/data.json") {
            playlist.push(element.href.split("http://127.0.0.1:3000/Songs/").join('').split("/").join('').replace("%20"," "))
        }
    }
    // console.log(playlist);
    playlist.forEach(element => {
        let li = document.createElement("li");
        li.setAttribute("role", "button");
        li.classList.add("playlistCardItem");
        let playlistThumbnail=`http://127.0.0.1:3000/Songs/${element}/playlistThumbnail.jpg` 
        // console.log(playlistThumbnail)
        li.innerHTML = `
            <div class="plalylistThumbnail">
                <div class="playlistImage" style='background-image:url(${playlistThumbnail})'>
                    <div class="playlistPlayIcon"></div>
                </div>
            </div>
            <div class="details">
                <div class="playlistName">${element}</div>
                <div class="PlaylistCreater">Playlist Creater</div>
            </div>
        `;
        PlaylistName.appendChild(li);
    });
    return playlist
}
getPlaylist()

// playlistImage
// playlistThumbnail.jpg


async function getPlaylistSongs() {
    // let PlaylistName = document.querySelector(".playlistCard ul");
    let playlistThumbnail = "playlistThumbnail.jpg";
    let a = await fetch("http://127.0.0.1:3000/Songs/");
    let response = await a.text();
    let div = document.createElement('div');
    div.innerHTML = response;
    let all_A = div.getElementsByTagName('a');
    
    let playlistSongsName = [];
    let songNameForCheck;
    
    for (let i = 0; i < all_A.length; i++) {
        const element = all_A[i];
        
        document.querySelectorAll('.playlistCardItem').forEach(item => {
            item.addEventListener('click', async(e) => {
                let playlistItem = e.target.closest('.playlistCardItem');
                if (playlistItem) {
                    console.log(playlistItem.querySelector('.playlistName').innerHTML);
                    songNameForCheck = `http://127.0.0.1:3000/Songs/${playlistItem.querySelector('.playlistName').innerHTML}`;
                }
                let forSongsAwait=`http://127.0.0.1:3000/Songs/${playlistItem.querySelector('.playlistName').innerHTML}/`
                let b = await fetch(forSongsAwait);
                let songresponse = await a.text();
                let div = document.createElement('div');
                div.innerHTML = songresponse;
                let all_AOfSongs = div.getElementsByTagName('a');
                for (let j = 0; j < array.length; j++) {
                    const element2 = all_AOfSongs[j];
                    

                playlistSongsName.forEach(playlistElement => {
                    if (playlistElement === `${songNameForCheck}/`) {
                        songNames=`http://127.0.0.1:3000/Songs/${playlistItem.querySelector('.playlistName').innerHTML}/`
                        document.querySelector('.songs').innerHTML=`
                        <div class="songsCard" role="button">
                        <div class="songCardMargin">
                        <div class="songCardThumbnail">
                        </div>
                        <div class="songsCardDetail">
                            <a id="songName" href="/">${songNames}</a>
                            <a id="songArtist" href="/">Song Artist</a>
                        </div>
                    </div>
                    </div>
                        `
                    }
                });
            }
            });
        });
        console.log(songNameForCheck);

        if (element.href !== "http://127.0.0.1:3000/" && element.href !== "http://127.0.0.1:3000/Songs/data.json") {
            playlistSongsName.push(element.href);
        }
    }
    


    console.log(playlistSongsName);
    // playlistSongsName.forEach(element => {
    //     let li = document.createElement("li");
    //     li.setAttribute("role", "button");
    //     li.classList.add("playlistCardItem");
    //     let playlistThumbnail = `http://127.0.0.1:3000/Songs/${element}/playlistThumbnail.jpg`;
    //     li.innerHTML = `
    //         <div class="plalylistThumbnail">
    //             <div class="playlistImage" style='background-image:url(${playlistThumbnail})'>
    //                 <div class="playlistPlayIcon"></div>
    //             </div>
    //         </div>
    //         <div class="details">
    //             <div class="playlistName">${element}</div>
    //             <div class="PlaylistCreater">Playlist Creater</div>
    //         </div>
    //     `;
    //     PlaylistName.appendChild(li);
    // });

    return playlistSongsName;
}

getPlaylistSongs();


