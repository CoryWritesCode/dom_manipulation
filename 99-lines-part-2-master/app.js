let friends = ["Bri", "Sam", "Ray", "Jon", "Ramsey"];
let button = document.getElementsByTagName('button');

document.addEventListener('DOMContentLoaded', function() {


  button[0].addEventListener('click', function() {

    for (let p = 0; p < friends.length; p++) {
      let friendShip = document.createElement('div');
      friendShip.className = 'friend';
      let friendCard = document.createElement('h3');
      let friendName = document.createTextNode(`${friends[p]}`)
      friendCard.appendChild(friendName);
      friendShip.appendChild(friendCard);

      for (let s = 99; s > 0; s--) {
        let lyric = document.createElement('p');
        let song = `${friends[p]} made ${s} lines of code today! Found `;

        if (s > 2) {
          song += `1 bug and took it away. Now there's ${s - 1} lines `;
        } else if (s === 2) {
          song += `1 bug and took it away. Now there's ${s - 1} more line `;
        } else if (s === 1) {
          song = `${friends[p]} made ${s} line of code today! Found `;
          song += `the only bug and took it away. Now there's no more lines `;
        };

        song += 'of code left to play!';

        let verse = document.createTextNode(`${song}`);
        lyric.appendChild(verse);
        friendCard.appendChild(lyric);

      };

      document.body.appendChild(friendShip);

    };

    for (var i = 0; i < friends.length; i++) {
      for (var f = 99; f > 0; f--) {
        var line = `${friends[i]} made ${f} lines of code today! Found `;

        if (f > 2) {
          line += `1 bug and took it away. Now there's ${f - 1} lines `;
        } else if (f === 2) {
          line += `1 bug and took it away. Now there's ${f - 1} more line `;
        } else if (f === 1) {
          var line = `${friends[i]} made ${f} line of code today! Found `;
          line += `the only bug and took it away. Now there's no more lines `;
        };

        line += 'of code left to play!';

        console.log(line);
      };
      
    };

  });

});